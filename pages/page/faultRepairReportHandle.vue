<!--
 * @Author: YangJianBing
 * @Date: 2023-05-07 22:24:47
 * @LastEditTime: 2023-05-07 23:08:06
 * @LastEditors: YangJianBing
 * @Description: 
 * @FilePath: \app\pages\page\faultRepairReportHandle.vue
-->
<!--
 * @Author: YangJianBing
 * @Date: 2021-10-23 11:35:24
 * @LastEditTime: 2023-05-07 22:05:13
 * @LastEditors: YangJianBing
 * @Description: 待缴费详情
 * @FilePath: \app\pages\page\addFaultRepairReport.vue
-->
<template>
  <view class="page">
    <uni-nav-bar
      title="报事报修处理"
      :fixed="true"
      :statusBar="true"
      color="#ffffff"
      background-color="#dd2c34"
      @clickLeft="back"
      left-icon="left"
    ></uni-nav-bar>
    <view class="p-10 b-g-f m-10">
      <uni-forms ref="baseForm" :rules="rules" :modelValue="obj">
        <uni-forms-item label="描述" required name="description">
          <uni-easyinput
            type="textarea"
            v-model="obj.description"
            placeholder="请输入"
          />
        </uni-forms-item>
        <uni-forms-item label="照片">
          <uni-file-picker
            limit="9"
            v-model="obj.images"
            title="最多选择9张图片"
          ></uni-file-picker>
        </uni-forms-item>
      </uni-forms>
    </view>
    <view class="m-t-20 m-b-20 m-10 text-center">
      <button type="warn" @click="submitData('baseForm')">提交</button>
    </view>
  </view>
</template>

<script>
import dayjs from "dayjs";
export default {
  components: {},
  data() {
    return {
      columns: [],
      selectedIndex: 0,
      duration: null, // 缴费时长
      obj: {
        ...uni.getStorageSync("currentHouse"),
        images: []
      },
      rules: {
        description: {
          rules: [
            {
              required: true,
              errorMessage: "不能为空",
            },
          ],
        },
      },
    };
  },
  methods: {
    back() {
      uni.navigateBack();
    },
    submitData(ref) {
      const p = {
        ...this.obj,
        reportRepairsId: uni.getStorageSync("reportRepairsId"),
        contactPhone: uni.getStorageSync("phoneNum"),
      };
      uni.showLoading({
        title: "处理中",
      });
      this.$refs[ref]
        .validate()
        .then((res) => {
          this.$request
            .post("/rest/report-repairs/update-report-repairs", p)
            .then(
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
        })
        .catch((err) => {
          uni.hideLoading();
          console.log("err", err);
        });
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
