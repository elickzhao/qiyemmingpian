Page({
  data: {
    markers: [{
      id: 0,
      latitude: 28.0369400000,
      longitude: 120.6492300000,
      width: 20,
      height: 20,
      title: "欧美佳化妆美甲祛斑纹绣店",
      address: "温州永嘉县瓯北巴黎花园D栋13号"
    }]
  },
  onLoad: function () {
    this.getlocation();
  },
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
})