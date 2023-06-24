
<template>
  <view class="page">
    <uni-nav-bar
      title="报事报修详情"
      :fixed="true"
      :statusBar="true"
      color="#ffffff"
      background-color="#dd2c34"
      @clickLeft="back"
      left-icon="left"
    ></uni-nav-bar>
    <view class="font-16 font-bold p-5 m-t-10 title-left m-l-10"
      >报事报修详情</view
    >
    <view class="p-10 b-g-f m-10">
      <view>
        <view class="flex-between">
          <view class="font-14">房屋：</view>
          <view class="font-14">
            <view class="font-bold">{{ obj.address }}</view>
          </view>
        </view>
        <view class="flex-between m-t-20">
          <view class="font-14">创建时间：</view>
          <view class="font-14">
            <view class="font-bold">{{ obj.createdTime }}</view>
          </view>
        </view>
        <view class="flex-between m-t-20">
          <view class="font-14">类型：</view>
          <view class="font-14">
            <view class="font-bold" v-if="obj.serviceType === 'BX'">报修</view>
            <view class="font-bold" v-else-if="obj.serviceType === 'TS'"
              >投诉</view
            >
            <view class="font-bold" v-else-if="obj.serviceType === 'ZX'"
              >咨询</view
            >
          </view>
        </view>
        <view class="flex-between m-t-20">
          <view class="font-14">联系人：</view>
          <view class="font-14">
            <view class="font-bold">{{ obj.contactPerson }}</view>
          </view>
        </view>
        <view class="flex-between m-t-20">
          <view class="font-14">联系电话：</view>
          <view class="font-14">
            <view class="font-bold">{{ obj.contactPhone }}</view>
          </view>
        </view>
        <view class="flex-between m-t-20">
          <view class="font-14">描述：</view>
          <view class="font-14">
            <view class="font-bold">{{ obj.description }}</view>
          </view>
        </view>
        <view class="flex-between m-t-20">
          <view class="font-14">照片</view>
          <view class="font-14">
            <view class="font-bold">
              <image
                style="width: 60px; height: 60px; background-color: #eeeeee"
                v-for="img in obj.images"
                @click="previewImg(img.url)"
                :key="img.url"
                :src="img.url"
              ></image>
            </view>
          </view>
        </view>
      </view>
    </view>
    <view
      class="font-16 font-bold p-5 m-t-10 title-left m-l-10"
      v-if="obj.status == 2"
      >处理结果</view
    >
    <view class="p-10 b-g-f m-10 m-b-0 p-b-0 p-b-5" v-if="obj.status == 2">
      <view class="flex-between">
        <view class="font-14">处理结果：</view>
        <view class="font-14">
          <view class="font-bold">{{
            obj.processingResult[0].description
          }}</view>
        </view>
      </view>
      <view class="flex-between m-t-20">
        <view class="font-14">处理时间：</view>
        <view class="font-14">
          <view class="font-bold">{{
            formatTime(obj.processingResult[0].processingTime)
          }}</view>
        </view>
      </view>
      <view class="flex-between m-t-20">
        <view class="font-14">处理人联系方式：</view>
        <view class="font-14">
          <view class="font-bold">{{
            obj.processingResult[0].contactPhone
          }}</view>
        </view>
      </view>
      <view class="flex-between m-t-20">
        <view class="font-14">照片：</view>
        <view class="font-14">
          <view class="font-bold">
            <image
              class="m-l-10"
              style="width: 60px; height: 60px; background-color: #eeeeee"
              v-for="img in obj.processingResult[0].images"
              @click="previewImg(img.url)"
              :key="img.url"
              :src="img.url"
            ></image>
          </view>
        </view>
      </view>
    </view>
    <view class="m-t-20 m-b-20 m-10 text-center" v-if="obj.status == 1">
      <button type="warn" @click="handle">我要处理</button>
    </view>
  </view>
</template>

<script>
import dayjs from "dayjs";
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
    previewImg(url) {
      uni.previewImage({
        current: 0,
        urls: [url],
      });
    },
    formatTime(time) {
      return dayjs(time).format("YYYY-MM-DD HH:mm");
    },
    getDetails() {
      this.$request
        .get("/rest/report-repairs/get-report-repairs-details", {
          checkSum: "starlab",
          reportRepairsId: uni.getStorageSync("reportRepairsId"),
        })
        .then(
          (res) => {
            const data = res.data.data;
            data.createdTime = dayjs(data.createdTime).format(
              "YYYY-MM-DD HH:mm"
            );
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
    handle() {
      uni.navigateTo({
        url: `/pages/page/faultRepairReportHandle`,
      });
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
