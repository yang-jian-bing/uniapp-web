<template>
  <view class="home-box" style="background-size: 100% 27%">
    <view
      class="header-min-box "
      style="padding-top: 60px; padding-bottom: 5px;"
    >
      <uni-search-bar placeholder="搜索" radius="100" bgColor="#fff" @confirm="search" />
    </view>
    <view class="msg-box">
      <view v-for="(item, index) of list" class="b-g-f" :key="index">
        <view
          class="flex p-t-0"
          :class="[index === list.length - 1 ? 'p-l-10 p-r-10' : 'p-10']"
        >
          <view class="msg-img">
            <image
              src="../../../assets/img/login/login-logo.png"
              class="home-nav"
              alt=""
              srcset=""
            />
          </view>
          <view
            class="msg-content"
            :class="[index === list.length - 1 ? 'p-b-5' : 'b-b p-b-15']"
          >
            <view class="flex-between">
              <view @click="details" class="font-14">
                {{ item.submitPersonUserName }}
              </view>
              <view class="min-title">
                {{ item.sendTime }}
              </view>
            </view>
            <view class="m-t-5 min-title">
              {{ item.title }}
            </view>
          </view>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      value: "",
      loading: false,
      finished: false,
      total: 1,
      list: [
        {
          sendTime: "12:12",
          submitPersonUserName: "公告通知",
          title: "2023年8月5号幼儿园开始报名。",
        },
        {
          sendTime: "7月30日",
          submitPersonUserName: "付款提醒",
          title: "付款成功",
        },
        {
          sendTime: "7月29日",
          submitPersonUserName: "安全通告",
          title: "根据气象部门预报，明天有可能会有大暴雨",
        },
        {
          sendTime: "6月23日",
          submitPersonUserName: "维修请求",
          title: "单元门口照明灯不亮，请物业维修",
        },
        {
          sendTime: "2022年12月11日",
          submitPersonUserName: "反馈调查",
          title: "请对物业的服务进行评价",
        },
        
      ],
      refreshing: false,
      page: 1,
      limit: 10,
      isFrist: true,
      type: "1",
      processInstanceStatus: "",
      businessTotal: 0,
      systemTotal: 0,
    };
  },
  created() {},
  mounted() {},
  methods: {
    search() {},
  },
};
</script>

<style scoped lang="scss">
.header-line {
  border-radius: 10px 10px 0 0;
  background: #fff;
  overflow: hidden;
  height: 10px;
  width: 100vw;
  border: none;
}
.header-min-box {
  overflow: hidden;
}
.msg-box{
  padding-top: 10px;
  border-radius: 10px;
  overflow: hidden;
  background: #fff;
}
.msg-img {
  border: none;
  flex-shrink: 0;
  border-radius: 6px;
  overflow: hidden;
  width: 50px;
  height: 50px;
  margin-right: 10px;

  image {
    width: 50px;
    height: 50px;
  }
}

.msg-content {
  flex-shrink: 0;
  width: calc(100vw - 70px);
  padding-right: 10px;
  padding-top: 2px;
  .min-title {
    color: #666;
    font-size: 12px;
  }
}
</style>
