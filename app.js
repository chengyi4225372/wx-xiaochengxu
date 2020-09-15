//app.js

//var Http = "http://local.onebase.com/"; //测试接口

//正式接口
var Http = 'https://v1141.longcai027.cn/';


App({
  onLaunch: function () {
    // 展示本地存储能力
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })
    // 获取用户信息
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              // 可以将 res 发送给后台解码出 unionId
              this.globalData.userInfo = res.userInfo

              // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
              // 所以此处加入 callback 以防止这种情况
              if (this.userInfoReadyCallback) {
                this.userInfoReadyCallback(res)
              }
            }
          })
        }
      }
    })
  },

  globalData: {
    isIphoneX: false,
    userInfo: null,
    urlPath: Http,
    store_id:'',
    userInfo:'',
    //前言管理图
    parface_img: Http +"api/Preface/getPrefaceImg", //ok
    //前言管理序言
    parface_content: Http +"api/Preface/getPrefaceContent", //ok
    //综述管理分类设置 
    overview: Http +"api/Overview/getOverCates", //ok
    //深圳帮扶简史
    overcontent:  Http +"api/Overview/getHistoryNews", //ok
    //深圳当担新闻列表
    overnews:  Http +"api/Overview/getNews", //ok
    //探索实践简介
    explore_desc : Http + "api/Explore/getExploreDesc", //ok
    //探索实践分类设置
    explore_cates: Http +"api/Explore/getExploreCates", //ok
    //探索历史回望设置
    explore_history: Http +"api/Explore/getHistoryApi", //ok
    //探索实践历史回望新闻列表
    histort_news :  Http +"api/Explore/getHistoryNews", //ok
    //探索管理新闻列表
    explore_list: Http +"api/Explore/HistoryNews",//ok
    //探索管理新闻详情
    explore_info: Http +"api/Explore/ExploreNewsInfo",//ok 
    //项目精选列表
    product_cate: Http +"api/Product/getProductList" , //ok
    //项目精选简介
    product_desc: Http +"api/Product/getProductContent", //ok
    //项目精选详情
    product_info : Http +"api/Product/seeThisContent" , //ok 测试下
     //事迹风采分类接口
    deeds_cates: Http +"api/Deeds/getCatesList", //ok
    //事迹风采描述接口
    deeds_desc: Http +"api/Deeds/getDeedsContent", //ok
    //扶贫作品 音乐
    deeds_music: Http +"api/Deeds/getWorksMusicList", //ok
    //扶贫作品 视频
    deeds_video: Http +"api/Deeds/getWorksVideoList",//ok
    //扶贫日记列表
    deeds_log  : Http + "api/Deeds/getDeedsLog",//ok
    //扶贫报道简介
    deeds_logdesc : Http + "api/Deeds/getLogContent" , //ok
    //扶贫报道详情
    deeds_info : Http + "api/Deeds/deesLogInfo", //
    //扶贫日志新闻列表
    deeds_news_list : Http + "api/Deeds/getNewsList", //ok
    //扶贫日志新闻详情
    deeds_newsinfo : Http +"api/Deeds/getNewsInfo", //
    //扶贫荣耀分类
    glory_cates :  Http + "api/Glory/getGloryCates", //ok
    //扶贫荣耀简介
    glory_desc :   Http + "api/Glory/getGloryContent",//ok  
    //先进单位简介
    company_desc :  Http + "api/Glory/getCompanyDesc", //ok
    //先进个人列表
    person_list  :  Http + "api/Glory/getGloryPersonList", //ok
    //先进个人详情
    person_info  :  Http + "api/Glory/personInfo", //删除无用接口
    //留言结语
    message_desc  : Http + "api/Message/getMessageContentApi", //ok
    //提交留言
    
    //留言点赞
   

  }
})