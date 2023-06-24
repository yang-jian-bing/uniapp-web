
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
      <view class="pay-box flex-between">
        <view class="pay-type b-b b-r" @click="goPage('WYF')">
          <view class="text-center">
            <image
              src="../../assets/img/pay-type/wyf.png"
              alt=""
              srcset=""
            />
          </view>

          <view class="text-center m-t-10">物业费</view>
        </view>

        <view class="pay-type b-b" @click="goPage('SF')">
          <view class="text-center">
            <image
              src="../../assets/img/pay-type/sf.png"
              alt=""
              srcset=""
            />
          </view>
          <view class="text-center m-t-10">水费</view>
        </view>
      </view>
      <view class="pay-box flex-between">
        <view class="pay-type b-r" @click="goPage('CWGLF')">
          <view class="text-center">
            <image
              src="../../assets/img/pay-type/cwf.png"
              alt=""
              srcset=""
            />
          </view>
          <view class="text-center m-t-10">车位管理费</view>
        </view>

        <view class="pay-type" @click="goPage('QT')">
          <view class="text-center">
            <image
              src="../../assets/img/pay-type/qt.png"
              alt=""
              srcset=""
            />
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
    image {
      width: 60px;
      height: 60px;
      margin: 0 auto;
    }
  }
}
</style>
