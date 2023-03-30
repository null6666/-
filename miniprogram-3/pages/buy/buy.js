// pages/buy/buy.js
var app = getApp()
let db = wx.cloud.database()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    flag1 : false,
    flag2 : true,
    addr : [],
    bought : []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    this.setData({
      bought : app.globalData.bought
    })
    wx.setNavigationBarTitle({
      title: "我的订单"
    })
    //console.log(app.globalData.bought)
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
    db.collection('user').where({
      nickname: app.globalData.nickname,
    })
    .get({
      success: (res)=>{
        //console.log(res.data[0].addr.length)
        if(res.data[0].addr.length){
          this.setData({
            flag1 : true,
            flag2 : false,
            addr : app.globalData.addr
          })
        }
      }
    })
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