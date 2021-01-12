Page({
 
  /**
   * 页面的初始数据
   */
  data: {
    postBook: true,
    postThing: false,
    postJob: false,
    content: "",
    appraiseList: [
      {
        username: "白子",
        img: "../../images/1.jpg",
        is_merchant: 0,
        isOpen: false,
        change: false,
        praise: 0,
        appraise_content: "What would you like to be doing five years after graduation?",
        reply_list: [
          { nickname: "太白", img: "../../images/3.jpg", reply_content: "创业", changes: false, praise: 0, time: "06-25"},
          { nickname: "Toast", img: "../../images/5.jpg", reply_content: "工作", changes: false, praise: 0, time: "05-27" },
          { nickname: "头秃", img: "../../images/7.jpg", reply_content: "深造学习", changes: false, praise: 0, time: "05-25" },
          { nickname: "欧了", img: "../../images/8.jpg", reply_content: "没有头绪啊😔", changes: false, praise: 0, time: "05-25" },
        ],
        time: "今天 15:07",
      },
    ],
    userpingfen: [          // 用户评分
      { pingfen: 4 }
    ],
 
  },
  //导航栏的响应事件
  choosePostBook: function(e) {
    var that = this;
    that.setData({
      postBook: true,
      postThing: false,
      postJob: false
    })
  },
  choosePostThing: function(e) {
    var that = this;
    that.setData({
      postBook: false,
      postThing: true,
      postJob: false
    })
  },
  choosePostJob: function(e) {
    var that = this;
    that.setData({
      postBook: false,
      postThing: false,
      postJob: true
    })
  },

  //失去焦点时获取里面评论内容
  bindTextAreaBlur: function (e) {
    this.setData({
      content: e.detail.value,
    })
  },
  //点击按钮时得到里面的值
  fabiao: function (e) {
    if(this.data.content == '') {
      wx.showToast({
        title: '内容不能为空',
        icon: "none",
        duration: 1500,
      })
    }else {
      this.setData({
        focus: 'false',
        concent1: this.data.content,
      })
      console.log(this.data.content)
    }
  },
  /**
   * 点击回复显示隐藏评价框
   */
  chengeStatusTop: function() {
    let status = this.data.status;
    this.setData({
      status: !status
    })
  },

  // 点击展开
  chooseUnfold: function(e) {
    var key = e.currentTarget.dataset.key;
    var val = e.currentTarget.dataset.value;
    key = key + '.isOpen';
    this.setData({
      [key]: !val
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    var _this = this;
    var tiyan = this.data.userpingfen;
    for (var i = 0; i < tiyan.length; i++) {
      tiyan[i].pingfenpic = pingxin.pingfen(parseFloat(tiyan[i].pingfen));    //使用函数
    }
    _this.setData({
      userpingfen: tiyan
    })
  },
 
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {
 
  },
 
  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {
    
  },
 
  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {
 
  },
 
  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {
 
  },
 
  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {
 
  },
 
  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {
 
  },
 
  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {
 
  }
})