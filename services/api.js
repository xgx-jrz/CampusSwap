function request(options) {
  return new Promise((resolve, reject) => {
    wx.request({
      ...options,
      success(res) {
        resolve(res.data);
      },
      fail(err) {
        reject(err);
      }
    });
  });
}

module.exports = {
  request
};
