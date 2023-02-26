<!--
 * @Author: YangJianBing
 * @Date: 2022-04-23 09:47:32
 * @LastEditTime: 2023-02-26 23:10:50
 * @LastEditors: YangJianBing
 * @Description: 
 * @FilePath: \app\pages\page\paymentType.vue
-->
<template>
  <view class="page">
    <view class="header-min-box"></view>
    <uni-nav-bar
      title="缴费类型"
      color="#ffffff"
      background-color="#dd2c34"
      @clickLeft="back"
      left-icon="left"
    ></uni-nav-bar>
    <van-row class="pay-box">
      <van-col span="12" >
        <view class="pay-type b-b b-r" @click="goPage('WYF')">
          <view class="text-center">
            <view class="icon iconfont">&#xfb49;</view>
          </view>

          <view class="text-center m-t-10">物业费</view>
        </view>
      </van-col>
      <van-col span="12" >
        <view class="pay-type b-b" @click="goPage('SF')">
          <view class="text-center">
            <view class="icon iconfont">&#xfaa9;</view>
          </view>
          <view class="text-center m-t-10">水费</view>
        </view>
      </van-col>
      <van-col span="12" >
        <view class="pay-type b-r" @click="goPage('CWGLF')">
          <view class="text-center">
            <view class="icon iconfont">&#xfba5;</view>
          </view>
          <view class="text-center m-t-10">车位管理费</view>
        </view>
      </van-col>
      <van-col span="12" >
        <view class="pay-type" @click="goPage('QT')">
          <view class="text-center">
            <view class="icon iconfont">&#xfbd2;</view>
          </view>
          <view class="text-center m-t-10">其他</view>
        </view>
      </van-col>
    </van-row>
  </view>
</template>

<script>
export default {
  components: {
  
  },
  data() {
    return {}
  },
  created() {},
  methods: {
    back() {
      uni.navigateBack();
    },
    goPage(type) {
      debugger
      uni.setStorageSync('paymentType', type)
      uni.navigateTo({
        url: `/pages/page/billToBePaidDetails`,
      });
    }
  }
}
</script>

<style scoped lang="scss">
.pay-box {
  margin: 15px;
  border-radius: 6px;
  border: solid 1px #dd2c34;
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
    .iconfont {
      font-size: 40px;
      margin: 0 auto;
      color: #dd2c34;
    }
  }
}
</style>
