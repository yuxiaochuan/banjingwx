//index.js
//获取应用实例
const app = getApp();
const Banner = require("./headbanner.js");
var yxc = new Banner(this);

Page({
  data: {
    bannerData: yxc.data
  },
  onLoad: function () {
  }
});
