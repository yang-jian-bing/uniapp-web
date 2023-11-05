<!--
 * @Author: YangJianBing
 * @Date: 2021-10-23 11:32:53
 * @LastEditTime: 2023-11-05 09:21:10
 * @LastEditors: YangJianBing
 * @Description: 待缴费列表
 * @FilePath: /uniapp-web/pages/page/myHouse.vue
-->
<template>
  <view class="page home-box">
    <uni-nav-bar
      title="我的房屋"
      :fixed="true"
      :statusBar="true"
      color="#ffffff"
      background-color="none"
      @clickLeft="back"
      left-icon="left"
    ></uni-nav-bar>
    <view
      class="header-min-box msg-search-box p-t-5 p-b-5"
    >
      <uni-search-bar placeholder="搜索" radius="100" bgColor="none" @confirm="search" />
    </view>
    <view class="pay-list-box p-10 p-t-0" v-if="list.length > 0">
      <view
        class="pay-list-item"
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
          <view class="font-14">地址：</view>
          <view class="font-14">
            <view class="font-bold">{{ item.address }}</view>
          </view>
        </view>
        <view class="flex-between m-t-10">
          <view class="font-14">面积：</view>
          <view class="font-14">
            <view class="font-bold">{{ item.area }}平方米</view>
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
      type: null,
      list: [],
    };
  },
  created() {
    this.getList();
  },
  methods: {
    back() {
      uni.navigateBack();
    },
    getList() {
      this.$request
        .get("/rest/user/my-house?checkSum=starlab", {
          checkSum: "starlab",
          phone: uni.getStorageSync("phoneNum"),
        })
        .then(
          (res) => {
            this.list = res.data.data.map((item) => {
              item.address = `${item.communityName}${item.building}号楼${item.unit}单元${item.floor}${item.roomNo}`;
              return item;
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
