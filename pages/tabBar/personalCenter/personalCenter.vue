<template>
  <view class="">
    <view class="home-box myHeader flex-between" >
      <view class="p-l-10">
        <view class="isName">王五 </view>
        <view class="isZWinfo">
          <view>{{ userObj.phone }}</view>
        </view>
      </view>
      <view class="txBox">
        <image src="../../../assets/img/login/min-logo.jpg" />
      </view>
    </view>
    <view class="p-l-10 p-t-20 p-b-20 font-16">
      缴费
    </view>
    <view class="b-g-f m-t-0 b-r-5 p-l-10">
      <view
        class="p-r-10"
        :class="[index !== list.length - 1 ? 'border-b' : '']"
        v-for="(item, index) of list"
        :key="index"
        @click="toPage(item.page)"
      >
        <!-- 使用 title 插槽来自定义标题 -->
        <view class="flex-between h-center p-l-10">
          <view class="flex title-box">
            <view class="img-100 m-r-10 h-center flex">
              <image :src="item.icon" style="height: 24px; width: 24px" />
            </view>
            <view class="col-1b1b font-16">
              {{ item.text }}
            </view>
          </view>
          <view>
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
          icon: require("@/assets/img/personalIcon/djf.png"),
        },
        {
          text: "缴费记录",
          page: "billToBePaidList",
          icon: require("@/assets/img/personalIcon/jfjl.png"),
        },
        // {
        //   text: "软件升级",
        //   page: "update",
        //   icon: require("@/assets/img/personalIcon/jfjl.png"),
        // },
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
  background-size: 100% 100%;
  padding-bottom: 10px;
  padding-top: 60px;

}
.border-b{
  border-bottom: solid 1px #eee;
}
.txBox {
  border-radius: 6px;
  overflow: hidden;
  margin-right: 10px;
  width: 48px;
  height: 48px;
  image {
    width: 48px;
    height: 48px;
  }
}
.p-t-3{
  padding-top: 3px;
}

.isName {
  font-size: 22px;
  font-weight: 500;
  color: #ffffff;
  padding-top: 5px;
}
.isZWinfo {
  font-size: 14px;
  font-weight: 400;
  color: #ffffff;
}
.title-box{
  height: 60px;
  line-height: 60px;
   align-items:center;
}
.h-center{
   align-items:center;
}
.header-line {
  border-radius: 10px 10px 0 0;
  background: #f5f5f5;
  overflow: hidden;
  height: 10px;
  width: 100vw;
  border: none;
}
.font-16{
  font-size: 16px;
}
</style>
