// pages/goods/goods/index.js
var app = getApp()
let db = wx.cloud.database()
Page({
  /**
   * 页面的初始数据
   */
  data: {
    goodsName : "",
    goodsUrl : "",
    goodsPrice : "",
    goodsList : {},
    showDialog : 0,
    quantity : 1
  },
  toCart(){
    wx.switchTab({
      url: '/pages/cart/index',
    })
  },
  addToCart(e){
    wx.switchTab({
      url: '/pages/cart/index',
    })
    let goodsMsg = {goods: this.data.goodsName,price:this.data.goodsPrice,quantity:this.data.quantity,checked: false}
    app.globalData.allCarts.push(goodsMsg)
    db.collection('user').where({
      nickname : app.globalData.nickname
    }).update({
      data: {
        allCarts : app.globalData.allCarts
      },
    })
    //console.log(app.globalData.allCarts)
  },
  /**immeBuy(){
    wx.showToast({
      title: '购买成功',
      icon: 'success',
      duration: 2000
    })
  },*/
  toggleDialog(){
    this.setData({
      showDialog : 1
    })
  },
  closeDialog(){
    this.setData({
      showDialog : 0
    })
  },
  plus(){
    let that = this
    this.setData({
      quantity : that.data.quantity + 1
    })
  },
  minus(){
    let that = this
    this.setData({
      quantity : that.data.quantity - 1
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    //console.log(options)
    const fs = wx.getFileSystemManager()
    let that = this
    fs.readdir({
      dirPath: "/scr/img/"+options.id,
      success(res){
        //console.log(res.files)
        that.setData({
          goodsList : res.files,
          goodsUrl : "/scr/img/"+options.id+"/"+res.files[0]
        })
        //console.log(that.data.goodsList)
      }
    })
    this.setData({
      goodsName : options.id,
      goodsPrice : options.price,
    })
    wx.setNavigationBarTitle({
      title: options.id
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