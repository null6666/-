// pages/usercenter/index.js
var app = getApp()
const defaultAvatarUrl = 'https://mmbiz.qpic.cn/mmbiz/icTdbqWNOwNRna42FI242Lcia07jQodd2FJGIYQfG0LAJGFxM4FbnQP6yfMxBgJ0F3YRqJCJ1aPAK2dQagdusBZg/0'
Page({
  /**
   * 页面的初始数据
   */
  data: {
    avatarUrl : defaultAvatarUrl,
    nickname : ""
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    let db = wx.cloud.database()
    /**db.collection('user').where({
      _openid: 'oCY1p5I4vLDmQOHSVeHvUHOXPF9A',
    })
    .get({
      success: (res)=>{
        console.log(res.data[0].nickname)
        this.setData({
          nickname : res.data[0].nickname
        })
      }
    })*/
    let that = this
    db.collection('user').where({
      nickname: app.globalData.nickname,
    })
    .get({
      success: function(res){
        //console.log(res.data[0].nickname)
        that.setData({
          nickname : res.data[0].nickname,
          avatarUrl : res.data[0].avatarUrl
        })
      }
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