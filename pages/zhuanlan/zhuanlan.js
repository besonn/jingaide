// pages/kecheng/kecheng.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    kechengData:[
      {
        lujing:"../../images/8.png",
        title:"热门排行",
        subtitle:" ",
        flag:1
      },
      {
        lujing:"../../images/9.png",
        title:"新课排行",
        subtitle:" ",
        flag:1
      },
      {
        lujing:"../../images/10.webp",
        title:"国家精品课",
        subtitle:" ",
        flag:1
      },
      {
        lujing:"../../images/11.webp",
        title:"计算机",
        subtitle:" ",
        flag:1
      },
      {
        lujing:"../../images/12.webp",
        title:"外语",
        subtitle:" ",
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
      url: "/pages/zlxq/zlxq?id="+id
    });
  }
})