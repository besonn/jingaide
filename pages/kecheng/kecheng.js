// pages/kecheng/kecheng.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    kechengData:[
      {
        lujing:"../../images/ke1@2x.png",
        title:"服务行业交际英语",
        subtitle:"本课程是以旅游服务行业为载体的一门综合性交际英语课程。",
        flag:1
      },
      {
        lujing:"../../images/ke2@2x.png",
        title:"C语言不挂科",
        subtitle:"4小时学完C语言",
        flag:0
      },
      {
        lujing:"../../images/ke4@2x.png",
        title:"21/22考研",
        subtitle:"4天直播深度解析21考研初试真题",
        flag:1
      },
      {
        lujing:"../../images/ke3@2x.png",
        title:"2021公务员省考联考",
        subtitle:"公务员笔试无忧通关过",
        flag:1
      },
      {
        lujing:"../../images/ke5@2x.png",
        title:"从表演开始",
        subtitle:"杨佳教你演戏",
        flag:1
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
  tiao:function(e){
    var id = e.currentTarget.dataset.id;
    wx.navigateTo({
      url: "/pages/mulu/mulu?id="+id
    });
  }
})