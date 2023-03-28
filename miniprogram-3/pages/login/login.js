// pages/login/login.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userinfo: {
      avatarUrl:'/scr/img/icon/主页.png',
      nickName:'未授权'
  },
  hasUserInfo: false,
  canIUseUserInfo: false,
  },
  getUserInfo(){
    wx.getUserProfile({
      desc: '获取您的微信个人信息',
      success:(res)=>{
        console.log(res.userInfo)
        this.setData({
          userinfo:res.userInfo,
          hasUserInfo:true
        })
        wx.setStorageSync('userinfo', res.userInfo)
      },
      fail:function(e){
          wx.showToast({
            title: '你选择了取消',
            icon: "none",
            duration: 1500,
            mask: true
          })
      }
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    this.setData({
      canIUseUserInfo : true
  })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {
    /*var n = wx.getStorageSync("userinfo");
        //当本地缓存的用户名称不为""或者null时，设置userinfo信息
        if(n.nickName != '' && n.nickName != null){
            this.setData({
                userinfo: n,
                hasUserInfo:true,
                canIUseGetUserProfile:true
            })
            // 通过wx.login获取登录凭证（code），然后通过code去获取我们用户的openid
            wx.login({
              success:(res)=>{
                  console.log(res);
              },
            })
        }*/
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})