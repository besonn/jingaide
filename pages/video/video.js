// pages/Video/video.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    kechengData:[
      {
        lujing:"../../images/ke1@2x.png",
        title:"创意DIY",
        subtitle:"DIY你的个人作品",
        flag:1
      },
      {
        lujing:"../../images/ke2@2x.png",
        title:"手绘美术",
        subtitle:"下一个神笔马良",
        flag:0
      },
      {
        lujing:"../../images/ke4@2x.png",
        title:"色彩班",
        subtitle:"儿童色彩认知培养",
        flag:1
      },
      {
        lujing:"../../images/ke3@2x.png",
        title:"素描速写",
        subtitle:"风景在手创意无限",
        flag:1
      },
      {
        lujing:"../../images/ke5@2x.png",
        title:"临摹进阶",
        subtitle:"开启美术之路",
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
      url: "/pages/Vmulu/Vmulu?id="+id
    });
  }
})