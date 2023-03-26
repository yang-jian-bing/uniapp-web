<template>
  <view class="page">
    <uni-nav-bar
      title="搜索"
      :fixed="true"
      :statusBar="true"
      color="#ffffff"
      background-color="#dd2c34"
      @clickLeft="back"
      left-icon="left"
    ></uni-nav-bar>
    <view class="header-box">
      <view>
        <view class="home-search flex-between">
          <view class="search-content">
            <input type="text" placeholder="物业" />
          </view>
          <view class="search-icon" @click="search">搜索</view>
        </view>
      </view>
    </view>
    <view class="no-data"> 暂无数据 </view>
  </view>
</template>

<script>
export default {
  components: {},
  data() {
    return {};
  },
  created() {},
  methods: {
    back() {
      uni.navigateBack();
    },
    search() {
      uni.showLoading({
        title: "搜索中...",
      });
      setTimeout(() => {
        uni.hideLoading();
        uni.showToast({
          title: "暂无结果", //显示的文字
          duration: 1000, //显示多少时间，默认1500毫秒
          icon: "success", //自定义显示的图标，默认成功success，错误error,加载loading，不显示图标是none
        });
      }, 1000);
    },
  },
};
</script>

<style scoped lang="scss">
.home-search {
  height: 40px;
  line-height: 40px;
  border: solid 2px rgb(221, 44, 52);
  border-radius: 20px;
  margin: 10px;
  padding: 5px;
  .search-content {
    height: 26px;
    line-height: 26px;
    color: #999;
    padding-left: 10px;
  }
  .search-icon {
    height: 26px;
    line-height: 26px;
    background: rgb(221, 44, 52);
    border-radius: 13px;
    color: #fff;
    width: 50px;
    text-align: center;
  }
}
</style>
