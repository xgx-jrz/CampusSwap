// 小程序全局入口
App({
  globalData: {
    userInfo: null,
    baseUrl: 'https://api-campus-swap.example.com'
  },
  onLaunch() {
    // 读取本地缓存登录用户
    const user = wx.getStorageSync('userInfo');
    if (user) {
      this.globalData.userInfo = user;
    }
  }
});
