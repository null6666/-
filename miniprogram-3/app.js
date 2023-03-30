// app.js
App({
  onLaunch() {
    // 展示本地存储能力
    const logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)
    wx.cloud.init({
      env: 'j1123958513-0ga33mq167df24a1'
    })
    /*const db = wx.cloud.database()
    db.collection('goods').add({
      data:{
        goods : "警帽"
      }
    })
    db.collection('goods').where({
      goods : "警帽"
    }).get({
      success : function(res){
        console.log(res.data)
      }
    })*/
  },
  globalData: {
    nickname : "",
    allCarts : [],
    addr : [],
    bought : []
  }
})
