<template>
  <view class="page">
    <view class="header-min-box"> </view>
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
  </view>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      moduleList: [
        {
          name: "客服",
          id: "",
          imgUrl: require("../../../assets/img/home/kf.svg"),
          icon: "#icon-gonggao",
        },
        {
          name: "故障报修",
          id: "",
          imgUrl: require("../../../assets/img/home/gzbx.svg"),
          icon: "#icon-sousuo",
        },
        {
          name: "杂活",
          id: "",
          imgUrl: require("../../../assets/img/home/zh.svg"),
          icon: "#icon-luntan",
        },

        {
          name: "跑腿",
          id: "",
          imgUrl: require("../../../assets/img/home/pt.svg"),
          icon: "#icon-fushi",
        },

        {
          name: "社区送菜",
          id: "",
          imgUrl: require("../../../assets/img/home/sqsc.svg"),
          icon: "#icon-fushi",
        },
        {
          name: "海鲜市场",
          id: "",
          imgUrl: require("../../../assets/img/home/hxsc.svg"),
          icon: "#icon-fushi",
        },
        {
          name: "家政服务",
          id: "",
          imgUrl: require("../../../assets/img/home/jzfw.svg"),
          icon: "#icon-fushi",
        },
        {
          name: "干洗",
          id: "",
          imgUrl: require("../../../assets/img/home/gx.svg"),
          icon: "#icon-wuliu",
        },
        {
          name: "接送娃",
          id: "",
          imgUrl: require("../../../assets/img/home/jsw.svg"),
          icon: "#icon-wuliu",
        },
        {
          name: "托幼服务",
          id: "",
          imgUrl: require("../../../assets/img/home/tyfw.svg"),
          icon: "#icon-jiaju",
        },
        {
          name: "家教",
          id: "",
          imgUrl: require("../../../assets/img/home/jj.svg"),
          icon: "#icon-zengsong",
        },
        {
          name: "陪护",
          id: "",
          imgUrl: require("../../../assets/img/home/ph.svg"),
          icon: "#icon-zhanghaoguanli",
        },
        {
          name: "代办汽车保养",
          id: "",
          imgUrl: require("../../../assets/img/home/dbqcby.svg"),
          icon: "#icon-huodong",
        },
        {
          name: "代办事故处理",
          id: "",
          imgUrl: require("../../../assets/img/home/dbsgcl.svg"),
          icon: "#icon-huodong",
        },
        {
          name: "代办验车",
          id: "",
          imgUrl: require("../../../assets/img/home/dbyc.svg"),
          icon: "#icon-jiaoyu",
        },
        {
          name: "极简订制门窗家具",
          id: "",
          imgUrl: require("../../../assets/img/home/jjdzmcjj.svg"),
          icon: "#icon-wupinshenqing",
        },
        {
          name: "极简家装",
          id: "",
          imgUrl: require("../../../assets/img/home/jjjz.svg"),
          icon: "#icon-peisong",
        },
        {
          name: "上门医疗",
          id: "",
          imgUrl: require("../../../assets/img/home/smyl.svg"),
          icon: "#icon-qiche",
        },
        {
          name: "旧物",
          id: "",
          imgUrl: require("../../../assets/img/home/jw.svg"),
          icon: "#icon-luntan",
        },
        {
          name: "约饭AA",
          id: "",
          imgUrl: require("../../../assets/img/home/yf.svg"),
          icon: "#icon-luntan",
        },
        {
          name: "约电影",
          id: "",
          imgUrl: require("../../../assets/img/home/ydy.svg"),
          icon: "#icon-luntan",
        },
        {
          name: "约图书馆",
          id: "",
          imgUrl: require("../../../assets/img/home/ytsg.svg"),
          icon: "#icon-luntan",
        },
        {
          name: "约广场舞",
          id: "",
          imgUrl: require("../../../assets/img/home/ygcw.svg"),
          icon: "#icon-luntan",
        },
        {
          name: "约交谊舞",
          id: "",
          imgUrl: require("../../../assets/img/home/yjjw.svg"),
          icon: "#icon-luntan",
        },
        {
          name: "约足球",
          id: "",
          imgUrl: require("../../../assets/img/home/yzq.svg"),
          icon: "#icon-luntan",
        },
        {
          name: "约篮球",
          id: "",
          imgUrl: require("../../../assets/img/home/ylq.svg"),
          icon: "#icon-luntan",
        },
        {
          name: "约羽毛球",
          id: "",
          imgUrl: require("../../../assets/img/home/yymq.svg"),
          icon: "#icon-luntan",
        },
        {
          name: "约跑步",
          id: "",
          imgUrl: require("../../../assets/img/home/ypb.svg"),
          icon: "#icon-luntan",
        },
        {
          name: "约逛公园",
          id: "",
          imgUrl: require("../../../assets/img/home/yggy.svg"),
          icon: "#icon-luntan",
        },
        {
          name: "约爬山",
          id: "",
          imgUrl: require("../../../assets/img/home/yps.svg"),
          icon: "#icon-luntan",
        },
        {
          name: "约溜娃",
          id: "",
          imgUrl: require("../../../assets/img/home/ylw.svg"),
          icon: "#icon-luntan",
        },
        {
          name: "约自由行",
          id: "",
          imgUrl: require("../../../assets/img/home/yzyx.svg"),
          icon: "#icon-luntan",
        },
        {
          name: "约自驾游",
          id: "",
          imgUrl: require("../../../assets/img/home/yzjy.svg"),
          icon: "#icon-luntan",
        },
        {
          name: "社区DIY团队游",
          id: "",
          imgUrl: require("../../../assets/img/home/qqtty.svg"),
          icon: "#icon-luntan",
        },
        {
          name: "七嘴八舌",
          id: "",
          imgUrl: require("../../../assets/img/home/qzbs.svg"),
          icon: "#icon-luntan",
        },
      ],
    };
  },
};
</script>

<style scoped lang="scss">
.module-icon-img {
  image {
    margin-top: 10px;
    width: 40px;
    height: 40px;
  }
}
.main-box {
  display: flex;
  flex-wrap: wrap;
  background: #fff;
  padding-top: 20px;
}
.module-icon {
  width: 20%;
  text-align: center;
  padding-bottom: 20px;
}
.module-title {
  font-weight: bold;
}
.min-icon {
  width: 25%;
  .iconfont {
    font-size: 40px;
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
</style>
