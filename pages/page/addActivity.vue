
<template>
  <view class="page">
    <uni-nav-bar
      title="新增活动"
      :fixed="true"
      :statusBar="true"
      color="#ffffff"
      background-color="#dd2c34"
      @clickLeft="back"
      left-icon="left"
    ></uni-nav-bar>
    <view class="p-10 b-g-f m-10">
      <uni-forms ref="baseForm" label-width="80px" :rules="rules" :modelValue="obj">
        <uni-forms-item label="标题" required name="title">
          <uni-easyinput v-model="obj.title" placeholder="请输入" />
        </uni-forms-item>
        <uni-forms-item label="地点" required name="location">
          <uni-easyinput v-model="obj.location" placeholder="请输入" />
        </uni-forms-item>
        <uni-forms-item label="开始时间" required name="startTime">
          <uni-datetime-picker type="datetime" return-type="timestamp" v-model="obj.startTime"/>
        </uni-forms-item>
        <uni-forms-item label="结束时间" required name="endTime">
          <uni-datetime-picker type="datetime" return-type="timestamp" v-model="obj.endTime"/>
        </uni-forms-item>
        <uni-forms-item label="联系电话" required name="contactPhone">
          <uni-easyinput v-model="obj.contactPhone" placeholder="请输入" />
        </uni-forms-item>
        <uni-forms-item label="简介" required name="description">
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
        images: [],
        checkSum: "starlab",
      },
      rules: {
        title: {
          rules: [
            {
              required: true,
              errorMessage: "不能为空",
            },
          ],
        },
        location: {
          rules: [
            {
              required: true,
              errorMessage: "不能为空",
            },
          ],
        },
        startTime: {
          rules: [
            {
              required: true,
              errorMessage: "不能为空",
            },
          ],
        },
        endTime: {
          rules: [
            {
              required: true,
              errorMessage: "不能为空",
            },
          ],
        },
        description: {
          rules: [
            {
              required: true,
              errorMessage: "不能为空",
            },
          ],
        },
        contactPhone: {
          rules: [
            {
              required: true,
              errorMessage: "不能为空",
            },
            {
              format: "number",
              errorMessage: "只能输入数字",
            },
          ],
        },
      },
    };
  },
  created() {},
  methods: {
    back() {
      uni.navigateBack();
    },

    submitData(ref) {
      const p = {
        ...this.obj,
      };
      uni.showLoading({
        title: "新增中",
      });
      this.$refs[ref]
        .validate()
        .then((res) => {
          console.log("success", res);
          this.$request.post("/rest/activity/create-activity", p).then(
            (res) => {
              uni.showLoading({
                title: "新增成功",
              });
              uni.hideLoading();
              uni.navigateBack();
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
