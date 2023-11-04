<!--
 * @Author: YangJianBing
 * @Date: 2021-10-23 11:32:53
 * @LastEditTime: 2023-11-04 15:05:16
 * @LastEditors: YangJianBing
 * @Description: 待缴费列表
 * @FilePath: /uniapp-web/pages/page/toBePaid.vue
-->
<template>
  <view class="page">
    <uni-nav-bar
      title="待缴费"
      :fixed="true"
      :statusBar="true"
      color="#ffffff"
      background-color="#dd2c34"
      @clickLeft="back"
      left-icon="left"
    ></uni-nav-bar>
    <view class="pay-list-box p-10 p-t-0 m-t-10" v-if="list.length > 0">
      <view
        class="pay-list-item"
        @click="goPage(item)"
        v-for="(item, index) in list"
        :key="index"
      >
        <view class="flex-between">
          <view class="font-16">费用类型</view>
          <view class="pay-property pay-type-item" v-if="item.type == 'WYF'"
            >物业费</view
          >
          <view class="pay-water pay-type-item" v-if="item.type == 'SF'"
            >水费</view
          >
          <view class="pay-electricity pay-type-item" v-if="item.type == 'DF'"
            >电费</view
          >
          <view class="pay-electricity pay-type-item" v-if="item.type == 'CWGLF'"
            >车位管理费</view
          >
        </view>
        <view class="flex-between m-t-10">
          <view class="font-14 col-666">缴费金额：</view>
          <view class="font-14">
            <view class="font-bold">{{ item.amount }}</view>
          </view>
        </view>
        <view class="flex-between m-t-10">
          <view class="font-14 col-666">缴费开始时间：</view>
          <view class="font-14">
            <view class="font-bold">{{ item.beginTime }}</view>
          </view>
        </view>
        <view class="flex-between m-t-10">
          <view class="font-14 col-666">缴费结束时间：</view>
          <view class="font-14">
            <view class="font-bold">{{ item.endTime }}</view>
          </view>
        </view>
      </view>
    </view>
    <view v-else class="text-center p-20"> 暂无数据 </view>
  </view>
</template>

<script>
import dayjs from "dayjs";
export default {
  components: {},
  data() {
    return {
      currentHouse: uni.getStorageSync("currentHouse"),
      beginTime: "",
      type: null,
      list: [],
    };
  },
  created() {
    this.latelyPayDate();
  },
  methods: {
    latelyPayDate() {
      this.$request
        .get("/rest/pay/to-be-paid", {
          houseId: this.currentHouse.houseId,
          checkSum: "starlab"
        })
        .then(
          (res) => {
            this.list = res.data.data;
          },
          (err) => {
            console.log(err);
          }
        );
    },
    back() {
      uni.navigateBack();
    },
    goPage(item) {
      uni.setStorageSync("paymentType", item.type);
      uni.setStorageSync("toBePaid", item);
      uni.navigateTo({
        url: `/pages/page/billToBePaidDetails`,
      });
    },
  },
};
</script>

<style scoped lang="scss">
.pay-type {
  background: #ddd;
  border-radius: 4px;
  margin-right: 5px;
  padding: 6px 10px;
}
.pay-list-item {
  background: #fff;
  border-radius: 6px;
  padding: 10px;
  margin-bottom: 10px;
}
.pay-list-item-title {
  font-size: 14px;
  font-weight: bold;
}
.pay-type-item {
  color: #fff;
  padding: 0px 5px;
  margin-left: 5px;
  border-radius: 4px;
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
</style>
