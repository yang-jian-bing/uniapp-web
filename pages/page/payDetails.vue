<!--
 * @Author: YangJianBing
 * @Date: 2021-10-23 11:35:24
 * @LastEditTime: 2023-07-15 14:22:03
 * @LastEditors: YangJianBing
 * @Description: 待缴费详情
 * @FilePath: /uniapp-web/pages/page/payDetails.vue
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
    <view class="p-10 b-g-f m-10">
      <view>
        <view class="flex-center m-t-20 p-t-20">
          <view class="pay-list-item-title">{{ obj.housing }}</view>
          <view class="pay-property pay-type-item" v-if="obj.type == 'WYF'">
            物业费
          </view>
          <view class="pay-water pay-type-item" v-if="obj.type == 'SF'"
            >水费</view
          >
          <view class="pay-electricity pay-type-item" v-if="obj.type == 'DF'">
            电费
          </view>
        </view>
        <view class="pay-amount">{{ obj.amount }}</view>
      </view>

      <view class="p-t-10">
        <view class="flex-between m-t-20">
          <view class="font-14">缴费编号</view>
          <view class="font-14">
            <view class="font-bold">{{ obj.payNo }}</view>
          </view>
        </view>
        <view class="flex-between m-t-20">
          <view class="font-14">计费开始时间</view>
          <view class="font-14">
            <view class="font-bold">{{ obj.beginTime }}</view>
          </view>
        </view>
        <view class="flex-between m-t-20">
          <view class="font-14">计费结束时间</view>
          <view class="font-14">
            <view class="font-bold">{{ obj.endTime }}</view>
          </view>
        </view>
        <view class="flex-between m-t-20">
          <view class="font-14">缴费时间</view>
          <view class="font-14">
            <view class="font-bold">{{ obj.time }}</view>
          </view>
        </view>
        <view class="flex-between m-t-20">
          <view class="font-14">备注</view>
          <view class="font-14">
            <view class="font-bold">{{ obj.remark }}</view>
          </view>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
import dayjs from 'dayjs';
export default {
  components: {},
  data() {
    return {
      obj: {},
    };
  },
  created() {
    this.getDetails();
  },
  methods: {
    getDetails() {
      this.$request
        .get("/rest/pay/detail?checkSum=starlab", {
          payNo: uni.getStorageSync("payNo"),
        })
        .then(
          (res) => {
            const data = res.data.data
            data.time = dayjs(data.time).format('YYYY-MM-DD HH:ss:mm')
            data.beginTime = dayjs(data.beginTime).format('YYYY-MM-DD')
            data.endTime = dayjs(data.endTime).format('YYYY-MM-DD')
            this.obj = data;
          },
          (err) => {
            console.log(err);
          }
        );
    },
    back() {
      uni.navigateBack();
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
