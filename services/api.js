const app = getApp();
const base = app.globalData.baseUrl;

// 通用请求封装
function request(url, data, method = 'GET') {
  return new Promise((resolve, reject) => {
    wx.request({
      url: base + url,
      data,
      method,
      header: {
        token: wx.getStorageSync('token') || ''
      },
      success: (res) => resolve(res.data),
      fail: (err) => reject(err)
    });
  });
}

// 获取首页商品列表
function getGoodsList(params) {
  return request('/goods/list', params);
}

// 发布闲置商品
function publishGoods(data) {
  return request('/goods/publish', data, 'POST');
}

module.exports = {
  getGoodsList,
  publishGoods
};
