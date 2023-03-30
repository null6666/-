var app = getApp()
const defaultAvatarUrl = 'https://mmbiz.qpic.cn/mmbiz/icTdbqWNOwNRna42FI242Lcia07jQodd2FJGIYQfG0LAJGFxM4FbnQP6yfMxBgJ0F3YRqJCJ1aPAK2dQagdusBZg/0'
let db = wx.cloud.database()
Page({
  data: {
    avatarUrl : defaultAvatarUrl,
    nickname : "",
    getImg : false,
    getName : false,
  },
  onLoad() {
    wx.setNavigationBarTitle({
      title: "登录"
    })
  },
  onChooseAvatar(e) {
    const { avatarUrl } = e.detail 
    this.setData({
      avatarUrl,
      getImg : true
    })
  },
  switch(e){
    //console.log(e.detail.value)
    this.setData({
      nickname : e.detail.value,
      getName : true
    })
    app.globalData.nickname = e.detail.value
    //console.log(app.globalData.nickname)
  },
  login(){
    if (this.data.getImg == false | this.data.getName == false) {
      wx.showToast({
        title: '请补全信息',
        icon: "none",
        duration: 1500,
        mask: true
      })
    }
    else{
      db.collection('user').where({
        nickname: this.data.nickname,
      })
      .get({
        success: (res)=>{
          if(!res.data.length){
            db.collection('user').add({
              data:{
                nickname : this.data.nickname,
                avatarUrl : this.data.avatarUrl,
                allCarts : [],
                bought : [],
                addr : []
              }
            })
          }
          else{
            //console.log(res.data[0].allCarts)
            app.globalData.allCarts = res.data[0].allCarts
            app.globalData.addr = res.data[0].addr
            app.globalData.bought = res.data[0].bought
            db.collection('user').where({
              nickname : app.globalData.nickname
            }).update({
              data: {
                avatarUrl : this.data.avatarUrl
              },
            })
          }
          wx.switchTab({url:'/pages/index/index'})
        },
      })
    }
  }
})
