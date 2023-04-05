<template>
  <view class="myConter">
    <view class="header-min-box"> </view>
    <view
      class="p-15 b-b"
      v-for="(item, index) of list"
      :key="index"
      @click="toPage(item.page)"
    >
      <!-- 使用 title 插槽来自定义标题 -->
      <view class="flex-between">
        <view class="flex align-items">
          <view class="col-1b1b font-14">
            {{ item.text }}
          </view>
        </view>
        <view>
          <view class="icon iconfont icon-arrow-right font-20"></view>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      list: [
        {
          text: "所有活动",
          page: "activityList",
          icon: require("@/assets/img/personalIcon/htgl.png"),
        },
        {
          text: "我参与的活动",
          page: "activityList",
          icon: require("@/assets/img/personalIcon/lsfpgl.png"),
        },
        {
          text: "我发起的活动",
          page: "activityList",
          icon: require("@/assets/img/personalIcon/rjsj.png"),
        },
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
// @import "@/assets/font/iconfont.css";
.iconfont {
  font-size: 20px;
}
.buttonstyle {
  margin-top: 60px;
  width: 90%;
  left: 5%;
}
.content {
  border-top: 10px solid #eee;
}
.cell-none .van-icon {
  visibility: hidden;
}

.dateTime {
  line-height: 47px;
}
.time_box {
  padding: 8px 15px;
  font-size: 18px;
}
.time_box_right {
  padding: 8px 15px;
}
.line {
  height: 10px;
  background-color: #eeeeee;
}
.date_title {
  color: #2c82ff;
  vertical-align: middle;
}
.icon_down {
  padding-left: 7px;
  vertical-align: middle;
  color: #868686;
}
.date_btn {
  border: 1px solid #dddddd;
  border-radius: 5px;
}
.date_tabs {
  padding-bottom: 10px;
}
.title_wrap {
  display: flex;
  padding-top: 5px;
}

.legend {
  box-shadow: 0px 2px 8px 0px #cccccc;
  border-radius: 3px;
  margin: 7px 10px 0 10px;
}
/deep/.van-search__content {
  background-color: #eee;
  border-radius: 14px;
}
.legend_wrap {
  display: flex;
  justify-content: space-between;
  color: #1b1b1b;
}
.legend_item > view {
  margin-bottom: 10px;
}
.myHeader {
  width: 100%;
  height: 150px;
  padding-top: 50px;
  margin-bottom: 10px;
  background: #dd2c34;
  background-size: 100% 100%;
  display: flex;
  align-items: center;
  padding-left: 24px;
  position: relative;
}
.txBox {
  image {
    width: 58px;
    height: 58px;
  }
}
.txBox > img {
  width: 100%;
  height: 100%;
}
.infoBox {
  padding-left: 16px;
}
.isName {
  font-size: 18px;
  font-weight: 500;
  color: #ffffff;
}
.isZWinfo {
  font-size: 16px;
  font-weight: 400;
  color: #ffffff;
  padding-top: 5px;
}
.setting,
.message {
  width: 20px;
  height: 20px;
}
.setting {
  position: absolute;
  top: 40px;
  right: 40px;
}
.message {
  position: absolute;
  top: 40px;
  right: 24px;
}
.myConter .van-cell {
  padding: 16px;
}
.myConter .van-cell::after {
  right: 0;
}
</style>
