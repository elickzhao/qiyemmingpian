var order = ['red', 'yellow', 'blue', 'green', 'red']
var Zan = require('../../dist/index');

Page(Object.assign({}, Zan.TopTips, {
  data: {
    markers: [{
      id: 0,
      latitude: 28.0369400000,
      longitude: 120.6492300000,
      width: 20,
      height: 20,
      title: "欧美佳化妆美甲祛斑纹绣店",
      address: "温州永嘉县瓯北巴黎花园D栋13号"
    }],
    animationData: {},
    toView: 'red',
    scrollTop: 100,
    objectArray: [
      { id: 5, unique: 'unique_5' },
      { id: 4, unique: 'unique_4' },
      { id: 3, unique: 'unique_3' },
      { id: 2, unique: 'unique_2' },
      { id: 1, unique: 'unique_1' },
      { id: 0, unique: 'unique_0' },
    ],
    numberArray: [1, 2, 3, 4]
  },
  onLoad: function () {
    // 页面渲染完成
    //实例化一个动画
    this.animation = wx.createAnimation({
      // 动画持续时间，单位ms，默认值 400
      duration: 1000,
      /**
       * http://cubic-bezier.com/#0,0,.58,1  
       *  linear  动画一直较为均匀
       *  ease    从匀速到加速在到匀速
       *  ease-in 缓慢到匀速
       *  ease-in-out 从缓慢到匀速再到缓慢
       * 
       *  http://www.tuicool.com/articles/neqMVr
       *  step-start 动画一开始就跳到 100% 直到动画持续时间结束 一闪而过
       *  step-end   保持 0% 的样式直到动画持续时间结束        一闪而过
       */
      timingFunction: 'ease',
      // 延迟多长时间开始
      delay: 100,
      /**
       * 以什么为基点做动画  效果自己演示
       * left,center right是水平方向取值，对应的百分值为left=0%;center=50%;right=100%
       * top center bottom是垂直方向的取值，其中top=0%;center=50%;bottom=100%
       */
      transformOrigin: 'center top 0',
      success: function (res) {
        console.log(res)
      }
    });

    setTimeout(function () {
      this.rotate();
    }.bind(this), 200)

    //this.getlocation();
  },
  //循环演示
  switch: function (e) {
    const length = this.data.objectArray.length
    for (let i = 0; i < length; ++i) {
      const x = Math.floor(Math.random() * length)
      const y = Math.floor(Math.random() * length)
      const temp = this.data.objectArray[x]
      this.data.objectArray[x] = this.data.objectArray[y]
      this.data.objectArray[y] = temp
    }
    this.setData({
      objectArray: this.data.objectArray
    })
  },
  addToFront: function (e) {
    const length = this.data.objectArray.length
    this.data.objectArray = [{ id: length, unique: 'unique_' + length }].concat(this.data.objectArray)
    this.setData({
      objectArray: this.data.objectArray
    })
  },
  addNumberToFront: function (e) {
    this.data.numberArray = [this.data.numberArray.length + 1].concat(this.data.numberArray)
    this.setData({
      numberArray: this.data.numberArray
    })
  },
  //显示头部
  showTopTips() {
    this.showZanTopTips('toptips的内容');
  },
  /**
 * 放大显示
 */
  rotate: function () {
    //放大显示后并恢复
    //  //现在唯一的问题是 如果在循环里绑定相同的动画 却是单一执行呢 唉....
    // this.animation.rotate(150).step()
    this.animation.opacity(1).scale(1.5, 1.5).step().scale(1, 1).step();
    this.setData({
      //输出动画
      animation: this.animation.export()
    })
  },
  //下面是滚动view方法
  upper: function (e) {
    console.log(e)
  },
  lower: function (e) {
    console.log(e)
  },
  scroll: function (e) {
    var scrolltop = e.detail.scrollTop;
    console.log(scrolltop);
    if (scrolltop >= 50){
      console.log(e)
    } 
  },
  tap: function (e) {
    for (var i = 0; i < order.length; ++i) {
      if (order[i] === this.data.toView) {
        this.setData({
          toView: order[i + 1]
        })
        break
      }
    }
  },
  tapMove: function (e) {
    this.setData({
      scrollTop: this.data.scrollTop + 10
    })
  },

  // 下面是地图方法
  getlocation: function () {
    wx.getLocation({
      type: 'gcj02',
      success: function (res) {
        var latitude = res.latitude
        var longitude = res.longitude
        var speed = res.speed
        var accuracy = res.accuracy
        wx.openLocation({
          latitude: this.data.latitude,
          longitude: this.data.longitude,
          name: this.data.name,
          address: this.data.address,
          scale: 28
        })
      }
    })
  },
  markertap(e) {
    console.log(e.markerId)
  },
  regionchange(e) {
    // wx.getLocation({
    //   type: 'gcj02', //返回可以用于wx.openLocation的经纬度
    //   success: function (res) {
    //     var latitude = res.latitude
    //     var longitude = res.longitude
    //     console.log("latitude = " + latitude + " longitude = " + longitude);
    //     wx.openLocation({
    //       latitude: latitude,
    //       longitude: longitude,
    //       scale: 28
    //     })
    //   }
    // })
    // console.log(e)
  },
}));