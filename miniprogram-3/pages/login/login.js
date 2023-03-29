const app = getApp()
const defaultAvatarUrl = 'https://mmbiz.qpic.cn/mmbiz/icTdbqWNOwNRna42FI242Lcia07jQodd2FJGIYQfG0LAJGFxM4FbnQP6yfMxBgJ0F3YRqJCJ1aPAK2dQagdusBZg/0'
Page({
  data: {
    avatarUrl: defaultAvatarUrl,
    getImg : false,
    getName : false
  },
  onLoad() {
  },
  onChooseAvatar(e) {
    const { avatarUrl } = e.detail 
    this.setData({
      avatarUrl,
      getImg : true
    })
  },
  jump(){
    wx.switchTab({url:'/pages/index/index'})
  },
  switch(){this.setData({
    getName : true
  })
  }
})
