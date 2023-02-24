<template>
  <view class="page">
    <view class="header-box">
      <view class="pageheaders">
        <view @click="showPicker = true">{{ currentHouse.address }}</view>
        <view>
          <image
            src="../../../assets/img/home-icon/sqtz.jpg"
            class="img-100"
            alt=""
            srcset=""
          />
          <image
            src="../../../assets/img/home-icon/dh.jpg"
            class="img-100 m-l-15"
            alt=""
            srcset=""
          />
        </view>
      </view>
      <view>
        <view class="home-search flex-between">
          <view class="search-content">物业</view>
          <view class="search-icon">搜索</view>
        </view>
        <!-- <van-search shape="round" placeholder="请输入搜索关键词" /> -->
      </view>
      <view class="flex m-t-10 p-b-20">
        <view class="min-icon">
          <view class="text-center">
            <image
              src="../../../assets/img/home-icon/wdfw.png"
              class="home-nav"
              alt=""
              srcset=""
            />
          </view>
          <view class="min-title">我的房屋</view>
        </view>
        <view class="min-icon">
          <view class="text-center">
            <image
              src="../../../assets/img/home-icon/wyfw.png"
              class="home-nav"
              alt=""
              srcset=""
            />
          </view>
          <view class="min-title">物业服务</view>
        </view>
        <view class="min-icon" @click="goPage('paymentTypePage')">
          <view class="text-center">
            <image
              src="../../../assets/img/home-icon/qjf.png"
              class="home-nav"
              alt=""
              srcset=""
            />
          </view>
          <view class="min-title">去缴费</view>
        </view>
        <view class="min-icon">
          <view class="text-center">
            <image
              src="../../../assets/img/home-icon/ggbx.png"
              class="home-nav"
              alt=""
              srcset=""
            />
          </view>
          <view class="min-title">故障报修</view>
        </view>
      </view>
    </view>
    <view class="main-box">
      <view
        class="module-icon"
        :key="index"
        v-for="(item, index) in moduleList"
      >
        <view class="module-icon-img">
          <image :src="item.imgUrl" alt="" />
        </view>
        <view class="module-title">{{ item.name }}</view>
      </view>
    </view>
    <!-- <van-popup v-model="showPicker" position="bottom">
      <van-picker
        required
        show-toolbar
        :columns="columns"
        value-key="address"
        @confirm="onConfirm"
        @cancel="showPicker = false"
      >
      </van-picker>
    </van-popup> -->
  </view>
</template>

<script>
// import { getAction } from "../../../utils/manage.js";
export default {
  components: {},
  data() {
    return {
      showPicker: false,
      selectName: "",
      selectId: "",
      columns: [
        {
          text: "缤纷南郡2号楼三单元1234",
          id: 12,
        },
        {
          text: "缤纷南郡2号楼四单元1233",
          id: 12,
        },
      ],
      currentHouse: {},
      index: 1,
      newsList: [
        {
          title: "求助",
          content: "本小区有没有可租的房子，联系电话：18787473843",
        },
        {
          title: "车位出租",
          content: "出租5号楼车位，价格面议，有意者联系18343434344",
        },
        {
          title: "活动",
          content: "双十一缴物业费送礼品",
        },
      ],
      list: [],
      moduleList: [
        {
          name: "社区通知",
          id: "",
          imgUrl: require("../../../assets/img/home/sqtz.png"),
          icon: "#icon-gonggao",
        },
        {
          name: "社区送菜",
          id: "",
          imgUrl: require("../../../assets/img/home/sqsc.png"),
          icon: "#icon-sousuo",
        },
        {
          name: "海鲜市场",
          id: "",
          imgUrl: require("../../../assets/img/home/hxsc.png"),
          icon: "#icon-fushi",
        },
        {
          name: "维修",
          id: "",
          imgUrl: require("../../../assets/img/home/wx.png"),
          icon: "#icon-wuliu",
        },
        {
          name: "干洗",
          id: "",
          imgUrl: require("../../../assets/img/home/gx.png"),
          icon: "#icon-wuliu",
        },
        {
          name: "代办汽车保养",
          id: "",
          imgUrl: require("../../../assets/img/home/dbqcby.png"),
          icon: "#icon-jiaju",
        },
        {
          name: "代办事故处理",
          id: "",
          imgUrl: require("../../../assets/img/home/dbsgcl.png"),
          icon: "#icon-zengsong",
        },
        {
          name: "代办验车",
          id: "",
          imgUrl: require("../../../assets/img/home/dbyc.png"),
          icon: "#icon-zhanghaoguanli",
        },
        {
          name: "陪护",
          id: "",
          imgUrl: require("../../../assets/img/home/ph.png"),
          icon: "#icon-huodong",
        },
        {
          name: "家政",
          id: "",
          imgUrl: require("../../../assets/img/home/jz.png"),
          icon: "#icon-huodong",
        },
        {
          name: "接送娃",
          id: "",
          imgUrl: require("../../../assets/img/home/jsw.png"),
          icon: "#icon-jiaoyu",
        },
        {
          name: "托儿服务",
          id: "",
          imgUrl: require("../../../assets/img/home/tefw.png"),
          icon: "#icon-wupinshenqing",
        },
        {
          name: "家教",
          id: "",
          imgUrl: require("../../../assets/img/home/jj.png"),
          icon: "#icon-peisong",
        },
        {
          name: "旧物",
          id: "",
          imgUrl: require("../../../assets/img/home/jw.png"),
          icon: "#icon-qiche",
        },
        {
          name: "论坛",
          id: "",
          imgUrl: require("../../../assets/img/home/lt.png"),
          icon: "#icon-luntan",
        },
        {
          name: "家装",
          id: "",
          imgUrl: require("../../../assets/img/home/jzfw.jpg"),
          icon: "#icon-luntan",
        },
        {
          name: "定制实木家具",
          id: "",
          imgUrl: require("../../../assets/img/home/dzsmjj.jpg"),
          icon: "#icon-luntan",
        },
        {
          name: "定制门窗",
          id: "",
          imgUrl: require("../../../assets/img/home/dzmc.jpg"),
          icon: "#icon-luntan",
        },
      ],
    };
  },
  created() {
    // this.getHouses();
  },
  methods: {
    getHouses() {
      getAction("/rest/user/houses?checkSum=starlab").then(
        (res) => {
          this.columns = res.houses;
          this.currentHouse = this.columns[0];
          uni.setStorageSync("currentHouse", JSON.stringify(this.columns[0]));
        },
        (err) => {
          console.log(err);
        }
      );
    },

    goPage(page) {
      this.$bridge.call(page);
    },
    onConfirm(value) {
      this.selectName = value;
      this.currentHouse = value;
      uni.setStorageSync("currentHouse", JSON.stringify(value));
      this.showPicker = false;
    },
  },
};
</script>

