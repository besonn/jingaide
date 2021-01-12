// pages/show/show.js
var sliderWidth = 96; 
Page({

  /**
   * 页面的初始数据
   */
  data: {
    tabs: ["展示","简介","热门"],
    activeIndex: 0,
    sliderOffset: 0,
    sliderLeft: 0,
    top:73,
    id:0,
    bofangData:[
      {
        lujing:"https://flv.bn.netease.com/videolib3/1511/07/CoPrF6333/HD/CoPrF6333-mobile.mp4",
        title:"社群1"
      },
      {
        lujing:"https://n.v.netease.com/2018/0130_qtjs/qtjs_new_hd.mp4",
        title:"社群2"
      },
      {
        lujing:"https://crazynote.v.netease.com/2018/0605/73ddc056ce115c27885a1adb52ad0643qt.mp4",
        title:"社群3"
      },
      {
        lujing: "https://nie.v.netease.com/nie/2017/0830/64a1a3ae100f830b48c134d702f0d3a0qt.mp4",
        title:"社群4"
      },
      {
        lujing:"https://flv.bn.netease.com/videolib3/1511/07/CoPrF6333/HD/CoPrF6333-mobile.mp4",
        title:"社群5"
      }
    ],   
    comData:[
      {
        lujing:"../../images/1.jfif",
        title:"齿转轮",
        subtitle:"如何在Linux里将num1变成环境发量，将num2变成只读属性"
      },
      {
        lujing:"../../images/2.jpg",
        title:"归零",
        subtitle:"求开发PMAC上位机软件要用到的PComm32PRO安装包"
      },
      {
        lujing:"../../images/6.jpg",
        title:"千里之外",
        subtitle:"输出一堆乱码，咋办呀呀呀"
      }

    ],
    movieList: [
      {
        url:
        "https://flv.bn.netease.com/videolib3/1511/07/CoPrF6333/HD/CoPrF6333-mobile.mp4",
        lD: "了解我们",
      },
      {
        url: "https://n.v.netease.com/2018/0130_qtjs/qtjs_new_hd.mp4",
        lD: "社群相关",
      },
      {
        url:
        "https://flv.bn.netease.com/videolib3/1511/07/CoPrF6333/HD/CoPrF6333-mobile.mp4",
        lD: "如此我们",
      }
    ],
  },
  onLoad: function (options) {
    var that = this;
    this.setData({
      id:options.id ? options.id : 1
    });
    // 设置顶部标题
    wx.setNavigationBarTitle({
      title:that.data.bofangData[options.id].title+"",
    });
    var that = this;
    wx.getSystemInfo({
        success: function(res) {
            that.setData({
                sliderLeft: (res.windowWidth / that.data.tabs.length - sliderWidth) / 2,
                sliderOffset: res.windowWidth / that.data.tabs.length * that.data.activeIndex
            });
        }
    });

  },
  tabClick: function (e) {
    this.setData({
        sliderOffset: e.currentTarget.offsetLeft,
        activeIndex: e.currentTarget.id
    });
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
    console.log("show");
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide:function(){
    console.log("hide");
    var videoContent = wx.createVideoContext('video',this);
    videoContent.pause();
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
  shikan:function(){
    console.log("社群介绍完毕");
    wx.showModal({
      title: '',
      cancelText:"下次再说",
      confirmText:"立即加入",
      content: '社群介绍已结束，如有兴趣，请加入该社群',
      success: function (res) {
        if (res.confirm) {
          // 新的版本已经下载好，调用 applyUpdate 应用新版本并重启
          console.log("好的");
          wx.navigateTo({
            url: "/pages/jiaru/jiaru"
          });
        }
      }
    })
  },
  huan:function(e){
    // console.log(e.currentTarget.dataset.idx);
    this.setData({
      id:e.currentTarget.dataset.idx
    })
  },
  fentiao:function(){  
    wx.navigateTo({
      url: '/pages/jiaru/jiaru',
    });
    
  }
})