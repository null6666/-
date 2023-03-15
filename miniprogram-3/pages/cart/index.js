// pages/cart/index.js 
var app = getApp()
let judgeAllSelect = ()=>{
  console.log(1)
}
Page({
  /**
   * 页面的初始数据
   */
  data: {
    carts : [],
    isAllSelect : false,
    totalMoney : 0
  },
  switchSelect(e){
    let i = e.target.dataset.selectindex
    let carts = this.data.carts
    carts[i].checked = !carts[i].checked
    let isAllSelect = carts.every((item)=>{
      return item.checked
    })
    let totalMoney = this.calculateTotalMoney(carts)
    this.setData({
      carts ,
      isAllSelect,
      totalMoney
    })
    app.globalData.allCarts = carts
  },
  allSelect(){
    let isAllSelect = !this.data.isAllSelect
    let carts = this.data.carts
    carts.forEach((item)=>{
        item.checked = isAllSelect
    })
    let totalMoney = this.calculateTotalMoney(carts)
    this.setData({
      carts ,
      isAllSelect,
      totalMoney
    })
    app.globalData.allCarts = carts
  },
  plus(e){
    let i = e.target.dataset.quantityindex
    let carts = this.data.carts
    carts[i].quantity += 1
    let totalMoney = this.calculateTotalMoney(carts)
    this.setData({
      carts,
      totalMoney
    })
    app.globalData.allCarts = carts
  },
  minus(e){
    let i = e.target.dataset.quantityindex
    let carts = this.data.carts
    carts[i].quantity -= 1
    let totalMoney = this.calculateTotalMoney(carts)
    this.setData({
      carts,
      totalMoney
    })
    app.globalData.allCarts = carts
  },
  calculateTotalMoney(carts){
    let totalMoney = 0
    for(let i=0;i<carts.length;i++){
      if(carts[i].checked){
        totalMoney += carts[i].quantity*carts[i].price
      }
    }
    //console.log(totalMoney)
    return totalMoney
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
    this.setData({
      carts : app.globalData.allCarts
    })
    let isAllSelect = false
    //console.log(this.data.carts)
    //console.log(this.data.isAllSelect)
    if(this.data.carts.length){
      isAllSelect = this.data.carts.every((item)=>{
        console.log(item)
        return item.checked
      })
    }
    //console.log(isAllSelect)
    let totalMoney = this.calculateTotalMoney(this.data.carts)
    this.setData({
      isAllSelect,
      totalMoney
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