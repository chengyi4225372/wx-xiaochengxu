// pages/product/product.js

const navBar = require('../../components/navBar/navBar.js');
const app = getApp();

Page({

  /**
   * 页面的初始数据
   */
  data: {
    /*
    productLists: [
      {
        imgPath: '../../images/address3.png'
      },
      {
        imgPath: '../../images/address4.png'
      },
      {
        imgPath: '../../images/address5.png'
      },
      {
        imgPath: '../../images/address6.png'
      },
      {
        imgPath: '../../images/address7.png'
      },
      {
        imgPath: '../../images/address8.png'
      },
      {
        imgPath: '../../images/address9.png'
      },
      {
        imgPath: '../../images/address1.png'
      },
      {
        imgPath: '../../images/address2.png'
      }
    ],
    */
    radioIndex: 0
  },
  // 选择
  radioChooise(e){
    var index = e.currentTarget.dataset.index;
    this.setData({
      radioIndex: index
    })
  },
  joinTap(){
    var list = this.data.data;
    var index = this.data.radioIndex;
    var id = list[index].id;
    
    wx.navigateTo({
      url: '/pages/product_info/info?id='+id,
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    navBar.tabbar("tabBar", 3, this);
      var wxdata = this;

      wx.request({
        url:  getApp().globalData.product_cate,
        method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
        success: function(res){
          // success
          console.log(res.data.data);

          wxdata.setData({
            data: res.data.data,
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
        url: getApp().globalData.product_desc,
        method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
        success: function(res){
           
         console.log(res.data.data); 
          wxdata.setData({
            con:res.data.data,
          })

          wx.setStorageSync('con', res.data.data);
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
        selected: 3
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