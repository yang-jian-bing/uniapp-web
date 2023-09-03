<template>
  <view class="login-register">
    <image
      src="../../../assets/img/login/top.png"
      class="min-logo"
      alt=""
      srcset=""
      style="width: 100%; border-radius: 0"
    />
    <view class="con">
      <view class="logo-box">
        <image
          src="../../../assets/img/login/min-logo.jpg"
          class="min-logo"
          alt=""
          srcset=""
        />
      </view>
      <view class="loginTitle">橄榄海</view>
      <!-- 验证码登录 -->
      <view class="item-box">
        <view class="item">
          <input
            v-model="principal"
            type="text"
            class="text"
            placeholder="请输入手机号"
          />
        </view>
        <view v-if="errorTips == 3" class="error"
          ><text class="error-icon">!</text>请输入手机号</view
        >
        <view v-if="errorTips == 4" class="error"
          ><text class="error-icon">!</text>请输入正确的手机号</view
        >
        <view class="item">
          <input
            v-model="captchaVerification"
            type="text"
            class="text"
            placeholder="请输入验证码"
          />
          <view class="get-captcha" @click="getYzm">{{ text }}</view>
        </view>
        <view v-if="errorTips == 5" class="error"
          ><text class="error-icon">!</text>请输入验证码</view
        >
      </view>
      <view class="btn" @click="login">登录</view>
      <view class="flex m-t-10">
        <view style="width: 20px; overflow: hidden;margin-top: -3px;">

          <uni-data-checkbox
          selectedTextColor="#c91915"
          selectedColor="#c91915"
          v-model="isRead"
          multiple
          :localdata="hobbys"
          />
        </view>
        我已阅读并同意
        <view style="text-decoration: underline" @click="goWebView('user-agreement')">用户协议</view>和<view
          style="text-decoration: underline" @click="goWebView('privacy-policy')"
          >隐私政策</view
        >
      </view>
    </view>
  </view>
</template>

<script>
import crypto from "crypto";
export default {
  data() {
    return {
      isRead: [],
      hobbys: [{ text: "", value: true }],
      isAccountLogin: true, // 账号登录
      captchaVerification: "", // 验证码
      credentials: "", // 密码
      text: "获取验证码",
      num: 59,
      principal: "", // 用户名/邮箱/手机号
      sysType: 0, // 系统类型 0.普通用户系统 1.商家端
      errorTips: 0, // 输入错误提示: 0无  1账号有误或为空 2密码输入错误或为空 3手机号为空 4手机号输入错误 5验证码输入错误
    };
  },
  methods: {
    // 登录
    login() {
     
      if (this.principal.trim() == "") {
        uni.showToast({
          title: "请输入手机号",
          icon: "error",
        });
        return false;
      }
      if (this.captchaVerification.trim() == "") {
        uni.showToast({
          title: "请输入验证码",
          icon: "error",
        });
        return false;
      }
      if (this.isRead.length ===0) {
        uni.showToast({
          title: "请阅读协议",
          icon: "error",
        });
        return false;
      }
      const params = {
        phoneNum: this.principal,
        verifyCode: this.captchaVerification,
        checkSum: "starlab",
      };
      uni.showLoading({
        title: "加载中...",
      });
      this.$request.post("/rest/user/login?checkSum=starlab", params).then(
        (res) => {
          Object.keys(res.data).map((key) => {
            uni.setStorageSync(key, res.data[key]);
          });
          uni.setStorageSync("phoneNum", res.data.phoneNum.split("+86")[1]);
          uni.hideLoading();
          uni.showToast({
            title: "登录成功",
            icon: "success",
          });
          uni.reLaunch({
            // 关闭所有页面，打开首页
            url: "/pages/tabBar/home/home",
          });
        },
        (err) => {
          uni.hideLoading();
          Toast.clear();
          console.log(err);
        }
      );
    },
    goWebView(page) {
      uni.navigateTo({
        url: `/pages/page/webView?page=${page}`,
      });
    },
    getYzm() {
      if (this.num != 59) {
        return;
      }
      const phoneReg = /^[1][3,4,5,6.7,8,9][0-9]{9}$/;
      if (!phoneReg.test(this.principal)) {
        uni.showToast({
          title: "请输入正确手机号",
          icon: "error",
        });
        return;
      } else {
        this.phoneError = false;
      }
      uni.showLoading({
        title: "加载中...",
      });
      const condition = {
        phoneNum: this.principal,
        checkSum: "starlab",
      };

      const sha1 = crypto.createHash("sha1");
      sha1.update(this.captchaVerification.split("").reverse().join(""));
      const code_sha = sha1.digest("hex").substring(10, 20);
      condition.sign = code_sha;
      this.$request
        .get("/rest/user/verif-code", condition)
        .then(() => {
          uni.hideLoading();
          uni.showToast({
            title: "发送成功",
            icon: "success",
          });

          this.disabled = true;
          const int = setInterval(() => {
            this.text = this.num + "s";
            this.num--;
            if (this.num === 0) {
              this.disabled = false;
              clearInterval(int);
              this.text = "发送验证码";
              this.num = 59;
            }
          }, 1000);
        })
        .catch((err) => {
          console.log(err);
          uni.hideLoading();
          Toast(err);
          return;
        });
    },
    // 去注册
    toRegister() {
      uni.redirectTo({
        url: "/pages/register/register",
      });
    },

    // 切换登录方式
    changeLoginWay() {
      this.isAccountLogin = !this.isAccountLogin;
    },

    // 忘记密码
    forgetPassword() {
      uni.navigateTo({
        url: "/pages/forget-password/forget-password",
      });
    },
  },
};
</script>

