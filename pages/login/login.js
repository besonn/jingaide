// pages/login/login.js
var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    region: ['请选择', '你所在', '位置'],
    customItem: '全部'
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
  bindRegionChange: function (e) {
    
    this.setData({
      region: e.detail.value
    })
  },
  formSubmit:function(e){
    this.insertAudio();
    this.insertTuwen();
    console.log(e.detail.value);
    var xinxi = e.detail.value;
    if (xinxi.userName == "" || xinxi.age=="" || xinxi.sex == ""){
      wx.showLoading({
        title: '信息么有正确',
        mask: true,
      });
      setTimeout(function () {
        wx.hideLoading();        
      }, 1000)
    }else{
      wx.showLoading({
        title: '注册中....',
        mask: true,
      });
      setTimeout(function () {
        app.globalData.userInfo = e.detail.value;
        console.log(e.detail.value);
        wx.hideLoading();
        wx.showToast({
          title: "欢迎你",
          icon: 'success',
          duration: 1500,
          mask: true,
          success: function (e) {
            wx.switchTab({
              url: '/pages/index/index'
            });
            wx.request({
              url: 'http://localhost:8080/request/insertUser.js',
              data:{
                avatar:'1111',
                DisplayName: app.globalData.userInfo.userName,
              },
              fail: function() {
                console.log('Nooooooooooo')
              },
              complete: function(res) {
                // complete        console.log("调用完成");
                console.log('success');
                // console.log(res.data);
              }
            });
            wx.request({
              url: 'http://localhost:8080/request/select.js',
              data: { table:"User" },
              success: function(res) {
                console.log (res.data)
                for(let i=0;i<res.data.length;i++){
                  if(res.data[i]['DISPLAYNAME']==app.globalData.userInfo.userName){
                    app.globalData.userInfo = res.data[i];
                    break;
                  }
                }
                console.log(app.globalData.userInfo);
                },
                fail: function (err) {
                  console.log(err)
                }
            })
          }

        });
      }, 2000);
      
    }
  },
  insertAudio: function() {
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
  insertTuwen: function() {
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

})
