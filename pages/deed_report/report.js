// pages/deed_report/report.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    /*
    reportList: [
      {
        imgPath: '../../images/banner.jpg',
        data: '截至2012年9月份，全市安排各类帮扶资金物资累计达140.27亿元，其中财政性帮扶资金98.16亿元，援建民生项目13059个。'
      },
      {
        imgPath: '../../images/banner.jpg',
        data: '2截至2012年9月份，全市安排各类帮扶资金物资累计达140.27亿元，其中财政性帮扶资金98.16亿元，援建民生项目13059个。'
      }
    ]
    */
    
  },
  currentChange(e) {
    var index = e.currentTarget.dataset.index;
    var reportList = this.data.reportList;
    reportList[index].current = e.detail.current
    this.setData({
      reportList: reportList
    })
  },
  prev(e) {
    var index = e.currentTarget.dataset.index;
    var reportList = this.data.reportList;
    if (reportList[index].current > 0) {
      reportList[index].current -= 1;
    }

    this.setData({
      reportList: reportList
    })
    console.log(reportList[index].current)
  },
  next(e) {
    var index = e.currentTarget.dataset.index;
    var reportList = this.data.reportList;
    reportList[index].current += 1
    this.setData({
      reportList: reportList
    })
    console.log(reportList[index].current)
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
       var report = this;
       
       wx.request({
         url: getApp().globalData.deeds_logdesc,
         method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
         // header: {}, // 设置请求的 header
         success: function(res){
           // success
           console.log(res.data.data);
            
           report.setData({
             report: res.data.data,
           })

           wx.setStorageSync('report', res.data.data);
            
         },
         fail: function() {
           // fail
         },
         complete: function() {
           // complete
         }
       }) 

      
       wx.request({
         url: getApp().globalData.deeds_log,
         method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
         success: function(res){
           // success
          console.log(res.data.data);
          
          report.setData({
            reportList : res.data.data,
          })
    
          wx.setStorageSync('reportList', res.data.data)

         },
         fail: function() {
           // fail
         },
         complete: function() {
           // complete
         }
       })
       
    var reportList = this.data.reportList;
    for (var i in reportList) {
      reportList[i].current = 0;
    }
    this.setData({
      reportList: reportList
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