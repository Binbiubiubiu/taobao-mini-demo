const globalData = {
  app:{
    title: "小程序demo",
    subTitle: "由 Simon-bin 提供",
    logo: "/assets/logo.png",
  },
  userInfo: {}
};

App({
  globalData,
  onLaunch(options) {
    // 第一次打开
    // options.query == {number:1}
    console.info("App onLaunch");
  },
  onShow(options) {
    // 从后台被 scheme 重新打开
    // options.query == {number:1}
  }
});
