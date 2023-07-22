<template>
  <view class="myConter">
    <view class="header-min-box"> </view>

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
    <view
      class="p-15 b-b"
      v-for="(item, index) of list"
      :key="index"
      @click="toPage(item.page)"
    >
      <!-- 使用 title 插槽来自定义标题 -->
      <view class="flex-between">
        <view class="flex align-items">
          <view class="col-1b1b font-14">
            {{ item.text }}
          </view>
        </view>
        <view>
          <view class="icon iconfont icon-arrow-right font-20"></view>
        </view>
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
      list: [
        {
          text: "所有活动",
          page: "activityList",
          icon: require("@/assets/img/personalIcon/htgl.png"),
        },
        {
          text: "我参与的活动",
          page: "activityList",
          icon: require("@/assets/img/personalIcon/lsfpgl.png"),
        },
        {
          text: "我发起的活动",
          page: "activityList",
          icon: require("@/assets/img/personalIcon/rjsj.png"),
        },
      ],
    };
  },
  created() {},
  methods: {
    toPage(page) {
      uni.navigateTo({
        // 关闭所有页面，打开首页
        url: `/pages/page/${page}`,
      });
    }
  },
};
</script>

<style lang="scss" scoped>
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
</style>
