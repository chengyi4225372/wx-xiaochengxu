// pages/deed_diary/diary.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    /*
    diaryList: [
      {
        title: '2015年1月29日，习近平总书记在国家民委一份简报上批示',
        data: '全面实现小康，少数民族一个都不能少，一个都不能掉队，要以时不我待的担当精神，创新工作思路，加大扶持力度，因地制宜，精准发力，确保如期啃下少数民族脱贫这块“硬骨头”，确保各族群众如期实现全面小康。'
      },
      {
        title: '2018年2月12日在打好精准脱贫攻坚战座谈会上的讲话',
        data: '贫困群众既是脱贫攻坚的对象，更是脱贫致富的主体。要加强扶贫同扶志、扶智相结合，激发贫困群众积极性和主动性，激励和引导他们靠自己的努力改变命运。'
      },
      {
        title: '2015年1月29日，习近平总书记在国家民委一份简报上批示',
        data: '全面实现小康，少数民族一个都不能少，一个都不能掉队，要以时不我待的担当精神，创新工作思路，加大扶持力度，因地制宜，精准发力，确保如期啃下少数民族脱贫这块“硬骨头”，确保各族群众如期实现全面小康。'
      },
      {
        title: '2018年2月12日在打好精准脱贫攻坚战座谈会上的讲话',
        data: '贫困群众既是脱贫攻坚的对象，更是脱贫致富的主体。要加强扶贫同扶志、扶智相结合，激发贫困群众积极性和主动性，激励和引导他们靠自己的努力改变命运。'
      },
      {
        title: '2018年2月12日在打好精准脱贫攻坚战座谈会上的讲话',
        data: '贫困群众既是脱贫攻坚的对象，更是脱贫致富的主体。要加强扶贫同扶志、扶智相结合，激发贫困群众积极性和主动性，激励和引导他们靠自己的努力改变命运。'
      }
    ]
    */
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
        var diary = this;

        wx.request({
          url: getApp().globalData.deeds_news_list,
          method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
          success: function(res){
            // success
            console.log(res.data.data);
            
            diary.setData({
              diaryList:res.data.data,
            })

            wx.setStorageSync('diaryList', res.data.data);

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