// pages/kecheng/kecheng.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    kechengDataList: [],
    kechengData:[
      {
        lujing:"../../images/1.webp",
        title:"量子信息原理与应用",
        subtitle:"",
        flag:1
      },
      {
        lujing:"../../images/2.jpg",
        title:"道德经",
        subtitle:" ",
        flag:1
      },
      {
        lujing:"../../images/3.webp",
        title:"工程电磁场",
        subtitle:"",
        flag:1
      },
      {
        lujing:"../../images/4.webp",
        title:"中国古典舞身韵教学法",
        subtitle:"",
        flag:1
      },
      {
        lujing:"../../images/5.png",
        title:"Python语言程序设计",
        subtitle:"",
        flag:1
      }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //this.insert();
    var self = this;
    wx.request({
      url: 'http://localhost:8080/request/select.js',
      data: {
        table:"Audio"
      },
      success(res) {
        self.setData({
          kechengDataList: res.data
        })
      }
    })
  },

  insert: function() {
    wx.request({
      url: 'http://localhost:8080/request/insertAudio.js',
      data: {
        pic:"../../images/1.webp",
        title:"量子信息原理与应用",
        subTitle:"",
      }
    })

    wx.request({
      url: 'http://localhost:8080/request/insertAudio.js',
      data: {
        pic:"../../images/2.jpg",
        title:"道德经",
        subTitle:" ",
      }
    })

    wx.request({
      url: 'http://localhost:8080/request/insertAudio.js',
      data: {
        pic:"../../images/3.webp",
        title:"工程电磁场",
        subTitle:"",
      }
    })

    wx.request({
      url: 'http://localhost:8080/request/insertAudio.js',
      data: {
        pic:"../../images/4.webp",
        title:"中国古典舞身韵教学法",
        subTitle:"",
      }
    })

    wx.request({
      url: 'http://localhost:8080/request/insertAudio.js',
      data: {
        pic:"../../images/5.png",
        title:"Python语言程序设计",
        subTitle:"",
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
  tiao:function(e){
    var id = e.currentTarget.dataset.id;
    wx.navigateTo({
      url: "/pages/ypxq/ypxq?id="+id
    });
  }
})