<style scoped lang="scss">
.home-nav{
  width: 40px;
  height: 40px;
  margin-top: 15px;
}
.home-search {
  height: 40px;
  line-height: 40px;
  border: solid 2px rgb(221, 44, 52);
  border-radius: 20px;
  margin: 10px;
  padding: 5px;
  .search-content {
    height: 26px;
    line-height: 26px;
    color: #999;
    padding-left: 10px;
  }
  .search-icon {
    height: 26px;
    line-height: 26px;
    background: rgb(221, 44, 52);
    border-radius: 13px;
    color: #fff;
    width: 50px;
    text-align: center;
  }
}
.img-100 {
  width: 20px;
  height: 20px;
}
.img-40 {
  width: 30px;
  height: 30px;
}
.header-box {
  //  background: #dd2c34;
  //  color: #fff;
}
.van-field__left-icon {
  background: rgb(221, 44, 52);
  padding: 0px 10px;
  border-radius: 12px;
  color: #fff;
}

.van-search .van-cell {
  padding: 3px;
}

.min-icon {
  width: 25%;
  .iconfont {
    font-size: 40px;
    color: #dd2c34;
  }
  .min-title {
    text-align: center;
    font-size: 13px;
    font-weight: 500;
  }
}
.svg-icon {
  width: 40px;
  height: 40px;
}
.banner {
  display: block;
  width: 100%;
}

.pageheaders {
  width: 93%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 10px;
  padding-top: 10px;
  font-size: 14px;
  font-weight: 600;
}
.main-box {
  display: flex;
  flex-wrap: wrap;
  background: #fff;
  margin: 10px;
}
.module-icon {
  width: 20%;
  text-align: center;
  background: #fff;
  padding-bottom: 20px;
}
.module-icon-img {
  image {
    width: 100px;
    height: 100px;
  }
}
.module-title {
  font-weight: bold;
}
.news-box {
  margin-top: 15px;
  padding: 5px;
  background: #ddd;
  .active {
    font-size: 18px;
    font-weight: bold;
  }
  .arrow {
    font-size: 20px;
  }
  .item-box {
    background: #fff;
    margin: 5px;
    margin-bottom: 10px;
    border-radius: 6px;
    overflow: hidden;
    img {
      width: 100% !important;
      height: 100% !important;
    }
  }
  .item-new {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .item-new {
    padding: 20px;
    border-bottom: solid 1px #eee;
  }
  .new-title {
    width: 100%;
    font-weight: bold;
    font-size: 14px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .new-content {
    width: 100%;
    font-size: 12px;
    margin-top: 5px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .w-80 {
    width: 80%;
  }
}
</style>
