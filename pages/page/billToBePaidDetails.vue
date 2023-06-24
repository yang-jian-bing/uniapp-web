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
    <view class="p-10 b-g-f m-10">
      <view>
        <view class="flex-center m-t-20 p-t-20">
          <view class="pay-list-item-title">{{ currentHouse.address }}</view>
          <view class="pay-property pay-type-item" v-if="paymentType == 'WYF'"
            >物业费</view
          >
          <view class="pay-water pay-type-item" v-if="paymentType == 'SF'"
            >水费</view
          >
          <view
            class="pay-electricity pay-type-item"
            v-if="paymentType == 'CWGLF'"
            >车费管理费</view
          >
          <view class="pay-electricity pay-type-item" v-if="paymentType == 'QT'"
            >其他</view
          >
        </view>
        <view class="pay-amount">{{ obj.amount }}元</view>
      </view>

      <view class="p-t-10">
        <view class="flex-between m-t-20">
          <view class="font-14">上次缴费截止日期</view>
          <view class="font-14">
            <view class="font-bold">{{ obj.beginTime }}</view>
          </view>
        </view>
        <view class="flex-between m-t-20">
          <view class="font-14" v-if="['WYF', 'CWGLF'].includes(paymentType)"
            >缴费时长(月)</view
          >
          <view class="font-14" v-if="['SF'].includes(paymentType)"
            >缴费数量(吨)</view
          >
          <view
            class="font-14"
            v-if="['WYF', 'SF', 'CWGLF'].includes(paymentType)"
          >
            <view class="font-bold">
              <input
                class="uni-input text-right p-r-0"
                @input="blur"
                v-model="duration"
                focus
                placeholder="请输入时长"
              />
            </view>
          </view>
        </view>
        <view class="flex-between m-t-20">
          <view class="font-14">计费结束时间</view>
          <view class="font-14">
            <view class="font-bold">{{ obj.endTime }}</view>
          </view>
        </view>
        <view class="m-t-20">
          <view class="font-14">备注：</view>
          <view class="font-14 pay-remark">
            <textarea v-model="obj.remark" placeholder="请输入备注" />
          </view>
        </view>
        <view class="m-t-20 m-b-20 text-center">
          <button type="warn" @click="goPay">支付</button>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
import dayjs from "dayjs";
export default {
  components: {},
  data() {
    return {
      paymentType: uni.getStorageSync("paymentType"),
      currentHouse: uni.getStorageSync("currentHouse"),
      toBePaid: uni.getStorageSync("toBePaid"),
      duration: null, // 缴费时长
      obj: {
        beginTime: "2022-02-01", // 上次缴费时间
        type: uni.getStorageSync("paymentType"),
        endTime: "", // 上次缴费时间
      },
    };
  },
  created() {
    if(this.toBePaid){
      this.obj = this.toBePaid
      this.duration = this.obj.months
    }else{

      this.latelyPayDate();
    }
  },
  methods: {
    back() {
      uni.navigateBack();
    },
    latelyPayDate() {
      this.$request
        .get("/rest/pay/lately-pay-date", {
          houseId: this.currentHouse.houseId,
          checkSum: "starlab",
          type: this.paymentType,
        })
        .then(
          (res) => {
            this.obj.beginTime = res.data.data.endTime || "2023-01-01";
          },
          (err) => {
            console.log(err);
          }
        );
    },
    goPay() {
      const p = {
        houseId: this.currentHouse.houseId,
        type: this.paymentType,
        checkSum: "starlab",
        ...this.obj,
      };
      uni.showLoading({
        title: "加载中",
      });

      this.$request.post("/rest/pay/order", p).then(
        (res) => {
          const pay = res.data.data;
          const params = JSON.stringify({
            appid: pay.appid,
            partnerid: pay.partnerid,
            prepayid: pay.prepayid,
            package: pay.package,
            noncestr: pay.noncestr,
            timestamp: pay.timestamp + "",
            sign: pay.sign,
          });
          uni.requestPayment({
            provider: "wxpay",
            orderInfo: params,
            success: function (res) {
              uni.hideLoading();
              uni.showToast({
                title: "支付成功", //显示的文字
                duration: 2000, //显示多少时间，默认1500毫秒
                icon: "success", //自定义显示的图标，默认成功success，错误error,加载loading，不显示图标是none
              });
              uni.setStorageSync("payNo", pay.payNo);
              uni.navigateTo({
                url: `/pages/page/payDetails`,
              });
            },
            fail: function (err) {
              uni.showModal({
                title: "支付失败",
                content: JSON.stringify(err),
                showCancel: false,
                success: (res) => {},
              });
              console.log("fail:" + JSON.stringify(err));
            },
          });
        },
        (err) => {
          console.log(err);
        }
      );
    },
    blur() {
      this.obj.endTime = dayjs(this.obj.beginTime)
        .add(this.duration, "month")
        .format("YYYY-MM-DD");
      this.obj.amount = this.duration * 134.0;
    },
  },
};
</script>

<style scoped lang="scss">
.pay-list-item-title {
  font-size: 14px;
  font-weight: bold;
  text-align: center;
}
.pay-type-item {
  color: #fff;
  padding: 0px 5px;
  margin-left: 5px;
  border-radius: 4px;
}
.pay-amount {
  color: #f56c6c;
  font-size: 18px;
  margin-top: 10px;
  text-align: center;
  font-weight: bold;
}
.pay-water {
  background: #67c23a;
}
.pay-electricity {
  background: #f56c6c;
}
.pay-property {
  background: #409eff;
}
.pay-remark {
  border: solid 1px #ddd;
  border-radius: 4px;
  margin-top: 5px;
}
</style>
