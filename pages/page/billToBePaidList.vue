<!--
 * @Author: YangJianBing
 * @Date: 2021-10-23 11:32:53
 * @LastEditTime: 2023-02-26 23:04:11
 * @LastEditors: YangJianBing
 * @Description: 待缴费列表
 * @FilePath: \app\pages\page\billToBePaidList.vue
-->
<template>
  <view class="page">
    <view class="header-min-box"></view>
    <uni-nav-bar
      title="缴费列表"
      color="#ffffff"
      background-color="#dd2c34"
      @clickLeft="back"
      left-icon="left"
    ></uni-nav-bar>
    <view class="flex p-10">
      <view class="pay-type">全部</view>
      <view class="pay-type">物业费</view>
      <view class="pay-type">电费</view>
      <view class="pay-type">水费</view>
      <view class="pay-type">暖气费</view>
      <view class="pay-type">停车费</view>
    </view>
    <view class="pay-list-box p-10 p-t-0">
      <view
        class="pay-list-item"
        @click="goPage()"
        v-for="(item, index) in list"
        :key="index"
      >
        <view class="flex">
          <view class="pay-list-item-title">{{ item.housing }}</view>
          <view class="pay-property pay-type-item" v-if="item.type == 1"
            >物业费</view
          >
          <view class="pay-water pay-type-item" v-if="item.type == 2"
            >水费</view
          >
          <view class="pay-electricity pay-type-item" v-if="item.type == 3"
            >电费</view
          >
        </view>
        <view class="flex-between m-t-10">
          <view class="font-14">缴费金额：</view>
          <view class="font-14">
            <view class="font-bold">{{ item.amount }}</view>
          </view>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
// import { Button, Popup, Picker, Search } from 'vant'
// import { getAction } from '@/api/manage'
export default {
  components: {
    // [Button.name]: Button,
    // [Popup.name]: Popup,
    // [Picker.name]: Picker,
    // [Search.name]: Search
  },
  data() {
    return {
      currentPageTitle: '',
      list: [
        {
          id: 1212,
          payCostNo: "202110160001", // 缴费编号
          housing: "缤纷南郡2号楼3单元3202",
          type: 1, // 费用类型，1.物业费，2.水费，3.电费
          amount: 543.21, // 金额
          startTime: "2021-01-12", // 计费开始时间
          endTime: "2021-08-12", // 计费结束时间
        },
        {
          id: 1212,
          payCostNo: "202110160001", // 缴费编号
          housing: "缤纷南郡2号楼3单元3202",
          type: 2, // 费用类型，1.物业费，2.水费，3.电费
          amount: 55.0, // 金额
          startTime: "2021-01-12", // 计费开始时间
          endTime: "2021-08-12", // 计费结束时间
        },
        {
          id: 1212,
          payCostNo: "202110160001", // 缴费编号
          housing: "缤纷南郡2号楼3单元3202",
          type: 3, // 费用类型，1.物业费，2.水费，3.电费
          amount: 234.55, // 金额
          startTime: "2021-01-12", // 计费开始时间
          endTime: "2021-08-12", // 计费结束时间
        },
      ],
    };
  },
  created() {
    let pages = getCurrentPages(); //页面示例
    let page = pages[pages.length - 1]; //当前页面实例
    this.currentPageTitle = page.$holder.navigationBarTitleText; //当前页面标题

    // this.getList()
  },
  methods: {
    back() {
      uni.navigateBack();
    },
    getList() {
      const p = {
        checkSum: "starlab",
        houseId: "",
        type: "",
      };
      getAction("/rest/pay/pay-list", p).then(
        (res) => {
          this.columns = res.houses;
          this.currentHouse = this.columns[0];
        },
        (err) => {
          console.log(err);
        }
      );
    },
    goPage() {
      this.$bridge.call("billToBePaidDetails");
    },
    onConfirm(value) {
      this.selectName = value.text;
      this.selectId = value.id;
      this.showPicker = false;
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
