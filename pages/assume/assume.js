// pages/assume/assume.js
var WxParse = require('../../wxParse/wxParse.js')
Page({

  /**
   * 页面的初始数据
   */
  // data: {

  // },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;

    wx.request({
      url: getApp().globalData.overnews,
      data:{'cid':1},
      method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
      success: function(res){
         console.log(res.data.data);
        
         that.setData({
           result :res.data.data,  
         })


      wx.setStorageSync('result', res.data.data)

      },
      fail: function() {
        // fail
      },
      complete: function() {
        // complete
      }
    }) 


    wx.request({
      url: getApp().globalData.overnews,
      data:{'cid':2},
      method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
      success: function(res){
         console.log(res.data.data);
        
         that.setData({
          contactinfo: res.data.data[0].content,
        })
        WxParse.wxParse('content', 'html',res.data.data[0].content, that);



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