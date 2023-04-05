<!--
 * @Author: YangJianBing
 * @Date: 2021-10-23 11:32:53
 * @LastEditTime: 2023-04-05 15:12:07
 * @LastEditors: YangJianBing
 * @Description: 待缴费列表
 * @FilePath: \app\pages\page\activityList.vue
-->
<template>
  <view class="page">
    <uni-nav-bar
      title="活动列表"
      :fixed="true"
      :statusBar="true"
      color="#ffffff"
      rightText="新增"
      background-color="#dd2c34"
      @clickLeft="back"
      @clickRight="addActivity"
      left-icon="left"
    ></uni-nav-bar>
    <view class="pay-list-box p-10" v-if="list.length > 0">
      <view
        class="pay-list-item"
        @click="goPage(item)"
        v-for="(item, index) in list"
        :key="index"
      >
        <view class="flex-between m-t-10">
          <view class="font-14">活动标题：</view>
          <view class="font-14">
            <view class="font-bold">{{ item.title }}</view>
          </view>
        </view>
        <view class="flex-between m-t-10">
          <view class="font-14">活动地点：</view>
          <view class="font-14">
            <view class="font-bold">{{ item.location }}</view>
          </view>
        </view>
        
        <view class="flex-between m-t-10">
          <view class="font-14">发起人：</view>
          <view class="font-14">
            <view class="font-bold">{{ item.createdPerson }}</view>
          </view>
        </view>
        <view class="flex-between m-t-10">
          <view class="font-14">创建时间：</view>
          <view class="font-14">
            <view class="font-bold">{{ item.createdTime }}</view>
          </view>
        </view>
        <view class="flex-between m-t-10">
          <view class="font-14">活动开始时间：</view>
          <view class="font-14">
            <view class="font-bold">{{ item.startTime }}</view>
          </view>
        </view>
        <view class="flex-between m-t-10">
          <view class="font-14">活动结束时间：</view>
          <view class="font-14">
            <view class="font-bold">{{ item.endTime }}</view>
          </view>
        </view>
        <view class="flex-between m-t-10">
          <view class="font-14">活动简介：</view>
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
      list: [
        {
          title: "跑步", //房屋
          location: "篮球场", //房屋
          createdPerson: "张三", // BX:报修，TX:投诉，ZX:咨询
          createdTime: "2023-04-05 12:12", // 联系人
          startTime: "2023-04-06 12:12", // 联系电话
          endTime: "2023-04-08 12:12", //描述
          description: '体育训练中心，晚上跑步一小时', //照片
          images: []
        },
        {
          title: "羽毛球", //房屋
          location: "篮球场", //房屋
          createdPerson: "张三", // BX:报修，TX:投诉，ZX:咨询
          createdTime: "2023-04-05 12:12", // 联系人
          startTime: "2023-04-06 12:12", // 联系电话
          endTime: "2023-04-08 12:12", //描述
          description: 'xx俱乐部，晚上八点开始', //照片
          images: []
        },
      ],
    };
  },
  created() {
    // this.getList();
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
      this.$request.get("/rest/user/houses", p).then(
        (res) => {
          this.list = res.data.houses.map((item) => {
            item.time = dayjs(item.time).format("YYYY-MM-DD HH:ss:mm");
            item.beginTime = dayjs(item.beginTime).format("YYYY-MM-DD");
            item.endTime = dayjs(item.endTime).format("YYYY-MM-DD");
            return item;
          });
        },
        (err) => {
          console.log(err);
        }
      );
    },
    goPage(item) {
      uni.setStorageSync("activityDetails", item);
      uni.navigateTo({
        url: `/pages/page/activityDetails`,
      });
    },
    addActivity() {
      uni.navigateTo({
        url: `/pages/page/addActivity`,
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
