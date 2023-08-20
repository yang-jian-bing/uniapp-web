<template>
  <view class="home-box" style="background-size: 100% 35%">
    <view
      class="header-min-box msg-search-box"
      style="padding-top: 60px; padding-bottom: 5px;"
    >
      <uni-search-bar placeholder="搜索" radius="100" bgColor="none" @confirm="search" />
      <view class="p-10 font-16 font-bold" style="color: #fff;font-size: 20px;">消息({{ list.length }})</view>
    </view>
    <view class="msg-box">
      <view v-for="(item, index) of list" class="b-g-f" :key="index">
        <view
          class="flex p-t-0"
          :class="[index === list.length - 1 ? 'p-l-10 p-r-10' : 'p-10']"
        >
          <view class="msg-img">
            <image
              src="../../../assets/img/msg/jf.png"
              class="home-nav"
              v-if="item.type === 'jf'"
              alt=""
              srcset=""
            />
            <image
              src="../../../assets/img/msg/db.png"
              class="home-nav"
              v-else-if="item.type === 'db'"
              alt=""
              srcset=""
            />
            <image
              src="../../../assets/img/msg/gg.png"
              class="home-nav"
              v-else
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
          type: 'gg'//公告
        },
        {
          sendTime: "7月30日",
          submitPersonUserName: "付款提醒",
          title: "付款成功",
          type: 'jf'
        },
        {
          sendTime: "7月29日",
          submitPersonUserName: "安全通告",
          title: "根据气象部门预报，明天有可能会有大暴雨",
          type: 'gg'
        },
        {
          sendTime: "6月23日",
          submitPersonUserName: "维修请求",
          title: "单元门口照明灯不亮，请物业维修",
          type: 'db'
        },
        {
          sendTime: "2022年12月11日",
          submitPersonUserName: "反馈调查",
          title: "请对物业的服务进行评价",
          type: 'gg'
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
  padding-bottom: 10px;
}
.msg-img {
  border: none;
  flex-shrink: 0;
  border-radius: 6px;
  overflow: hidden;
  width: 50px;
  height: 50px;
  margin-right: 10px;
  padding: 8px;
  padding-top: 4px;
  image {
    width: 40px;
    height: 40px;
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
