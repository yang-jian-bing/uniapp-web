<!--
 * @Author: YangJianBing
 * @Date: 2021-10-23 11:35:24
 * @LastEditTime: 2023-02-26 23:16:45
 * @LastEditors: YangJianBing
 * @Description: 待缴费详情
 * @FilePath: \app\pages\page\billToBePaidDetails.vue
-->
<template>
  <view class="page">
    <view class="header-min-box"></view>
    <uni-nav-bar
      title="缴费"
      color="#ffffff"
      background-color="#dd2c34"
      @clickLeft="back"
      left-icon="left"
    ></uni-nav-bar>
    <view class="p-10 b-g-f m-10">
      <view>
        <view class="flex-center m-t-20 p-t-20">
          <view class="pay-list-item-title">{{ currentHouse.address }}</view>
          <view class="pay-property pay-type-item" v-if="paymentType == 'WYF'">物业费</view>
          <view class="pay-water pay-type-item" v-if="paymentType == 'SF'">水费</view>
          <view class="pay-electricity pay-type-item" v-if="paymentType == 'CWGLF'">车费管理费</view>
          <view class="pay-electricity pay-type-item" v-if="paymentType == 'QT'">其他</view>
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
          <view class="font-14" v-if="['WYF', 'CWGLF'].includes(paymentType)">缴费时长(月)</view>
          <view class="font-14" v-if="['SF'].includes(paymentType)">缴费数量(吨)</view>
          <view class="font-14" v-if="['WYF', 'SF', 'CWGLF'].includes(paymentType)">
            <view class="font-bold">
              <van-field
                v-model="duration"
                label=""
                class="p-0 m-0"
                @change="blur"
                type="number"
                input-align="right"
                placeholder="请输入"
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
            <van-field rows="3" autosize v-model="obj.remark" type="textarea" placeholder="请输入备注" />
          </view>
        </view>
        <view class="m-t-20 m-b-20 text-center">
          <van-button style="width: 100%" type="primary" @click="goPay">支付</van-button>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
// import { getValue } from '../../../utils/auth'
import dayjs from 'dayjs'
export default {
  components: {

  },
  data() {
    const currentHouse = uni.getStorageSync("currentHouse")
    return {
      paymentType: uni.getStorageSync("paymentType") ,
      currentHouse: JSON.parse(currentHouse),
      duration: null, // 缴费时长
      obj: {
        beginTime: '2022-02-01', // 上次缴费时间
        type: uni.getStorageSync('paymentType'),
        endTime: '' // 上次缴费时间
      }
    }
  },
  created() {
    this.latelyPayDate()
  },
  methods: {
    back() {
      uni.navigateBack();
    },
    latelyPayDate() {
      this.$request.get('/rest/pay/lately-pay-date', {
        houseId: this.currentHouse.houseId,
        checkSum: "starlab",
        type: this.paymentType
      }).then(
        res => {
          this.obj.beginTime = res.data.endTime || '2023-01-01'
        },
        err => {
          console.log(err)
        }
      )
    },
    goPay() {
      const p = {
        houseId: this.currentHouse.houseId,
        type: this.paymentType,
        checkSum: 'starlab',
        ...this.obj
      }
      this.$request.post('/rest/pay/order', p).then(
        res => {
          const obj = {
            orderNum: res.data.payNo,
            amount: 0.1
          }
          



        },
        err => {
          console.log(err)
        }
      )
    },
    blur() {
      debugger
      this.obj.endTime = dayjs(this.obj.beginTime)
        .add(this.duration, 'month')
        .format('YYYY-MM-DD')
      this.obj.amount = this.duration * 134.0
    }
  }
}
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
