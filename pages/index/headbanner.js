function Banner (page) {
  return {
    data: {
      imgUrls: [
        '../images/indexBanner01.jpg',
        'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg'
      ],
      indicatorDots: false,
      autoplay: false,
      interval: 5000,
      duration: 1000
    }
  }
}

module.exports = Banner;

