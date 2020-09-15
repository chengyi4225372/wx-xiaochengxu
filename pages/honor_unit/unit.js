var WxParse = require('../../wxParse/wxParse.js')
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
    var that = this;
 
    
    var data = {
      contactinfo: '<p style="text-indent:2em;">全面实现小康，少数民族一个都不能少，一个都不能掉队，要以时不我待的担当精神，创新工作思路，加大扶持力度，因地制宜，精准发力。</p><br/><p style="text-indent:2em;">营销新浪潮·第五届移动互联网营销峰会|鸟哥笔记 : 活动行提供营销新浪潮·第五届移动互联网营销峰会|鸟哥笔记门票优惠。营销新浪潮·第五届移动互联网营销峰会|鸟哥笔记由（鸟哥笔记）在上海举办，预约报名截止（2020/1/14 17:30:00）。一键查询（营销新浪潮·第五届移动互联网营销峰会|鸟哥笔记）相关信息，包含时间、 地点、日程、价格等信息，在线报名，轻松快捷。</p><br/><img src="../../images/img8.png"/>'
    }
    that.setData({
      contactinfo: data.contactinfo
    })
    WxParse.wxParse('content', 'html', data.contactinfo, that); 


    wx.request({
      url: getApp().globalData.company_desc,
      method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
      success: function(res){
        // success
        console.log(res.data.data);
        
        unit.setData({
          that : res.data.data,
        })
      

        
     

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