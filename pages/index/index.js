Page({

  /**
   * 页面的初始数据
   */
  data: {
    currentIndexNav: 0,
    navList: [],
    //轮播图数据
    swiperList: [],
    videosList: [],
  },

  /* e是一个事件源对象 */
  activeNav(e) {
    /* 动态改变属性 */
    this.setData({
      /* target是当前被点击标签的dom对象 */
      currentIndexNav: e.target.dataset.index,
      /* dataset获取了httpelement自定义的data集 */
    })
  },

  getNavList() {
    let that = this;
    //利用小程序内置发送请求方法
    wx.request({
      url: 'https://easy-mock.com/mock/5c1dfd98e8bfa547414a5278/bili/navList',
      data: {},
      method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
      // header: {}, // 设置请求的 header
      success: function (res) {
        // success
        // console.log(res);
        if (res.data.code === 0) {
          that.setData({
            navList: res.data.data.navList
          })
        }

      },
      fail: function () {
        // fail
      },
      complete: function () {
        // complete
      }
    })
  },

  getSwiperList() {
    let that = this;
    wx.request({
      url: "https://easy-mock.com/mock/5c1dfd98e8bfa547414a5278/bili/swiperList",
      success(res) {
        if (res.data.code == 0) {
          that.setData({
            swiperList: res.data.data.swiperList
          })
        }
      }
    })
  },

  getVideosList() {
    let that = this;
    wx.request({
      url: "https://easy-mock.com/mock/5c1dfd98e8bfa547414a5278/bili/videosList",
      success(res) {
        //console.log(res);
        if (res.data.code === 0) {
          that.setData({
            videosList: res.data.data.videosList
          })
        }
      }

    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getNavList();
    this.getSwiperList();
    this.getVideosList();
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