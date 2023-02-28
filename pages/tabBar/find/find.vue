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
          imgUrl: require("../../../assets/img/home/jzfw.png"),
          icon: "#icon-luntan",
        },
        {
          name: "定制实木家具",
          id: "",
          imgUrl: require("../../../assets/img/home/dzsmjj.png"),
          icon: "#icon-luntan",
        },
        {
          name: "定制门窗",
          id: "",
          imgUrl: require("../../../assets/img/home/dzmc.png"),
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
