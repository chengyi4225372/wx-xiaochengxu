// pages/liuyan/liuyan.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    tabIndex: 0,
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
    if (liuyanList[index].fabulous){
      liuyanList[index].fabulous = false;
      liuyanList[index].fabulousNumber--
    }else{
      liuyanList[index].fabulous = true;
      liuyanList[index].fabulousNumber++
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
    // this.commentHide();//关闭弹窗
    var comment = this.data.comment;
    console.log(comment)
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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