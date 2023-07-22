<template>
  <view class="page home-box">
    <view class="header-min-box"> </view>
    <view class="header-box">
      <view class="flex-between p-l-15 p-r-15">
        <view>
          <image
            src="../../../assets/img/home-icon/fz.png"
            class="h-30"
            alt=""
            srcset=""
          />
        </view>
        <view class="home-search" @click="goSearch">
          <view class="search-content">搜索</view>
        </view>
        <view>
          <image
            src="../../../assets/img/home-icon/ld.png"
            class="h-30"
            alt=""
            srcset=""
          />
        </view>
      </view>

      <view class="flex-between p-l-20 p-r-20 weather-box">
        <view class="flex">
          <view class="temperature">{{ weatherInfo.temperature }}</view>
          <view class="font-20 p-t-15 m-l-5">°C</view>
          <view class="m-l-10">
            <view class="font-20 p-t-15">{{ weatherInfo.weather }}</view>
            <view>
              <picker
                @change="houseChange"
                :value="selectedIndex"
                range-key="address"
                :range="columns"
              >
                <view>{{ currentHouse.address }}</view>
              </picker></view
            >
          </view>
        </view>
        <view>
          <image
            :src="weatherInfo.weather_pic"
            class="weather-img"
            alt=""
            srcset=""
          />
        </view>
      </view>

      <view class="flex m-t-10 p-b-20">
        <view class="min-icon" @click="goPage('myHouse')">
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
        <view class="min-icon" @click="phone">
          <view class="text-center">
            <image
              src="../../../assets/img/home-icon/kf.png"
              class="home-nav"
              alt=""
              srcset=""
            />
          </view>
          <view class="min-title">客服</view>
        </view>
        <view class="min-icon" @click="goPage('paymentType')">
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
        <view class="min-icon" @click="goPage('faultRepairReport')">
          <view class="text-center">
            <image
              src="../../../assets/img/home-icon/gzbx.png"
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
        @click="goPage('constructionPage')"
        v-for="(item, index) in moduleList"
      >
        <view class="module-icon-img">
          <image :src="item.imgUrl" alt="" />
        </view>
        <view class="module-title">{{ item.name }}</view>
      </view>
    </view>
    <view class="p-10">
      <image
        src="../../../assets/img/home-icon/gg.png"
        style="width: 100%;"
        alt=""
        srcset=""
      />
    </view>
  </view>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      showPicker: true,
      selectedIndex: 0,
      selectId: "",
      columns: [],
      currentHouse: {},
      index: 1,
      weatherInfo: {},
      moduleList: [
        {
          name: "杂活",
          id: "",
          imgUrl: require("../../../assets/img/home/zh.png"),
          icon: "#icon-luntan",
        },

        {
          name: "跑腿",
          id: "",
          imgUrl: require("../../../assets/img/home/pt.png"),
          icon: "#icon-fushi",
        },

        {
          name: "社区送菜",
          id: "",
          imgUrl: require("../../../assets/img/home/sqsc.png"),
          icon: "#icon-fushi",
        },
        {
          name: "海鲜市场",
          id: "",
          imgUrl: require("../../../assets/img/home/hxsc.png"),
          icon: "#icon-fushi",
        },
        {
          name: "家政服务",
          id: "",
          imgUrl: require("../../../assets/img/home/jzfw.png"),
          icon: "#icon-fushi",
        },
        {
          name: "干洗",
          id: "",
          imgUrl: require("../../../assets/img/home/gx.png"),
          icon: "#icon-wuliu",
        },
        {
          name: "接送娃",
          id: "",
          imgUrl: require("../../../assets/img/home/jsw.png"),
          icon: "#icon-wuliu",
        },
        {
          name: "托幼服务",
          id: "",
          imgUrl: require("../../../assets/img/home/tyfw.png"),
          icon: "#icon-jiaju",
        },
        {
          name: "家教",
          id: "",
          imgUrl: require("../../../assets/img/home/jj.png"),
          icon: "#icon-zengsong",
        },
        {
          name: "陪护",
          id: "",
          imgUrl: require("../../../assets/img/home/ph.png"),
          icon: "#icon-zhanghaoguanli",
        },
        {
          name: "代办汽车保养",
          id: "",
          imgUrl: require("../../../assets/img/home/dbqcby.png"),
          icon: "#icon-huodong",
        },
        {
          name: "代办事故处理",
          id: "",
          imgUrl: require("../../../assets/img/home/dbsgcl.png"),
          icon: "#icon-huodong",
        },
        {
          name: "代办验车",
          id: "",
          imgUrl: require("../../../assets/img/home/dbyc.png"),
          icon: "#icon-jiaoyu",
        },
        {
          name: "极简订制门窗家具",
          id: "",
          imgUrl: require("../../../assets/img/home/jjdzmcjj.png"),
          icon: "#icon-wupinshenqing",
        },
        {
          name: "极简家装",
          id: "",
          imgUrl: require("../../../assets/img/home/jjjz.png"),
          icon: "#icon-peisong",
        },
        {
          name: "上门医疗",
          id: "",
          imgUrl: require("../../../assets/img/home/smyl.png"),
          icon: "#icon-qiche",
        },
        {
          name: "旧物",
          id: "",
          imgUrl: require("../../../assets/img/home/jw.png"),
          icon: "#icon-luntan",
        },
        {
          name: "约饭AA",
          id: "",
          imgUrl: require("../../../assets/img/home/yf.png"),
          icon: "#icon-luntan",
        },
        {
          name: "约电影",
          id: "",
          imgUrl: require("../../../assets/img/home/ydy.png"),
          icon: "#icon-luntan",
        },
        {
          name: "约图书馆",
          id: "",
          imgUrl: require("../../../assets/img/home/ytsg.png"),
          icon: "#icon-luntan",
        },
        {
          name: "约广场舞",
          id: "",
          imgUrl: require("../../../assets/img/home/ygcw.png"),
          icon: "#icon-luntan",
        },
        {
          name: "约交谊舞",
          id: "",
          imgUrl: require("../../../assets/img/home/yjjw.png"),
          icon: "#icon-luntan",
        },
        {
          name: "约足球",
          id: "",
          imgUrl: require("../../../assets/img/home/yzq.png"),
          icon: "#icon-luntan",
        },
        {
          name: "约篮球",
          id: "",
          imgUrl: require("../../../assets/img/home/ylq.png"),
          icon: "#icon-luntan",
        },
        {
          name: "约羽毛球",
          id: "",
          imgUrl: require("../../../assets/img/home/yymq.png"),
          icon: "#icon-luntan",
        },
        {
          name: "约跑步",
          id: "",
          imgUrl: require("../../../assets/img/home/ypb.png"),
          icon: "#icon-luntan",
        },
        {
          name: "约逛公园",
          id: "",
          imgUrl: require("../../../assets/img/home/yggy.png"),
          icon: "#icon-luntan",
        },
        {
          name: "约爬山",
          id: "",
          imgUrl: require("../../../assets/img/home/yps.png"),
          icon: "#icon-luntan",
        },
        {
          name: "约溜娃",
          id: "",
          imgUrl: require("../../../assets/img/home/ylw.png"),
          icon: "#icon-luntan",
        },
        {
          name: "约自由行",
          id: "",
          imgUrl: require("../../../assets/img/home/yzyx.png"),
          icon: "#icon-luntan",
        },
        {
          name: "约自驾游",
          id: "",
          imgUrl: require("../../../assets/img/home/yzjy.png"),
          icon: "#icon-luntan",
        },
        {
          name: "社区DIY团队游",
          id: "",
          imgUrl: require("../../../assets/img/home/qqtty.png"),
          icon: "#icon-luntan",
        },
        {
          name: "七嘴八舌",
          id: "",
          imgUrl: require("../../../assets/img/home/qzbs.png"),
          icon: "#icon-luntan",
        },
      ],
    };
  },
  created() {
    this.getHouses();
    this.getWeather();
  },
  methods: {
    getWeather() {
      const url = "http://ali-weather.showapi.com/area-to-weather";
      uni.request({
        url, // 请求的地址
        method: "GET", // 请求方法
        data: {
          area: "雁塔区",
        },
        header: {
          Authorization: "APPCODE 9cd390c54ccf414ca79eb21a0084bf59",
        },
        success: (res) => {
          // 请求成功时的处理
          console.log(res.data);
          this.weatherInfo = res.data.showapi_res_body.now;
        },
        fail: (err) => {
          // 请求失败时的处理
          console.error(err);
        },
      });
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
            this.currentHouse = this.columns[0];
            uni.setStorageSync("currentHouse", this.columns[0]);
          },
          (err) => {
            console.log(err);
          }
        );
    },
    phone() {
      plus.device.dial("18211129003", true);
    },
    goPage(page) {
      uni.navigateTo({
        url: `/pages/page/${page}`,
      });
    },
    goSearch(page) {
      uni.navigateTo({
        url: `/pages/page/search`,
      });
    },
    houseChange(value) {
      this.selectedIndex = value.detail.value;
      this.currentHouse = this.columns[this.selectedIndex];
      uni.setStorageSync("currentHouse", this.currentHouse);
    },
  },
};
</script>

<style scoped lang="scss">

.weather-box {
  color: #fff;
  margin-top: 10px;
  .temperature {
    font-size: 60px;
    font-weight: bold;
  }
  .weather-img {
    height: 50px;
    width: 50px;
    margin-top: 15px;
  }
}
.h-30 {
  height: 32px;
  width: 32px;
}
.home-nav {
  width: 40px;
  height: 40px;
  margin-top: 15px;
}
.home-search {
  height: 32px;
  line-height: 32px;
  border: solid 2px #fff;
  border-radius: 16px;
  padding: 1px 5px;
  width: calc(100vw - 120px);
  .search-content {
    height: 26px;
    line-height: 26px;
    color: #eee;
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
}
.module-icon {
  width: 20%;
  text-align: center;
  background: #fff;
  padding-bottom: 20px;
}
.module-icon-img {
  image {
    margin-top: 10px;
    width: 40px;
    height: 40px;
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
