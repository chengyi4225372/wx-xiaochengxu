// pages/liuyan/liuyan.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    tabIndex: 0,
    /*
    hotliuyanList: [
      {
        headImg: '../../images/head1.png',
        name: '风一样飘过',
        data: '肩负新时代的历史使命,更好进行伟大斗争、建设伟大工程、推进伟大事业、实现伟大梦想,我们党更加需要一个坚强的领导核心和中央领导集体。',
        date: '2020-08-10 18:55',
        fabulousNumber: '1483'
      },
      {
        headImg: '../../images/head2.png',
        name: '用户98563245',
        data: '肩负新时代的历史使命,更好进行伟大斗争、建设伟大工程、推进伟大事业、实现伟大梦想,我们党更加需要一个坚强的领导核心和中央领导集体。',
        date: '2020-08-10 18:55',
        fabulousNumber: '1483',
        fabulous: true
      },
      {
        headImg: '../../images/head3.png',
        name: '自拍',
        data: '肩负新时代的历史使命,更好进行伟大斗争、建设伟大工程、推进伟大事业、实现伟大梦想,我们党更加需要一个坚强的领导核心和中央领导集体。',
        date: '2020-08-10 18:55',
        fabulousNumber: '1483',
      },
      {
        headImg: '../../images/head4.png',
        name: '电动车男人',
        data: '我们党现在更加需要一个坚强的领导核心和中央领导集体。',
        date: '2020-08-10 18:55',
        fabulousNumber: '1483',
      },
      {
        headImg: '../../images/head5.png',
        name: '我是小仙女',
        data: '肩负新时代的历史使命,更好进行伟大斗争、建设伟大工程、推进伟大事业、实现伟大梦想,我们党更加需要一个坚强的领导核心和中央领导集体。',
        date: '2020-08-10 18:55',
        fabulousNumber: '1483',
      },
      {
        headImg: '../../images/head6.png',
        name: '爱笑的女孩',
        data: '我们党现在更加需要一个坚强的领导核心和中央领导集体。',
        date: '2020-08-10 18:55',
        fabulousNumber: '1483',
      }
    ],
    newliuyanList: [
      
      {
        headImg: '../../images/head2.png',
        name: '用户98563245',
        data: '肩负新时代的历史使命,更好进行伟大斗争、建设伟大工程、推进伟大事业、实现伟大梦想,我们党更加需要一个坚强的领导核心和中央领导集体。',
        date: '2020-08-10 18:55',
        fabulousNumber: '1483',
        fabulous: true
      },
      {
        headImg: '../../images/head3.png',
        name: '自拍',
        data: '肩负新时代的历史使命,更好进行伟大斗争、建设伟大工程、推进伟大事业、实现伟大梦想,我们党更加需要一个坚强的领导核心和中央领导集体。',
        date: '2020-08-10 18:55',
        fabulousNumber: '1483',
      },
      {
        headImg: '../../images/head4.png',
        name: '电动车男人',
        data: '我们党现在更加需要一个坚强的领导核心和中央领导集体。',
        date: '2020-08-10 18:55',
        fabulousNumber: '1483',
      },
      {
        headImg: '../../images/head5.png',
        name: '我是小仙女',
        data: '肩负新时代的历史使命,更好进行伟大斗争、建设伟大工程、推进伟大事业、实现伟大梦想,我们党更加需要一个坚强的领导核心和中央领导集体。',
        date: '2020-08-10 18:55',
        fabulousNumber: '1483',
      },
      {
        headImg: '../../images/head6.png',
        name: '爱笑的女孩',
        data: '我们党现在更加需要一个坚强的领导核心和中央领导集体。',
        date: '2020-08-10 18:55',
        fabulousNumber: '1483',
      }
    ]
    */
  },
  tabChooise(e){
    this.setData({
      tabIndex: e.currentTarget.dataset.index
    })
  },
  // 点赞
  fabulousTap(e){
    var liuyanList = this.data.liuyanList;
    var index = e.currentTarget.dataset.index;       
    var u_id  = wx.getStorageSync('u_id');
    var m_id  = e.currentTarget.dataset.id;   
    console.log(m_id);
 
    wx.request({
      url: getApp().globalData.zan,
      data: {'u_id':u_id,'m_id':m_id},
      method: 'POST', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
      success: function(res){
        // success
        console.log(res.data);
      },
      fail: function() {
        // fail
      },
      complete: function() {
        // complete
      }
    })

    if (liuyanList[index].fabulous){
      liuyanList[index].fabulous = false;
      liuyanList[index].num--
    }else{
      liuyanList[index].fabulous = true;
      liuyanList[index].num++
    } 
    
    this.setData({
      liuyanList: liuyanList
    })
  },
  // 留言弹框
  commentTap(){
    this.setData({
      commentShow: true
    })
  },
  commentHide(){
    this.setData({
      commentShow: false
    })
  },
  //留言输入
  commentInput(e) {
    this.setData({
      comment: e.detail.value
    })
  },
  // 发布
  release() {
     //this.commentHide();//关闭弹窗
    var comment = this.data.comment;
    if(wx.getStorageSync('openid')){
      //去留言 
       wx.request({
          url:getApp().globalData.message_action,
          data: {'openid':wx.getStorageSync('openid'),'content':comment,'u_id':wx.getStorageSync('u_id')},
          method: 'POST', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
          success: function(res){
             // success
             if(res.data.code == "success"){

              wx.showToast({
                title: res.data.msg,  // 标题
                icon: 'success',   // 图标类型，默认success
                duration: 5000   // 提示窗停留时间，默认1500ms
              })

              wx.navigateTo({
                url: '/pages/liuyan/liuyan',
              })
             }else {
          
              wx.showToast({
                title: res.data.msg,  // 标题
                icon: 'success',   // 图标类型，默认success
                duration: 5000   // 提示窗停留时间，默认1500ms
               })
             }

           
          },
          fail: function() {
             // fail
           },
          complete: function() {
            // complete
         }
        })

    }else{
      //去授权
      wx.navigateTo({
        url: '/pages/login/login',
      })
    }
    console.log(comment)
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
     //this.login() 
    
     var news = this;
     //热门留言
     wx.request({
       url: getApp().globalData.message_news,
       data: {'order':1},
       method: 'POST', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
       success: function(res){
         // success
        console.log(res.data.data);
         
         news.setData({
          liuyanList:res.data.data
         })

        wx.setStorageSync('hotnews', res.data.data) 

       },
       fail: function() {
         // fail
       },
       complete: function() {
         // complete
       }
     })

     //最新留言
      //热门留言
      wx.request({
        url: getApp().globalData.message_news,
        data: {'order':2},
        method: 'POST', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
        success: function(res){
          // success
         console.log(res.data.data);
          
          news.setData({
            newlist:res.data.data
          })
 
         wx.setStorageSync('newlist', res.data.data) 
 
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

  },
  login(){
    wx.login({
      success: login_res=> {
        //console.log(res)
        wx.getUserInfo({
          success: info_res => {
            this.wx_login(login_res.code, info_res)
          }
        })
    },
    })
  },
  wx_login(code,info_res){
    wx.request({
      url: getApp().globalData.wx_login,
      method: 'POST', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
     data:{code:code,            
           nickName: info_res.userInfo.nickName,
           avatarUrl: info_res.userInfo.avatarUrl,
      },
      success: function(res){
        //  console.log(res.data.data.openid); 
        // //  that.setData({
        // //   result: res.data.data,
        // //  })
        wx.setStorageSync('openid', res.data.data.openid)
      }
  })
  }
})