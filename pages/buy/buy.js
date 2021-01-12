// pages/buy/buy.js
var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userpurchased:[],
    imgUrls: [
      '../../images/hui@2x.png',
      '../../images/hui1@2x.png'
      ],
      indicatorDots: true,
      autoplay: true,
      interval: 5000,
      duration: 1000, 
      nextMargin:"10rpx",
      circular:true,
  },
  sure:function(){
    wx.showToast({
      title: "恭喜你，购买成功",
      icon: 'success',
      duration: 1500,
      mask: true,
      success: function (e) {
        wx.switchTab({
          url: '/pages/mine/mine'
        })
      }
      })
      wx.request({
        url: 'http://localhost:8080/request/insertUserPurchase.js',
        data: {
          userId: getApp().globalData.userInfo.ID,
          category:getApp().globalData.itemInfo.category,
          itemId:getApp().globalData.itemInfo.itemId,
          price:"0",
          purchaseDate:"",
        },
        complete: function(res) {
          // complete        console.log("调用完成");
          console.log('success');
           console.log(res.data);
        }
      })
  }
})