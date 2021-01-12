// pages/Tuwen/tuwen.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    tuwenDataList:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var self = this;
   // this.insert();
    wx.request({
      url: 'http://localhost:8080/request/select.js',
      data: {
        table:"Tuwen"
      },
      success(res) {
        self.setData({
          tuwenDataList: res.data
        })
      }
    })
  },

  insert: function() {
    wx.request({
      url: 'http://localhost:8080/request/insertTuwen.js',
      data: {
        pic:"../../images/yasi.jpg",
        title:"雅思托福视听说",
        subTitle:"留学/商务",
      }
    })

    wx.request({
      url: 'http://localhost:8080/request/insertTuwen.js',
      data: {
        pic:"../../images/python.jpg",
        title:"Python学习课程",
        subTitle:"编程能力",
      }
    })

    wx.request({
      url: 'http://localhost:8080/request/insertTuwen.js',
      data: {
        pic:"../../images/cet4.jpg",
        title:"四六级高级教程",
        subTitle:"大学生考级",
      }
    })

    wx.request({
      url: 'http://localhost:8080/request/insertTuwen.js',
      data: {
        pic:"../../images/gaoshu.jpg",
        title:"高等数学优学案",
        subTitle:"基础课程",
      }
    })

    wx.request({
      url: 'http://localhost:8080/request/insertTuwen.js',
      data: {
        pic:"../../images/computer.jpg",
        title:"计算机等级考试",
        subTitle:"练习您的基础能力",
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
  show:function(e){
    var id = e.currentTarget.dataset.id;
    if(id == 2){
      id = 1;
    }
    else if(id == 3){
      id = 2;
    }
    else {
      id = 3;
    }
    wx.navigateTo({
      url: "/pages/Tuwen/tuwen"+id
    });
  },
})
