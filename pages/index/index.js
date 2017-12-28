//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    grids: [1, 2, 3, 4, 5, 6, 7, 8],
    latitude: 28.0369574037,
    longitude: 120.6492215395,
    name: "欧美佳化妆美甲祛斑纹绣店",
    address: "温州永嘉县瓯北巴黎花园D栋13号",
    showPopup: false,
    img: 1,
  },
  // 拨打电话
  call: function (e) {
    var num = e.currentTarget.dataset.num;
    wx.makePhoneCall({
      phoneNumber: num //仅为示例，并非真实的电话号码
    })
  },
  // 导航地址
  getlocation: function () {
    var that = this;
    wx.openLocation({
      latitude: that.data.latitude,   //经度
      longitude: that.data.longitude, //纬度
      name: that.data.name,
      address: that.data.address,
      scale: 28
    })
  },
  // 大图显示
  togglePopup(e) {
    var img = e.currentTarget.dataset.img ? e.currentTarget.dataset.img : 1;
    this.setData({
      showPopup: !this.data.showPopup,
      img: img,
    });
  },
})
