<template>
  <view class="page">
    <uni-nav-bar
      title="缴费"
      :fixed="true"
      :statusBar="true"
      color="#ffffff"
      background-color="#dd2c34"
      @clickLeft="back"
      left-icon="left"
    ></uni-nav-bar>
    <view class="pay-max-box">
      <view class="pay-box">
        <view class="pay-type flex" @click="goPage('WYF')">
          <view class="text-center img-box">
            <image src="../../assets/img/pay-type/wyf.png" alt="" srcset="" />
            <view class="m-t-5">物业费</view>
          </view>
          <view class="content">上次缴费时间:2023-10-12</view>
        </view>
        <view class="pay-type flex" @click="goPage('SF')">
          <view class="text-center img-box">
            <image src="../../assets/img/pay-type/sf.png" alt="" srcset="" />
            <view class="m-t-5">水费</view>
          </view>
          <view class="content">上次缴费时间:2023-10-12</view>
        </view>
        <view class="pay-type flex" @click="goPage('CWGLF')">
          <view class="text-center img-box">
            <image src="../../assets/img/pay-type/cwf.png" alt="" srcset="" />
            <view class="m-t-5">车位管理费</view>
          </view>
          <view class="content">上次缴费时间:2023-10-12</view>
        </view>

        <view class="pay-type flex" @click="goPage('QT')">
          <view class="text-center img-box">
            <image src="../../assets/img/pay-type/qt.png" alt="" srcset="" />
            <view class="m-t-5">其他</view>
          </view>
          <view class="content">上次缴费时间:2023-10-12</view>
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
      uni.setStorageSync("paymentType", type);
      uni.navigateTo({
        url: `/pages/page/billToBePaidDetails`,
      });
    },
  },
};
</script>

<style scoped lang="scss">
.pay-box {
  border-radius: 6px;
  font-size: 18px;
  .img-box {
    flex-shrink: 0;
    width: 90px;
  }
  .pay-type {
    border-bottom: solid 1px #ddd;
    padding: 10px;
    image {
      width: 50px;
      height: 50px;
      margin: 0 auto;
    }
    .content {
      padding-left: 20px;
      display: flex;
      flex-direction: column;
      justify-content: flex-end;
    }
  }
}
</style>
