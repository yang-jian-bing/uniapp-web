<template>
  <view class="myConter">
    <view class="myHeader">
      <view class="txBox">
        <image
          round
          width="58px"
          height="58px"
          fit="cover"
          :src="userObj.headPortrait"
        />
      </view>
      <view class="infoBox">
        <view class="isName">{{ userObj.name }}</view>
        <view class="isZWinfo">
          <view>{{ userObj.phone }}</view>
        </view>
      </view>
    </view>
    <view
      class="p-15 b-b"
      v-for="(item, index) of list"
      :key="index"
      @click="toPage(item.page)"
    >
      <!-- 使用 title 插槽来自定义标题 -->
      <view class="flex-between">
        <view class="flex align-items">
          <view class="img-100 m-r-10">
            <image :src="item.icon" style="height: 24px; width: 24px" />
          </view>
          <view class="col-1b1b font-14">
            {{ item.text }}
          </view>
        </view>
        <view>
          <view class="icon iconfont icon-arrow-right font-20"></view>
        </view>
      </view>
    </view>
    <view class="p-20">
      <button type="warn" @click="logout">退出登录</button>
    </view>
  </view>
</template>

<script>
// import { postAction } from "@/utils/manage.js";
export default {
  components: {},
  data() {
    return {
      defaultAvatar: require("@/assets/img/defaultAvatar.png"),
      list: [
        {
          text: "待缴费",
          page: "exhibitionContractPersonal",
          icon: require("@/assets/img/personalIcon/htgl.png"),
        },
        {
          text: "缴费记录",
          page: "billToBePaidList",
          icon: require("@/assets/img/personalIcon/lsfpgl.png"),
        },
        {
          text: "软件升级",
          page: "",
          icon: require("@/assets/img/personalIcon/rjsj.png"),
        },
      ],
      userObj: {
        name: uni.getStorageSync("name"),
        account: "wangj",
        phone: uni.getStorageSync("phoneNum"),
      },
      ifShowSetting: true,
    };
  },
  created() {},
  methods: {
    toPage(page) {
      uni.navigateTo({
        // 关闭所有页面，打开首页
        url: `/pages/page/${page}`,
      });
    },

    toPageVer() {
      const obj = {
        orderNum: "34243243243",
        amount: 0.1,
      };
      this.$bridge.call("versionCode", JSON.stringify(obj));
    },
    logout() {
      this.$request.post("/rest/user/logout?checkSum=starlab").then(
        (res) => {
          uni.showToast({
            title: "退出成功",
            icon: "success",
          });
          uni.removeStorageSync("token");
          uni.reLaunch({
            // 关闭所有页面，打开首页
            url: "/pages/API/login/login",
          });
        },
        (err) => {
          console.log(err);
        }
      );
    },
    // 获取用户详情
    getUserInfo() {},
    // 跳转设置页面
    goSettimg() {
      this.$bridge.call("accountSecurity");
    },
    // 跳转消息页面
    goMessage() {
      this.$bridge.call("goMessage");
    },
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
.day_title {
  color: #cccccc;
  background-color: transparent !important;
}
.day_item {
  width: 32px;
  height: 32px;
  border-radius: 6px;
  margin: 3.5px 2.5px;
  background: #eeeeee;
  text-align: center;
  line-height: 32px;
}
.day_item:first-child {
  color: #cccccc;
  background: transparent;
}
#date_wrap > view {
  justify-content: center;
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
  height: 128px;
  margin-bottom: 10px;
  background: #dd2c34;
  background-size: 100% 100%;
  display: flex;
  align-items: center;
  padding-left: 24px;
  position: relative;
}
.txBox {
  width: 58px;
  height: 58px;
  border-radius: 50%;
  overflow: hidden;
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
