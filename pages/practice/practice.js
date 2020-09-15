// pages/practice/practice.js
const app = getApp();

Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
   var wxdata = this;

   wx.request({
     url: getApp().globalData.explore_desc,
     method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
     success: function(res){
       // success
       console.log(res.data.data);
        
       wxdata.setData({
          desc: res.data.data,
       })

       wx.setStorageSync('desc', res.data.data);

     },
     fail: function() {
       // fail
     },
     complete: function() {
       // complete
     }
   })

    wx.request({
      url: getApp().globalData.explore_cates,
      method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
      success: function(res){
        console.log(res.data.data);
        
        wxdata.setData({
          data:res.data.data,
        })

        wx.setStorageSync('data', res.data.data);

      },
      fail: function() {
        // fail
      },
      complete: function() {
        // complete
      }
    })

    wx.request({
      url: getApp().globalData.explore_history,
      method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
      success: function(res){
      console.log(res.data.data);

         wxdata.setData({
            history:res.data.data,
         })

       wx.setStorageSync('history', res.data.data); 

      },
      fail: function() {
        // fail
      },
      complete: function() {
        // complete
      }
    })

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    if (typeof this.getTabBar === 'function' &&
      this.getTabBar()) {
      this.getTabBar().setData({
        selected: 2
      })
    }
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})