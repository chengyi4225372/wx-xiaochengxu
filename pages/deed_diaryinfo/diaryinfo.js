const innerAudioContext = wx.getBackgroundAudioManager();
var WxParse = require('../../wxParse/wxParse.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    audioTitle: '2015年1月29日，习近平总书记在国家民委一份简报上批示',
    audioSrc: 'https://webfs.yun.kugou.com/202008271616/11f35e4acecc4165d83245ebe65bbd70/G061/M0A/18/0D/3YYBAFa4qZSABFcHAD89_Rt4Sfw476.mp3',
    isplay: false, //是否播放
    totalTime: 0, //总时长
    interval: "", //定时器
    currentTime: 0, //播放进度时长
    playState: false, //播放状态
  },
  //点击播放
  play: function() {
    var that = this;
    innerAudioContext.play();

    innerAudioContext.onCanplay(() => {
      innerAudioContext.duration;
      // 必须。不然也获取不到时长

      setTimeout(() => {
        innerAudioContext.currentTime
        innerAudioContext.onTimeUpdate(() => {
          var totalTime = this.transTime(innerAudioContext.duration) //总时长
          var ctime = this.transTime(innerAudioContext.currentTime) //当前播放进度      

          var val = (innerAudioContext.currentTime / innerAudioContext.duration) * 100
          this.setData({
            changeSlideNum: val,
            totalTime: totalTime,
            currentTime: ctime
          });
        })
      }, 1000)
    })
    //监听播放
    innerAudioContext.onPlay(() => {
        that.setData({
          isplay: true,
          playState: true
        })

      }),
      //监听停止
      innerAudioContext.onStop(() => {
        that.setData({
          isplay: false,
          playState: false
        })
      }),
      // 监听暂停
      innerAudioContext.onPause(() => {
        that.setData({
          isplay: false,
          playState: false
        })
      }),
      //监听自然播放结束
      innerAudioContext.onEnded(() => {
        that.setData({
          isplay: false,
          playState: false
        })
      })

  },
  //点击 停止
  stop: function() {
    innerAudioContext.pause();
    console.log(innerAudioContext.currentTime)
    this.setData({
      isplay: false,
      playState: false
    })
  },
  transTime: function(time) {
    var duration = parseInt(time);
    var minute = parseInt(duration / 60);
    var sec = duration % 60 + '';
    var isM0 = ':';
    if (minute == 0) {
      minute = '00';
    } else if (minute < 10) {
      minute = '0' + minute;
    }
    if (sec.length == 1) {
      sec = '0' + sec;
    }
    return minute + isM0 + sec
  },
  onPlay() {
    var src = this.data.audioSrc;
    var title = this.data.audioTitle;

    innerAudioContext.src = src;
    innerAudioContext.title = title;
    if (this.data.isplay) {
      this.stop()
    } else {
      if (innerAudioContext.src == this.properties.innerAudioContextSrc) {
        this.play()
      } else {

      }

    }
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    var that = this;
    var data = {
      contactinfo: '<p style="text-indent:2em;">全面实现小康，少数民族一个都不能少，一个都不能掉队，要以时不我待的担当精神，创新工作思路，加大扶持力度，因地制宜，精准发力。</p><p style="text-indent:2em;">营销新浪潮·第五届移动互联网营销峰会|鸟哥笔记 : 活动行提供营销新浪潮·第五届移动互联网营销峰会|鸟哥笔记门票优惠。营销新浪潮·第五届移动互联网营销峰会|鸟哥笔记由（鸟哥笔记）在上海举办，预约报名截止（2020/1/14 17:30:00）。一键查询（营销新浪潮·第五届移动互联网营销峰会|鸟哥笔记）相关信息，包含时间、 地点、日程、价格等信息，在线报名，轻松快捷。</p><br/><img src="../../images/img8.png"/>'
    }
    that.setData({
      contactinfo: data.contactinfo
    })
    WxParse.wxParse('content', 'html', data.contactinfo, that);
    // 音频初始化
    const bgM = wx.createInnerAudioContext();
    bgM.src = this.data.audioSrc;
    bgM.onCanplay(() => {
      bgM.duration
    })
    setTimeout(() => {
      var totalTime = this.transTime(bgM.duration) //总时长
      var ctime = this.transTime(0) //当前播放进度      

      var val = (bgM.currentTime / bgM.duration) * 100
      this.setData({
        changeSlideNum: 0,
        totalTime: totalTime,
        currentTime: ctime
      });
    }, 100)

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})