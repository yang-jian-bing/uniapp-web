<!--
 * @Author: YangJianBing
 * @Date: 2021-10-23 11:32:53
 * @LastEditTime: 2023-03-05 20:38:28
 * @LastEditors: YangJianBing
 * @Description: 待缴费列表
 * @FilePath: \app\pages\page\billToBePaidList.vue
-->
<template>
  <view class="page">
    <uni-nav-bar
      title="缴费列表"
      :fixed="true"
      :statusBar="true"
      color="#ffffff"
      background-color="#dd2c34"
      @clickLeft="back"
      left-icon="left"
    ></uni-nav-bar>
    <view class="flex p-10">
      <view
        class="pay-type"
        :class="[type === '' ? 'pay-electricity' : '']"
        @click="payType('')"
        >全部</view
      >
      <view
        class="pay-type"
        :class="[type === 'WYF' ? 'pay-electricity' : '']"
        @click="payType('WYF')"
        >物业费</view
      >
      <view
        class="pay-type"
        :class="[type === 'DF' ? 'pay-electricity' : '']"
        @click="payType('DF')"
        >电费</view
      >
      <view
        class="pay-type"
        :class="[type === 'SF' ? 'pay-electricity' : '']"
        @click="payType('SF')"
        >水费</view
      >
      <view
        class="pay-type"
        :class="[type === 'TCF' ? 'pay-electricity' : '']"
        @click="payType('TCF')"
        >停车费</view
      >
    </view>
    <view class="pay-list-box p-10 p-t-0" v-if="list.length > 0">
      <view
        class="pay-list-item"
        @click="goPage(item)"
        v-for="(item, index) in list"
        :key="index"
      >
        <view class="flex">
          <view class="pay-list-item-title">{{ item.payNo }}</view>
          <view class="pay-property pay-type-item" v-if="item.type == 'WYF'"
            >物业费</view
          >
          <view class="pay-water pay-type-item" v-if="item.type == 'SF'"
            >水费</view
          >
          <view class="pay-electricity pay-type-item" v-if="item.type == 'DF'"
            >电费</view
          >
        </view>
        <view class="flex-between m-t-10">
          <view class="font-14">缴费金额：</view>
          <view class="font-14">
            <view class="font-bold">{{ item.amount }}</view>
          </view>
        </view>
        <view class="flex-between m-t-10">
          <view class="font-14">缴费日期：</view>
          <view class="font-14">
            <view class="font-bold">{{ item.time }}</view>
          </view>
        </view>
        <view class="flex-between m-t-10">
          <view class="font-14">缴费开始时间：</view>
          <view class="font-14">
            <view class="font-bold">{{ item.beginTime }}</view>
          </view>
        </view>
        <view class="flex-between m-t-10">
          <view class="font-14">缴费结束时间：</view>
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
import dayjs from 'dayjs';
export default {
  components: {},
  data() {
    const currentHouse = uni.getStorageSync("currentHouse");
    return {
      currentHouse: JSON.parse(currentHouse),
      currentPageTitle: "",
      type: "",
      list: [],
    };
  },
  created() {
    let pages = getCurrentPages(); //页面示例
    let page = pages[pages.length - 1]; //当前页面实例
    this.currentPageTitle = page.$holder.navigationBarTitleText; //当前页面标题
    this.getList();
  },
  methods: {
    back() {
      uni.navigateBack();
    },
    getList() {
      const p = {
        checkSum: "starlab",
        // houseId: this.currentHouse.houseId,
        type: this.type,
      };
      this.$request.get("/rest/pay/pay-list", p).then(
        (res) => {
          this.list = res.data.data.map(item=>{
            item.time = dayjs(item.time).format('YYYY-MM-DD HH:ss:mm')
            item.beginTime = dayjs(item.beginTime).format('YYYY-MM-DD')
            item.endTime = dayjs(item.endTime).format('YYYY-MM-DD')
            return item
          });
        },
        (err) => {
          console.log(err);
        }
      );
    },
    goPage(item) {
      uni.setStorageSync("payNo", item.payNo);
      uni.navigateTo({
        url: `/pages/page/payDetails`,
      });
    },
    payType(type) {
      this.type = type;
      this.getList();
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
