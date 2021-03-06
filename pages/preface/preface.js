// pages/preface/preface.js
var WxParse = require('../../wxParse/wxParse.js')
Page({

  /**
   * 页面的初始数据
   */
  
  videoPlay(e){
    this.setData({
      videoPlay: false
    })
    var videoId = wx.createVideoContext(e.currentTarget.dataset.id)
    videoId.play();
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;


    wx.request({
      url: getApp().globalData.parface_content,
      method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
      success: function(res){
         console.log(res.data.data); 
        
         that.setData({
          result: res.data.data,
         })
       
         wx.setStorageSync('result', res.data.data) 
        //  WxParse.wxParse('content','html',res.data.data.content,that,5)
      },
      fail: function() {
        // fail
      },
      complete: function() {
        // complete
      }
    })

    // that.setData({
    //   contactinfo: data.contactinfo
    // })
    // WxParse.wxParse('content', 'html', data.contactinfo, that);
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