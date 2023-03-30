// pages/addr/addr.js
var app = getApp()
let db = wx.cloud.database()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    flag1 : false,
    flag2 : true,
    addr : []
  },
  addAddress(){
    wx.chooseAddress({
      success (res) {
        app.globalData.addr.push(res)
      }
    })
    this.setData({
      flag1 : true,
      flag2 : false,
      addr : app.globalData.addr
    })
  },
  changeAddress(){
    wx.chooseAddress({
      success (res) {
        app.globalData.addr.pop()
        app.globalData.addr.push(res)
        //console.log(app.globalData.addr)
      }
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    wx.setNavigationBarTitle({
      title: "收货地址"
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
    let that = this
    //console.log(app.globalData.addr)
    db.collection('user').where({
      nickname: app.globalData.nickname,
    })
    .update({
      data:{
        addr : app.globalData.addr
      }
    })
    db.collection('user').where({
      nickname: app.globalData.nickname,
    })
    .get({
      success: (res)=>{
        //console.log(res.data[0].addr.length)
        if(res.data[0].addr.length){
          that.setData({
            flag1 : true,
            flag2 : false,
            addr : app.globalData.addr
          })
        }
      }
    })
    //console.log(that.data.addr)
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