<!--
 * @Author: YangJianBing
 * @Date: 2021-10-23 11:32:53
 * @LastEditTime: 2023-07-15 14:10:11
 * @LastEditors: YangJianBing
 * @Description: 待缴费列表
 * @FilePath: /uniapp-web/pages/page/faultRepairReport.vue
-->
<template>
  <view class="page">
    <uni-nav-bar
      title="故障报修"
      :fixed="true"
      :statusBar="true"
      color="#ffffff"
      rightText="新增"
      background-color="#dd2c34"
      @clickLeft="back"
      @clickRight="addFaultRepairReport"
      left-icon="left"
    ></uni-nav-bar>
    <view class="m-t-5">
      <uni-segmented-control
        :current="current"
        :values="items"
        styleType="text"
        @clickItem="onClickItem"
        activeColor="#dd2c34"
      ></uni-segmented-control>
    </view>
    <view class="pay-list-box p-10" v-if="list.length > 0">
      <view
        class="pay-list-item"
        @click="goPage(item)"
        v-for="(item, index) in list"
        :key="index"
      >
        <view class="flex-between m-t-10">
          <view class="font-14">房屋：</view>
          <view class="font-14">
            <view class="font-bold">{{ item.address }}</view>
          </view>
        </view>
        <view class="flex-between m-t-10">
          <view class="font-14">创建时间：</view>
          <view class="font-14">
            <view class="font-bold">{{ item.createdTime }}</view>
          </view>
        </view>
        <view class="flex-between m-t-10">
          <view class="font-14">类型：</view>
          <view class="font-14">
            <view class="font-bold" v-if="item.serviceType === 'BX'">报修</view>
            <view class="font-bold" v-else-if="item.serviceType === 'TS'"
              >投诉</view
            >
            <view class="font-bold" v-else-if="item.serviceType === 'ZX'"
              >咨询</view
            >
          </view>
        </view>
        <view class="flex-between m-t-10">
          <view class="font-14">联系人：</view>
          <view class="font-14">
            <view class="font-bold">{{ item.contactPerson }}</view>
          </view>
        </view>
        <view class="flex-between m-t-10">
          <view class="font-14">联系电话：</view>
          <view class="font-14">
            <view class="font-bold">{{ item.contactPhone }}</view>
          </view>
        </view>
        <view class="flex-between m-t-10">
          <view class="font-14">描述：</view>
          <view class="font-14">
            <view class="font-bold">{{ item.description }}</view>
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
      type: null,
      list: [],
      current: 0,
      items: ["全部", "进行中", "已完成"],
    };
  },
  onShow() {
    this.getList();
  },
  methods: {
    back() {
      uni.navigateBack();
    },
    onClickItem(value) {
      this.type = value.currentIndex;
      this.getList();
    },
    getList() {
      const p = {
        userId: uni.getStorageSync("userId"),
        status: this.type,
      };
      this.$request.get("/rest/report-repair/list", p).then(
        (res) => {
          this.list = res.data.data.map((item) => {
            item.createdTime = dayjs(item.createdTime).format("YYYY-MM-DD HH:mm");
            return item;
          });
        },
        (err) => {
          console.log(err);
        }
      );
    },
    goPage(item) {
      uni.setStorageSync("reportRepairsId", item.reportRepairsId);
      uni.navigateTo({
        url: `/pages/page/faultRepairReportDetails`,
      });
    },
    addFaultRepairReport() {
      uni.navigateTo({
        url: `/pages/page/addFaultRepairReport`,
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
