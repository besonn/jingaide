// pages/mulu/mulu.js
var sliderWidth = 96; 
Page({

  /**
   * 页面的初始数据
   */
  data: {
    currentTime: '00:00', // 当前播放时间
    totalTime: '00:00', // 音频总时间
    progressTime: 0,  // 进度条百分比
    onoff: true,  // 切换播放按钮
    category:"",
    itemId:"",
    tabs: ["目录", "详情", "评价"],
    activeIndex: 0,
    sliderOffset: 0,
    sliderLeft: 0,
    top:73,
    id:0,
    bofangData:[
      {
        lujing:"https://crazynote.v.netease.com/2018/0607/fd1f2b964bc1ad28a926071a28af2b03.mp4",
        title:"量子信息原理与应用"
      },
      {
        lujing:"https://n.v.netease.com/2018/0130_qtjs/qtjs_new_hd.mp4",
        title:"道德经"
      },
      {
        lujing:"https://crazynote.v.netease.com/2018/0605/73ddc056ce115c27885a1adb52ad0643qt.mp4",
        title:"工程电磁场"
      },
      {
        lujing: "https://nie.v.netease.com/nie/2017/0830/64a1a3ae100f830b48c134d702f0d3a0qt.mp4",
        title:"中国古典舞身韵教学法"
      },
      {
        lujing:"https://flv.bn.netease.com/videolib3/1511/07/CoPrF6333/HD/CoPrF6333-mobile.mp4",
        title:"Python语言程序设计"
      }
    ],    
    muluData:[     
      {
        lD:"01.橡皮泥的介绍",
        tD:"05:00"
      },
      {
        lD:"02.橡皮泥注意事项",
        tD:"12:00"
      },
      {
        lD:"03.橡皮泥的使用",
        tD:"13:10"
      },
      {
        lD:"03.橡皮泥的使用",
        tD:"15:00"
      },
      {
        lD:"03.橡皮泥的使用",
        tD:"15:20"
      },
      {
        lD:"03.橡皮泥的使用",
        tD:"15:00"
      },
    ],
    comData:[
      {
        lujing:"../../images/motherL.gif",
        title:"王同学",
        subtitle:"课程内容很棒，学到了很多"
      },
      {
        lujing:"../../images/6.jfif",
        title:"张同学",
        subtitle:"学完很开心"
      },
      {
        lujing:"../../images/7.jfif",
        title:"李同学",
        subtitle:"课程内容很棒，非常喜欢"
      }

    ],
    movieList: [
      {
        url:
        "https://crazynote.v.netease.com/2018/0607/fd1f2b964bc1ad28a926071a28af2b03.mp4",
        lD: "第一章",
        tD: "02:59"
      },
      {
        url: "https://n.v.netease.com/2018/0130_qtjs/qtjs_new_hd.mp4",
        lD: "第二章",
        tD: "02:55"
      },
      {
        url:
        "https://crazynote.v.netease.com/2018/0605/73ddc056ce115c27885a1adb52ad0643qt.mp4",
        lD: "第三章",
        tD: "1:47"
      },
      {
        url:
        "https://nie.v.netease.com/nie/2017/0830/64a1a3ae100f830b48c134d702f0d3a0qt.mp4",
        lD: "第四章",
        tD: "0:59"
      },
      {
        url:
        "https://flv.bn.netease.com/videolib3/1511/07/CoPrF6333/HD/CoPrF6333-mobile.mp4",
        lD: "第五章",
        tD: "04:24"
      }
    ],
  },

  audioPlay: function () {
    this.setData({
      action: {
        method: 'play'
      }
    });
  },
  audioPause: function () {
    this.setData({
      action: {
        method: 'pause'
      }
    });
  },
  audioPlaybackRateSpeedUp: function () {
    this.setData({
      action: {
        method: 'setPlaybackRate',
        data: 2//加快速度
      }
    });
  },
  audioPlaybackRateSlowDown: function () {
    this.setData({
      action: {
        method: 'setPlaybackRate',
        data: 0.5//小于零放慢速度
      }
    });
  },
  audio14: function () {
    this.setData({
      action: {
        method: 'setCurrentTime',
        data: 14
      }
    });
  },
  audioStart: function () {
    this.setData({
      action: {
        method: 'setCurrentTime',
        data: 0
      }
    });
  },


  onLoad: function (options) {
    var that = this;
    this.setData({
      id:options.id ? options.id : 1
    });
    // 设置顶部标题
    wx.setNavigationBarTitle({
      title:that.data.bofangData[options.id].title+"视频演示",
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
    console.log("视频播放完毕");
    wx.showModal({
      title: '',
      cancelText:"下次再说",
      confirmText:"立即购买",
      content: '试看已结束，如需继续观看，请购买此课程',
      success: function (res) {
        if (res.confirm) {
          // 新的版本已经下载好，调用 applyUpdate 应用新版本并重启
          console.log("好的");
          wx.navigateTo({
            url: "/pages/buy/buy"
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
  fentiao:function(e){
    var id = e.target.dataset.id;
    this.setData({
      category:"Audio",
      itemId : id
    });
    getApp().globalData.itemInfo = this.data;
    console.log(getApp().globalData.itemInfo);
    wx.navigateTo({
      url: '/pages/buy/buy',
    });
    
  },


   // 点击播放按钮，处理相关逻辑
   handlePlayer(){
    const {onoff} = this.data;
    if(onoff){
      this.audioCtx.play()  // 播放
    }else{
      this.audioCtx.pause()  // 暂停
    }
    this.setData({
      onoff: !onoff
    })
    this.handlerProgress()
  },
  // 处理进度条，当前时间，总时间
  handlerProgress(){
    // 监听音频播放进度更新事件
    this.audioCtx.onTimeUpdate(()=>{
      // 总时间
      const totalTime = this.audioCtx.duration;
    
      this.setData({
        totalTime:this.handlerTime(totalTime),
        currentTime: this.handlerTime(this.audioCtx.currentTime),
        progressTime: ((this.audioCtx.currentTime / totalTime) * 100) | 0
      })
    })

  },
  onReady(){
    // 获取音频对象
    this.audioCtx = wx.createInnerAudioContext('myAudio');  
    // 音频地址
    this.audioCtx.src = "http://router.h5sm.com/static/banhusha.mp3" 
    // 循环播放
    this.audioCtx.loop = true; 
  },

  // 处理时间
  handlerTime(res){
    let m = ( res / 60 | 0) + '';
    m = (m.length == 1) ? 0  + m : m;
    let s = (res % 60 | 0) + '';
    s = (s.length == 1) ? 0  + s : s;
    return m + ':' + s
  }

})