// index.js
// 获取应用实例
Page({
  /**
   * 页面的初始数据
   */
  data: {
    swiperGoodsList: [{name: "警用皮鞋",price: 100}, {name: "手电筒",price: 50}, {name:"腰带",price: 50}],
    goodsList: [{name:"警帽",price: 50},{name:"公大书包",price: 100},{name:"冬大衣",price: 200},{name:"警用冬裤",price: 100},{name:"v领长袖毛衣",price: 100},{name:"v领毛衣",price: 100}]
  },
  onClickJump(event){
    wx.navigateTo({
      url: '/pages/goods/goods/index?id='+event.target.dataset.goods+'&price='+event.target.dataset.price
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
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