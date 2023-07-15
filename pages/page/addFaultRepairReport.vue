<template>
  <view class="page">
    <uni-nav-bar
      title="新增报事报修"
      :fixed="true"
      :statusBar="true"
      color="#ffffff"
      background-color="#dd2c34"
      @clickLeft="back"
      left-icon="left"
    ></uni-nav-bar>
    <view class="p-10 b-g-f m-10">
      <uni-forms ref="baseForm" :rules="rules" :modelValue="obj">
        <uni-forms-item label="房屋" required name="address">
          <picker
            @change="houseChange"
            :value="selectedIndex"
            range-key="address"
            :range="columns"
          >
            <uni-easyinput v-model="obj.address" placeholder="请选择房屋" />
          </picker>
        </uni-forms-item>
        <uni-forms-item label="类型" required name="serviceType">
          <uni-data-checkbox
            v-model="obj.serviceType"
            :localdata="serviceTypeList"
          />
        </uni-forms-item>
        <uni-forms-item label="联系人" required name="contactPerson">
          <uni-easyinput v-model="obj.contactPerson" placeholder="请输入" />
        </uni-forms-item>
        <uni-forms-item label="手机号" required name="contactPhone">
          <uni-easyinput v-model="obj.contactPhone" placeholder="请输入" />
        </uni-forms-item>
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
        images: [],
        checkSum: "starlab"
      },
      rules: {
        address: {
          rules: [
            {
              required: true,
              errorMessage: "不能为空",
            },
          ],
        },
        serviceType: {
          rules: [
            {
              required: true,
              errorMessage: "不能为空",
            },
          ],
        },
        contactPerson: {
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
      serviceTypeList: [
        {
          text: "报修",
          value: "BX",
        },
        {
          text: "投诉",
          value: "TS",
        },
        {
          text: "咨询",
          value: "ZX",
        },
      ],
    };
  },
  created() {
    this.getHouses();
  },
  methods: {
    back() {
      uni.navigateBack();
    },
    houseChange(value) {
      this.obj = Object.assign(this.obj, this.columns[value.detail.value]);
      setTimeout(() => {
        this.$set(this.obj, "address", this.obj.address);
      }, 100);
    },
    getHouses() {
      this.$request
        .get("/rest/user/my-house?checkSum=starlab", {
          checkSum: "starlab",
          phone: uni.getStorageSync("phoneNum"),
        })
        .then(
          (res) => {
            this.columns = res.data.data.map((item) => {
              item.address = `${item.communityName}${item.building}号楼${item.unit}单元${item.floor}${item.roomNo}`;
              return item;
            });
            if(this.columns.length>0){
              this.obj = this.columns[0]
            }
          },
          (err) => {
            console.log(err);
          }
        );
    },

    submitData(ref) {
      const p = {
        ...this.obj,
      };
      delete p._id
      uni.showLoading({
        title: "加载中",
      });
      this.$refs[ref]
        .validate()
        .then((res) => {
          this.$request.post("/rest/report-repair/create", p).then(
            (res) => {
              uni.showLoading({
                title: "提交成功",
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
