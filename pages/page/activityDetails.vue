<!--
 * @Author: YangJianBing
 * @Date: 2021-10-23 11:35:24
 * @LastEditTime: 2023-05-20 09:51:23
 * @LastEditors: YangJianBing
 * @Description: 待缴费详情
 * @FilePath: /uniapp-web/pages/page/activityDetails.vue
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
          <view class="font-14">联系方式</view>
          <view class="font-14">
            <view class="font-bold">{{ obj.contactPhone }}</view>
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
            <view class="font-bold">
              <image
                class="m-l-10"
                style="width: 60px; height: 60px; background-color: #eeeeee"
                v-for="img in obj.images"
                @click="previewImg(img.url)"
                :key="img.url"
                :src="img.url"
              ></image
            ></view>
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
          v-for="item in obj.participantList"
        >
          <view class="font-14">姓名：{{ item.contactPhone }}</view>
          <view class="font-14">
            加入时间：{{ formatTime(item.participateTime) }}
          </view>
        </view>
      </view>
    </view>
    <view class="m-t-20 m-b-20 m-10 text-center">
      <button type="warn" @click="join()">我要加入</button>
    </view>
	<uni-popup ref="alertDialog" type="dialog">
					<uni-popup-dialog type="warn" cancelText="取消" confirmText="确定" title="提示" content="你确定要加入" @confirm="confirmJoin"
						></uni-popup-dialog>
				</uni-popup>
  </view>
</template>

<script>
import dayjs from "dayjs";
export default {
  components: {},
  data() {
    return {
      obj: {
        title: "", //房屋
        location: "",
        createdPerson: "", // BX:报修，TX:投诉，ZX:咨询
        createdTime: "", // 联系人
        startTime: "", // 联系电话
        endTime: "", //描述
        description: "", //照片
        images: [],
        participantList: [],
      },
    };
  },
  created() {
    this.getDetails();
  },
  methods: {
    formatTime(time) {
      return dayjs(time).format("YYYY-MM-DD HH:mm");
    },
    previewImg(url) {
      uni.previewImage({
        current: 0,
        urls: [url],
      });
    },
    getDetails() {
      this.$request
        .get("/rest/activity/get-activity-details", {
          activeId: uni.getStorageSync("activeId"),
        })
        .then(
          (res) => {
            const data = res.data.data;
            data.createdTime = dayjs(data.createdTime).format(
              "YYYY-MM-DD HH:ss"
            );
            data.startTime = dayjs(data.startTime).format("YYYY-MM-DD");
            data.endTime = dayjs(data.endTime).format("YYYY-MM-DD");
            data.startTime = dayjs(data.startTime).format("YYYY-MM-DD");
            this.obj = data;
          },
          (err) => {
            console.log(err);
          }
        );
    },
    submitData(ref) {
      const p = {
        activeId: uni.getStorageSync("activeId"),
        phoneNum: uni.getStorageSync("phoneNum"),
      };
      uni.showLoading({
        title: "处理中",
      });
      this.$request.post("/rest/activity/update-activity", p).then(
        (res) => {
          uni.showLoading({
            title: "提交成功",
          });
          uni.hideLoading();
          setTimeout(() => {
            uni.navigateBack();
          }, 1000);
        },
        (err) => {
          uni.hideLoading();
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
