// pages/honor_individual/individual.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    current: 0,
    /*
    reportList: [
      {
        imgPath: '../../images/banner.jpg',
        title: '乐重阳',
        address: '武汉市江夏区横沟桥镇大畈村13组',
        data: '截至2012年9月份，全市安排各类帮扶资金物资累计达140.27亿元，其中财政性帮扶资金98.16亿元，援建民生项目13059个。'
      },
      {
        imgPath: '../../images/banner.jpg',
        title: '乐重阳',
        address: '武汉市江夏区横沟桥镇大畈村13组',
        data: '2截至2012年9月份，全市安排各类帮扶资金物资累计达140.27亿元，其中财政性帮扶资金98.16亿元，援建民生项目13059个。'
      }
    ]
    */
  },
  currentChange(e) {
    this.setData({
      current: e.detail.current
    })
  },
  prev() {
    this.setData({
      current: this.data.current - 1
    })
  },
  next() {
    this.setData({
      current: this.data.current + 1
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
     var person = this;
     
     wx.request({
       url: getApp().globalData.person_list,
       method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
       success: function(res){
         // success
         console.log(res.data.data);
         
          person.setData({
            reportList :res.data.data,
          })
          
       wx.setStorageSync('reportList',res.data.data)

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