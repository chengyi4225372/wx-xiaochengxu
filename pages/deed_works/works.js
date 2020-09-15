// pages/deed_works/works.js
const innerAudioContext = wx.getBackgroundAudioManager();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    worksIndex: 0,
    /*
    audioList: [{
        title: '没有共产党就没有新中国',
      musicSrc: 'http://www.170mv.com/kw/antiserver.kuwo.cn/anti.s?rid=MUSIC_93477122&response=res&format=mp3|aac&type=convert_url&br=128kmp3&agent=iPhone&callback=getlink&jpcallback=getlink.mp3'
      },
      {
        title: '今天是你的生日',
        musicSrc: 'http://www.170mv.com/kw/antiserver.kuwo.cn/anti.s?rid=MUSIC_93477122&response=res&format=mp3|aac&type=convert_url&br=128kmp3&agent=iPhone&callback=getlink&jpcallback=getlink.mp3'
      },
      {
        title: '党啊亲爱的妈妈',
        musicSrc: 'http://www.170mv.com/kw/antiserver.kuwo.cn/anti.s?rid=MUSIC_93477122&response=res&format=mp3|aac&type=convert_url&br=128kmp3&agent=iPhone&callback=getlink&jpcallback=getlink.mp3'
      },
      {
        title: '走进新时代',
        musicSrc: 'https://win-web-nf01-sycdn.kuwo.cn/4136b8df9436a6907667c0ee6399beed/5f4620fc/resource/n3/15/74/4247141131.mp3'
      },
      {
        title: '五星红旗',
        musicSrc: 'https://so-sycdn.kuwo.cn/872c26494047de24468a743134c0df42/5f462203/resource/n1/40/71/1713796921.mp3'
      },
      {
        title: '唱支山歌给党听',
        musicSrc: 'https://win-web-ri01-sycdn.kuwo.cn/84dce8213ab92816711545a653ad870e/5f462139/resource/n1/29/56/834518072.mp3'
      },
      {
        title: '颂歌献给亲爱的党',
        musicSrc: 'https://win-web-re01-sycdn.kuwo.cn/d2b2e267cd416e136c27921dd5ff429e/5f46215f/resource/n3/18/72/2380513277.mp3'
      },
      {
        title: '履行党章赋予职责',
        musicSrc: 'https://win-web-re01-sycdn.kuwo.cn/d2b2e267cd416e136c27921dd5ff429e/5f46215f/resource/n3/18/72/2380513277.mp3',
      },
      {
        title: '组工干部之歌',
        musicSrc: 'https://eg-sycdn.kuwo.cn/8c0d70b4586af6bc8770f9909724c700/5f4621b5/resource/n3/24/70/50652587.mp3'
      },
      {
        title: '学习雷锋好榜样',
        musicSrc: 'https://win-web-nf01-sycdn.kuwo.cn/54221909130dd69ce6fa4a34ab5aa2ad/5f460098/resource/n1/19/12/1107019365.mp3'
      }
    ],
    videoList: [
      {
        src: 'http://wxsnsdy.tc.qq.com/105/20210/snsdyvideodownload?filekey=30280201010421301f0201690402534804102ca905ce620b1241b726bc41dcff44e00204012882540400&bizid=1023&hy=SH&fileparam=302c020101042530230204136ffd93020457e3c4ff02024ef202031e8d7f02030f42400204045a320a0201000400',
        poster: 'https://dss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2534506313,1688529724&fm=26&gp=0.jpg',
        title: '这里显示的内容是视频标题',
        duration: '03:06',
      },
      {
        src: 'http://wxsnsdy.tc.qq.com/105/20210/snsdyvideodownload?filekey=30280201010421301f0201690402534804102ca905ce620b1241b726bc41dcff44e00204012882540400&bizid=1023&hy=SH&fileparam=302c020101042530230204136ffd93020457e3c4ff02024ef202031e8d7f02030f42400204045a320a0201000400',
        poster: 'https://dss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2534506313,1688529724&fm=26&gp=0.jpg',
        title: '这里显示的内容是视频标题',
        duration: '03:06',
      },
      {
        src: 'http://wxsnsdy.tc.qq.com/105/20210/snsdyvideodownload?filekey=30280201010421301f0201690402534804102ca905ce620b1241b726bc41dcff44e00204012882540400&bizid=1023&hy=SH&fileparam=302c020101042530230204136ffd93020457e3c4ff02024ef202031e8d7f02030f42400204045a320a0201000400',
        poster: 'https://dss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2534506313,1688529724&fm=26&gp=0.jpg',
        title: '这里显示的内容是视频标题',
        duration: '03:06',
      },
      {
        src: 'http://wxsnsdy.tc.qq.com/105/20210/snsdyvideodownload?filekey=30280201010421301f0201690402534804102ca905ce620b1241b726bc41dcff44e00204012882540400&bizid=1023&hy=SH&fileparam=302c020101042530230204136ffd93020457e3c4ff02024ef202031e8d7f02030f42400204045a320a0201000400',
        poster: 'https://dss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2534506313,1688529724&fm=26&gp=0.jpg',
        title: '这里显示的内容是视频标题',
        duration: '03:06',
      }
    ],
    */
  },
  //加载更多
  musicMore(){
    
  },
  // 切换歌曲与视频
  worksTab(e) {
    var index = e.currentTarget.dataset.index;
    this.setData({
      worksIndex: index
    })
  },
  // 播放
  play(index, name, array) {
    var that = this;
    for(var i in array){
      if(i !== index){
        array[i]._play = false
      }
    }
    innerAudioContext.src = array[index].musicSrc;
    innerAudioContext.title = array[index].title;
    innerAudioContext.play();
    //监听播放
    innerAudioContext.onPlay(() => {
      array[index]._play = true
        that.setData({
          audioList: array
        })
      }),
      // 监听暂停
      innerAudioContext.onPause(() => {
        array[index]._play = false;
        that.setData({
          audioList: array
        })
      }),
      //监听停止
      innerAudioContext.onStop(() => {
        array[index]._play = false;
        that.setData({
          audioList: array
        })
      }),
      //监听自然播放结束
      innerAudioContext.onEnded(() => {
        array[index]._play = false;
        that.setData({
          audioList: array
        })
        that.nextPlay();

      })
  },
  // 暂停
  pause() {
    innerAudioContext.pause();
  },
  // 歌曲播放
  musicePlay(e) {
    var that = this
    var audioList = this.data.audioList
    var index = e.currentTarget.dataset.index
    var name = 'audioList'
    for (var i in audioList) {
      if (i == index) {
        that.setData({
          playIndex: index
        })
        audioList[i]._play = !audioList[i]._play
        if (audioList[i]._play == true) {
          that.play(index, name, audioList);
        } else {
          that.pause();
        }
      } else {
        audioList[i]._play = false;
      }

    }

    this.setData({
      audioList: audioList
    })
  },
  //下一首
  nextPlay() {
    var that = this;
    var audioList = that.data.audioList;
    var length = audioList.length;//列表音频长度
    var audioIndexPrev = that.data.playIndex;
    var audioIndexNow = audioIndexPrev;
    var name = 'audioList'
    if (audioIndexPrev === length - 1) {
      audioIndexNow = 0;
    } else {
      audioIndexNow = audioIndexPrev + 1;
      that.play(audioIndexNow, name, audioList)
    }
    that.setData({
      playIndex: audioIndexNow
    })
    
  },
  videoPlayer(videoContext){
    videoContext.play();
    this.pause();
  },
  // 视频播放
  videoPlay(e) {
    var that = this;
    var index = e.currentTarget.dataset.index;
    var videoList = this.data.videoList;
    for(var i in videoList){
      if(i == index){
        var videoContext = wx.createVideoContext('video' + index)
        videoList[index].play = true;
        that.videoPlayer(videoContext)
        
      } else {
        var videoContextPrev = wx.createVideoContext('video' + i)
        videoList[i].play = false;
        videoContextPrev.stop();
      }
    }
    
    that.setData({
      videoList: videoList
    })
  },
  // 视频播放完毕
  videoend() {
    var videoList = this.data.videoList;
    for(var i in videoList){
      videoList[i].play = false
    }
    this.setData({
      videoList: videoList
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
       var works = this;

       wx.request({
         url: getApp().globalData.deeds_music,
         data: {'cid':1},
         method: 'POST', // OPTIONS, GET, HEAD, , PUT, DELETE, TRACE, CONNECT
         success: function(res){
            
           works.setData({
            audioList:res.data.data,
           })
            wx.setStorageSync('audioList', res.data.data) 
         },
         fail: function() {
           // fail
         },
         complete: function() {
           // complete
         }
       }) 

        
       wx.request({
        url: getApp().globalData.deeds_video,
        data: {'cid':2},
        method: 'POST', // OPTIONS, GET, HEAD, , PUT, DELETE, TRACE, CONNECT
        success: function(res){
         console.log(res.data.data);  
         
          works.setData({
           videoList:res.data.data,
          })

           wx.setStorageSync('videoList', res.data.data) 
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