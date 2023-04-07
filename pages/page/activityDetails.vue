<!--
 * @Author: YangJianBing
 * @Date: 2021-10-23 11:35:24
 * @LastEditTime: 2023-04-07 09:08:03
 * @LastEditors: YangJianBing
 * @Description: 待缴费详情
 * @FilePath: \app\pages\page\activityDetails.vue
-->
<template>
  <view class="page">
    <uni-nav-bar
      title="活动详情"
      :fixed="true"
      :statusBar="true"
      color="#ffffff"
      background-color="#dd2c34"
      @clickLeft="back"
      left-icon="left"
    ></uni-nav-bar>
    <view class="font-16 font-bold p-5 m-t-10 title-left m-l-10">活动详情</view>
    <view class="p-10 b-g-f m-10">
      <view>
        <view class="flex-between">
          <view class="font-14">活动标题</view>
          <view class="font-14">
            <view class="font-bold">{{ obj.title }}</view>
          </view>
        </view>
        <view class="flex-between m-t-20">
          <view class="font-14">活动地点</view>
          <view class="font-14">
            <view class="font-bold">{{ obj.location }}</view>
          </view>
        </view>
        <view class="flex-between m-t-20">
          <view class="font-14">发起人</view>
          <view class="font-14">
            <view class="font-bold">{{ obj.createdPerson }}</view>
          </view>
        </view>
        <view class="flex-between m-t-20">
          <view class="font-14">创建时间</view>
          <view class="font-14">
            <view class="font-bold">{{ obj.createdTime }}</view>
          </view>
        </view>
        <view class="flex-between m-t-20">
          <view class="font-14">活动开始时间</view>
          <view class="font-14">
            <view class="font-bold">{{ obj.startTime }}</view>
          </view>
        </view>
        <view class="flex-between m-t-20">
          <view class="font-14">活动结束时间</view>
          <view class="font-14">
            <view class="font-bold">{{ obj.endTime }}</view>
          </view>
        </view>
        <view class="flex-between m-t-20">
          <view class="font-14">活动简介</view>
          <view class="font-14">
            <view class="font-bold">{{ obj.description }}</view>
          </view>
        </view>
        <view class="flex-between m-t-20">
          <view class="font-14">照片</view>
          <view class="font-14">
            <view class="font-bold">{{ obj.images }}</view>
          </view>
        </view>
      </view>
    </view>
    <view class="font-16 font-bold p-5 m-t-10 title-left m-l-10"
      >活动参与人</view
    >
    <view class="p-10 b-g-f m-10 m-b-0 p-b-0 p-b-5">
      <view>
        <view
          :key="item.name"
          class="flex-between m-b-20"
          v-for="item in obj.participantLIst"
        >
          <view class="font-14">姓名：{{ item.name }}</view>
          <view class="font-14"> 加入时间：{{ item.time }} </view>
        </view>
      </view>
    </view>
    <view class="m-t-20 m-b-20 m-10 text-center">
      <button type="warn" @click="submitData('baseForm')">我要加入</button>
    </view>
  </view>
</template>

<script>
import dayjs from "dayjs";
export default {
  components: {},
  data() {
    return {
      obj: {
        title: "羽毛球", //房屋
        location: "篮球场",
        createdPerson: "张三", // BX:报修，TX:投诉，ZX:咨询
        createdTime: "2023-04-05 12:12", // 联系人
        startTime: "2023-04-06 12:12", // 联系电话
        endTime: "2023-04-08 12:12", //描述
        description: "xx俱乐部，晚上八点开始", //照片
        images: [],
        participantLIst: [
          {
            name: "张三",
            time: "2023-04-03",
          },
          {
            name: "李四",
            time: "2023-04-03",
          },
          {
            name: "王五",
            time: "2023-04-03",
          },
        ],
      },
    };
  },
  created() {
    this.getDetails();
  },
  methods: {
    getDetails() {
      this.$request
        .get("/rest/activity/get-activity-details?checkSum=starlab", {
          id: uni.getStorageSync("activityDetails")._id,
        })
        .then(
          (res) => {
            const data = res.data.data;
            data.time = dayjs(data.time).format("YYYY-MM-DD HH:ss:mm");
            data.beginTime = dayjs(data.beginTime).format("YYYY-MM-DD");
            data.endTime = dayjs(data.endTime).format("YYYY-MM-DD");
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
.title-left {
  border-left: solid 4px #f56c6c;
}
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
