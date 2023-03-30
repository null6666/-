// pages/cart/index.js 
var app = getApp()
let judgeAllSelect = ()=>{
  console.log(1)
}
let db = wx.cloud.database()
Page({
  /**
   * 页面的初始数据
   */
  data: {
    carts : [],
    isAllSelect : false,
    totalMoney : 0
  },
  updateAllCarts(){
    db.collection('user').where({
      nickname : app.globalData.nickname
    }).update({
      data: {
        allCarts : app.globalData.allCarts
      },
    })
  } ,
  updateBought(){
    db.collection('user').where({
      nickname : app.globalData.nickname
    }).update({
      data: {
        bought : app.globalData.bought
      },
    })
  } ,
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
    this.updateAllCarts()
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
    this.updateAllCarts()
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
    this.updateAllCarts()
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
    this.updateAllCarts()
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
  toBuy(){
    let that = this
    if(!app.globalData.allCarts.length){
      wx.showToast({
        title: '请选择商品加入购物车',
        icon: "none",
        duration: 1500,
        mask: true
      })
    }
    else{
      if(!app.globalData.addr.length){
        wx.navigateTo({
          url: '/pages/addr/addr',
        })
      }
      else{
        if(app.globalData.allCarts.every((item)=>{return item.checked == false})){
          wx.showToast({
            title: '请勾选需要购买的商品',
            icon: "none",
            duration: 1500,
            mask: true
          })
        }
        else{
          let cart = this.data.carts
          let length = cart.length
          for (let i = 0; i < length; i++) {
            if(cart[i].checked == true){
              app.globalData.bought.push(cart[i])
            }
          }
          //console.log(app.globalData.bought)
          for (let i = 0; i < length; i++) {
            if(cart[i].checked == true){
              cart.splice(i,1)
              i = i-1
              length = length - 1
            }
          }
          //console.log(cart)
          that.setData({
            carts : cart,
            isAllSelect : false,
            totalMoney : 0
          })
          app.globalData.allCarts = cart
          this.updateAllCarts()
          this.updateBought()
          wx.navigateTo({
            url: '/pages/buy/buy',
          })
          //console.log(app.globalData.bought)
        }
      }
    }
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
        //console.log(item)
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