// pages/Myshop/Myshop.js
var tmp=[];
var tmp2=[];
Page({
  
  /**
   * 页面的初始数据
   */
  data: {
    DataList:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var self = this;
    
    wx.request({
      url: 'http://localhost:8080/request/select.js',
      data: {
        table:"UserPurchase"
      },
      success(res) {
        var cnt=0;
        for(let i=0;i<res.data.length;i++){
          if(res.data[i]['USERID']==getApp().globalData.userInfo.ID){
            tmp[cnt++]=res.data[i];
          }
        }
        for(var i =0;i<tmp.length;i++){
          console.log(tmp[i]['ITEMID']);
          self.chaxun(tmp[i]['ITEMID']);
        }
      }
    });
    
  },
chaxun:function(e){
  var self =this;
  e=e+1;
  console.log(e);
  wx.request({
    url: 'http://localhost:8080/request/select.js',
    data: {
      table:"Audio"
    },
    success(res) {
      console.log(666)
      var cnt=0;
      for(let i=0;i<res.data.length;i++){
        if(res.data[i]['ID']==e){
          tmp2[cnt++]=res.data[i];
        }
      }
      self.setData({
        DataList: tmp2
      })
      console.log(tmp2);
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

  }
})