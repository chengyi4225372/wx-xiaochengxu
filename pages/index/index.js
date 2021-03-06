// pages/index/index.js 
const app = getApp();
const navBar = require('../../components/navBar/navBar.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    companyMsg:"备案号：粤ICP备2020077515号-1",
  },
  joinTap(){
    wx.navigateTo({
      url: '/pages/preface/preface',
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) { 
     var wdata = this;
    
    //未测试 
    if(app.globalData.openid){

    }else{

    }

      //前言图片接口
      wx.request({
        url: getApp().globalData.parface_img,
        header: {
          'content-type': 'application/json' 
        },
        success (res) { 
          console.log(res.data.data.path);
           
          wdata.setData({
            prefaceImg:res.data.data.path
           });
        
          wx.setStorageSync('prefaceImg',res.data.data.path);
      
        }
      })
      navBar.tabbar("tabBar", 0, this);
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