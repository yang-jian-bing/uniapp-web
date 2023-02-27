<!--
 * @Author: YangJianBing
 * @Date: 2022-04-23 09:47:32
 * @LastEditTime: 2023-02-27 23:38:57
 * @LastEditors: YangJianBing
 * @Description: 
 * @FilePath: \app\pages\page\paymentType.vue
-->
<template>
  <view class="page">
    <uni-nav-bar
      title="缴费类型"
      :fixed="true"
      :statusBar="true"
      color="#ffffff"
      background-color="#dd2c34"
      @clickLeft="back"
      left-icon="left"
    ></uni-nav-bar>
    <view class="pay-max-box">
      <view class="pay-box flex-between">
        <view class="pay-type b-b b-r" @click="goPage('WYF')">
          <view class="text-center">
            <view class="icon iconfont">&#xfb49;</view>
          </view>

          <view class="text-center m-t-10">物业费</view>
        </view>

        <view class="pay-type b-b" @click="goPage('SF')">
          <view class="text-center">
            <view class="icon iconfont">&#xfaa9;</view>
          </view>
          <view class="text-center m-t-10">水费</view>
        </view>
      </view>
      <view class="pay-box flex-between">
        <view class="pay-type b-r" @click="goPage('CWGLF')">
          <view class="text-center">
            <view class="icon iconfont">&#xfba5;</view>
          </view>
          <view class="text-center m-t-10">车位管理费</view>
        </view>

        <view class="pay-type" @click="goPage('QT')">
          <view class="text-center">
            <view class="icon iconfont">&#xfbd2;</view>
          </view>
          <view class="text-center m-t-10">其他</view>
        </view>
      </view>
    </view>
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
    goPage(type) {
      debugger;
      uni.setStorageSync("paymentType", type);
      uni.navigateTo({
        url: `/pages/page/billToBePaidDetails`,
      });
    },
  },
};
</script>

<style scoped lang="scss">
.pay-max-box {
  border: solid 1px #dd2c34;
  margin: 15px;
}
.pay-box {
  border-radius: 6px;
  .b-b {
    border-bottom: solid 1px #dd2c34;
  }
  .b-r {
    border-right: solid 1px #dd2c34;
  }
  .pay-type {
    font-size: 16px;
    height: calc(50vw - 15px);
    padding: calc(11vw);
    width: 50%;
    .iconfont {
      font-size: 40px;
      margin: 0 auto;
      color: #dd2c34;
    }
  }
}
</style>
