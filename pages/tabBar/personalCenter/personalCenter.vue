<template>
  <view class="myConter">
    <view class="myHeader">
      <view class="txBox">
        <image src="../../../assets/img/login/login-logo.png" />
      </view>
      <view class="infoBox">
        <!-- <view class="isName">{{ userObj.name }}</view> -->
        <view class="isZWinfo">
          <view>{{ userObj.phone }}</view>
        </view>
      </view>
    </view>
    <view class="b-g-ee0a24">
      <view class="header-line"></view>
    </view>

    <view class="m-10 b-g-f m-t-0 b-r-5">
      <view
        class="p-l-10 p-r-10 p-t-15 p-b-15"
        :class="[index !== list.length - 1 ? 'b-b' : '']"
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
          <view class="p-t-3">
            <uni-icons type="forward" size="20"></uni-icons>
          </view>
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
          page: "toBePaid",
          icon: require("@/assets/img/personalIcon/htgl.png"),
        },
        {
          text: "缴费记录",
          page: "billToBePaidList",
          icon: require("@/assets/img/personalIcon/lsfpgl.png"),
        },
        {
          text: "软件升级",
          page: "update",
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
      if (page === "update") {
        uni.showToast({
          title: "已是最新版本！", //显示的文字
          duration: 2000, //显示多少时间，默认1500毫秒
          icon: "success", //自定义显示的图标，默认成功success，错误error,加载loading，不显示图标是none
        });
        return;
      }
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
.myHeader {
  width: 100%;
  background: #dd2c34;
  background-size: 100% 100%;
  padding: 0 10px;
  padding-bottom: 10px;
  padding-top: 40px;
  display: flex;
  align-items: center;
  position: relative;
}
.txBox {
  border-radius: 6px;
  overflow: hidden;
  width: 58px;
  height: 58px;
  image {
    width: 58px;
    height: 58px;
  }
}
.p-t-3{
  padding-top: 3px;
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

.header-line {
  border-radius: 10px 10px 0 0;
  background: #f5f5f5;
  overflow: hidden;
  height: 10px;
  width: 100vw;
  border: none;
}
</style>
