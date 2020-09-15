
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
      contactinfo: '<p style="text-indent:2em;">今年脱贫攻坚任务完成后，我国将有1亿左右贫困人口实现脱贫，提前10年实现联合国2030年可持续发展议程的减贫目标，世界上没有哪一个国家能在这么短的时间内帮助这么多人脱贫，这对中国和世界都具有重大意义。</p><p>今年是脱贫攻坚战最后一年，收官之年又遭遇疫情影响，各项工作任务更重、要求更高。</p><p>到2020年现行标准下的农村贫困人口全部脱贫，是党中央向全国人民作出的郑重承诺，必须如期实现，没有任何退路和弹性。这是一场硬仗，越到最后越要紧绷这根弦，不能停顿、不能大意、不能放松。</p><br/><img src="../../images/img8.png"/>',
      contactinfo2: '<p>今年脱贫攻坚任务完成后，我国将有1亿左右贫困人口实现脱贫，提前10年实现联合国2030年可持续发展议程的减贫目标，世界上没有哪一个国家能在这么短的时间内帮助这么多人脱贫，这对中国和世界都具有重大意义。</p><p>今年是脱贫攻坚战最后一年，收官之年又遭遇疫情影响，各项工作任务更重、要求更高。</p><p>到2020年现行标准下的农村贫困人口全部脱贫，是党中央向全国人民作出的郑重承诺，必须如期实现，没有任何退路和弹性。这是一场硬仗，越到最后越要紧绷这根弦，不能停顿、不能大意、不能放松。</p><br/><img src="../../images/img7.png"/>',
      contactinfo3: '<p>今年脱贫攻坚任务完成后，我国将有1亿左右贫困人口实现脱贫，提前10年实现联合国2030年可持续发展议程的减贫目标，世界上没有哪一个国家能在这么短的时间内帮助这么多人脱贫，这对中国和世界都具有重大意义。</p><p>今年是脱贫攻坚战最后一年，收官之年又遭遇疫情影响，各项工作任务更重、要求更高。</p><p>到2020年现行标准下的农村贫困人口全部脱贫，是党中央向全国人民作出的郑重承诺，必须如期实现，没有任何退路和弹性。这是一场硬仗，越到最后越要紧绷这根弦，不能停顿、不能大意、不能放松。</p><br/><img src="../../images/img9.png"/>'
    }
    that.setData({
      contactinfo: data.contactinfo,
      contactinfo2: data.contactinfo2,
      contactinfo3: data.contactinfo3
    })
    WxParse.wxParse('content', 'html', data.contactinfo, that);
    WxParse.wxParse('content2', 'html', data.contactinfo2, that);
    WxParse.wxParse('content3', 'html', data.contactinfo3, that);
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