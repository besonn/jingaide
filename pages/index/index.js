// pages/index/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgUrls: [
    '../../images/banner-01@2x.png',
    '../../images/banner-02@2x.png',
    '../../images/banner-03@2x.png'
    ],
    indicatorDots: true,
    autoplay: true,
    interval: 5000,
    duration: 1000,  
    previousMargin:"30rpx",
    nextMargin:"30rpx",
    circular:true,
    // 热门课程数据
    hotLesson:[
      {
        id:"1",
        color:"#4399f9",
        title:"直播",
      },
      {
        id:"2",
        color:"#8c43f9",
        title:"视频",
      },
      {
        id:"3",
        color:"#f94388",
        title:"图文",
      },
      {
        id:"4",
        color:"#8333f9",
        title:"音频",
      },
      {
        id:"5",
        color:"#f92088",
        title:"专栏",
      },
      {
        id:"6",
        color:"#9f9f5f",
        title:"电子书",
      }
    ]
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
  
  },
  items1:function(){
    wx.navigateTo({
      url: "/pages/clock_in/clock_in"
    });
  },
  items2:function(){
    wx.switchTab({
      url: '/pages/video/video',
    });
  },
  items3:function(){
    wx.navigateTo({
      url: "/pages/Tuwen/tuwen"
    });
  },
  items4:function(){
    wx.navigateTo({
      url: "/pages/yinpin/yinpin"
    });
  },
  items5:function(){
    wx.navigateTo({
      url: "/pages/zhuanlan/zhuanlan"
    });
  },
  items6:function(){
    wx.navigateTo({
      url: "/pages/clock_in/clock_in"
    });
  }
})