<template>
  <view class="myConter home-box"  style="background-size: 100% 35%">
    <view
      class="header-min-box msg-search-box"
      style="padding-top: 60px; padding-bottom: 5px;"
    >
      <uni-search-bar placeholder="搜索" radius="100" bgColor="none" @confirm="search" />
    </view>
    <view class="main-box m-10">
      <view
        class="module-icon"
        :key="index"
        @click="toPage(item.page)"
        v-for="(item, index) in moduleList"
      >
        <view class="module-icon-img">
          <image :src="item.imgUrl" alt="" />
        </view>
        <view class="module-title">{{ item.name }}</view>
      </view>
    </view>
  </view>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      moduleList: [
        {
          name: "活动",
          id: "",
          page: "activityList",
          imgUrl: require("../../../assets/img/home/yzyx.png"),
          icon: "#icon-luntan",
        }
      ],
    };
  },
  created() {},
  methods: {
    toPage(page) {
      uni.navigateTo({
        // 关闭所有页面，打开首页
        url: `/pages/page/${page}`,
      });
    }
  },
};
</script>

<style lang="scss" scoped>
.home-box{
  height: 100vh;
}
.main-box {
  display: flex;
  flex-wrap: wrap;
  background: #fff;
  border-radius: 5px;
  overflow: hidden;
}
.module-icon {
  width: 20%;
  text-align: center;
  background: #fff;
  padding-bottom: 20px;
}
.module-icon-img {
  image {
    margin-top: 10px;
    width: 40px;
    height: 40px;
  }
}
.module-title {
  font-weight: bold;
}
</style>