<style>
.uni-data-checklist .checklist-group .checklist-box {
  margin-right: 0px !important;
}

.login-b-b {
  border-bottom: solid 3px #fff;
}
.logo-box {
  text-align: center;
  padding-top: 30px;
}
.min-logo {
  width: 88px;
  height: 88px;
  border-radius: 50%;
}
.loginTitle {
  text-align: center;
  height: 25px;
  font-size: 18px;
  margin-top: 0px;
  color: #333333;
  line-height: 25px;
}
.loginMinTitle {
  height: 19px;
  font-size: 14px;
  font-family: Avenir-Book, Avenir;
  font-weight: normal;
  color: #333333;
  line-height: 19px;
  text-align: center;
  margin-top: 5px;
  margin-bottom: 23px;
}
.login-register {
  padding-bottom: env(safe-area-inset-bottom);
}

.login-register .tab {
  display: flex;
  align-items: baseline;
  padding: 160rpx 60rpx 80rpx;
}

.login-register .tab .item {
  margin-right: 30rpx;
  font-size: 32rpx;
  font-weight: 600;
  position: relative;
}

.login-register .tab .item::after {
  position: absolute;
  bottom: -16rpx;
  left: 10%;
  right: 10%;
  display: block;
  width: auto;
  height: 6rpx;
  border-radius: 6rpx;
  content: " ";
  font-size: 0;
  background: #fff;
}

.login-register .tab .item.active {
  font-size: 48rpx;
}

.login-register .tab .item.active::after {
  background: linear-gradient(to right, #c91915, #fff);
}

.login-register .con {
  padding: 0 60rpx;
}

.login-register .con .item {
  margin-top: 30rpx;
  padding: 30rpx 0;
  border-bottom: 4rpx solid #fff;
  display: flex;
  align-items: center;
}

.login-register .con .item .text {
  font-size: 30rpx;
  flex: 1;
  margin-right: 20rpx;
}

.login-register .con .item .get-captcha {
  font-size: 28rpx;
  padding: 0 20rpx;
  color: #c91915;
}

.login-register .con .btn {
  color: #fff;
  background: #c91915;
  height: 90rpx;
  line-height: 90rpx;
  margin-top: 70rpx;
  border-radius: 120rpx;
  text-align: center;
  font-size: 32rpx;
  font-weight: 600;
}

.login-register .con .flex-item {
  margin-top: 30rpx;
  display: flex;
  justify-content: space-between;
  padding: 0 20rpx;
  color: #999;
  font-size: 28rpx;
}

.login-register .another-login {
  position: fixed;
  bottom: 200rpx;
  left: 60rpx;
  right: 60rpx;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.login-register .another-login .text {
  font-size: 28rpx;
  color: #999;
  margin-left: 20rpx;
}

.login-register .another-login .img-box {
  display: flex;
}

.login-register .another-login .img-box .img {
  width: 50rpx;
  height: 50rpx;
  font-size: 0;
  padding: 0 20rpx;
  overflow: hidden;
}

.login-register .con .consent-agreement {
  margin-top: 30rpx;
  padding: 0 20rpx;
  color: #999;
  font-size: 28rpx;
}

.login-register .con .consent-agreement .agreement {
  color: #2a6de9;
}

.login-register .popup-con-middle.register-success {
  padding: 40rpx;
  left: 140rpx;
  right: 140rpx;
}

.login-register .register-success .img {
  position: relative;
  width: 100rpx;
  height: 100rpx;
  margin: auto;
  border-radius: 50%;
  background: #c91915;
}

.login-register .register-success .img::after {
  position: absolute;
  top: 50%;
  left: 0;
  right: 0;
  display: block;
  font-size: 28rpx;
  font: normal normal normal 48rpx/1 uni;
  color: #fff;
  content: "\EA08";
  transform: translateY(-50%);
}

.login-register .register-success .text {
  font-size: 28rpx;
  margin-top: 30rpx;
  font-weight: 600;
}

.login-register .register-success .des {
  color: #999;
  margin-top: 20rpx;
}

/* 错误 */
.login-register .error {
  font-size: 12px;
  color: #c91915;
  line-height: 1.5em;
}
.login-register .error .error-icon {
  display: inline-block;
  width: 14px;
  height: 14px;
  line-height: 14px;
  font-size: 12px;
  border-radius: 50%;
  background: #c91915;
  color: #fff;
  text-align: center;
  margin-right: 5px;
}
</style>
