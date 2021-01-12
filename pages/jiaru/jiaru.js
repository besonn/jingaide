// pages/jiaru/jiaru.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgUrls: [
      '../../images/rushequn@2x.png',
      '../../images/rushequn1@2x.png',
      '../../images/rushequn2@2x.png'

      ],
      indicatorDots: true,
      autoplay: true,
      interval: 5000,
      duration: 1000, 
      nextMargin:"10rpx",
      circular:true,
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
  sure:function(){
    wx.showToast({
      title: "恭喜你成功入群",
      icon: 'success',
      duration: 3000,
      mask: true,
      success: function (e) {
        wx.navigateTo({
          url: "/pages/myqun/myqun"
        });
      }
      })
  }
})