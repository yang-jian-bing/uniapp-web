<template>
  <view class="myConter home-box"  style="background-size: 100% 27%">
    <view class="header-min-box b-g-ee0a24"> </view>

    <view class="main-box">
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
.main-box {
  display: flex;
  flex-wrap: wrap;
  background: #fff;
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
