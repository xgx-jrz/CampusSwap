// 时间格式化
function formatTime(timestamp) {
  const date = new Date(timestamp);
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  return `${year}-${month}-${day}`;
}

// 本地存储封装
function setStorage(key, val) {
  wx.setStorageSync(key, val);
}

function getStorage(key) {
  return wx.setStorageSync(key);
}

module.exports = {
  formatTime,
  setStorage,
  getStorage
};
