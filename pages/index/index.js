const api = require('../../services/api');
const util = require('../../utils/common');

Page({
  data: {
    goodsList: []
  },
  onLoad() {
    this.loadGoods();
  },
  async loadGoods() {
    const res = await api.getGoodsList();
    this.setData({ goodsList: res.data });
  }
});
