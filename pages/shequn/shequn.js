// pages/shequn/shequn.js
Page({

  /**
   * 页面的初始数据
   */
   //查询搜索的接口方法
   a: function () {
  
  },
  data: {
    kechengData:[
      {
        lujing:"../../images/kaoyan@2x.png",
        title:"社群1",
        subtitle:"考研党的首选",
        flag:1
      },
      {
        lujing:"../../images/siliuji@2x.png",
        title:"社群2",
        subtitle:"英语四六级必过",
        flag:1
      },
      {
        lujing:"../../images/xueshu@2x.png",
        title:"社群3",
        subtitle:"大家一起搞学术",
        flag:1
      },
      {
        lujing:"../../images/ke2@2x.png",
        title:"社群4",
        subtitle:"艺术也不错哦",
        flag:1
      },
      {
        lujing:"../../images/sikao@2x.png",
        title:"社群5",
        subtitle:"一起交流学习呀",
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
      url: "/pages/show/show?id="+id
    });
  }
})