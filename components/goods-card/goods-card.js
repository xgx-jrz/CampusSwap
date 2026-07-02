Component({
  properties: {
    item: Object
  },
  methods: {
    goDetail() {
      const id = this.data.item.id;
      wx.navigateTo({
        url: `/pages/detail/detail?id=${id}`
      });
    }
  }
});
