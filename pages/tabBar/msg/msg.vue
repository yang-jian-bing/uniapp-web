<template>
  <view>
    <view class="header-min-box b-g-ee0a24" style="padding-top: 40px;">
      <uni-search-bar placeholder="搜索"  bgColor="#fff"  @confirm="search" />
    </view>
    <view class="msg-box">
      <view class="b-g-ee0a24">
        <view class="header-line"></view>
      </view>
      <view v-for="(item, index) of list" class="p-t-10 b-g-f" :key="index">
        <view class="flex p-10 p-t-0">
          <view class="msg-img">
            <image
              src="../../../assets/img/login/login-logo.png"
              class="home-nav"
              alt=""
              srcset=""
            />
          </view>
          <view class="msg-content">
            <view class="flex-between">
              <view @click="details" class="font-16 font-bold">
                {{ item.submitPersonUserName }}
              </view>
              <view>
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
          submitPersonUserName: "通知",
          title: "物业清明放假一天",
        },
        {
          sendTime: "6月23日",
          submitPersonUserName: "通知",
          title: "物业清明放假一天",
        },
        {
          sendTime: "2022年12月11日",
          submitPersonUserName: "通知",
          title: "物业清明放假一天",
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
    search(){}
  },
};
</script>

<style scoped lang="scss">
.header-line{
  border-radius: 10px 10px 0 0;
  background: #fff;
  overflow: hidden;
  height: 10px;
  width: 100vw;
  border: none;
}
.header-min-box{
  overflow: hidden;
}
.msg-img {
  border: none;
  flex-shrink: 0;
  border-radius: 5px;
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
  border-bottom: solid 1px #ddd;
  padding-bottom: 15px;
  padding-right: 10px;
  padding-top: 2px;
  .min-title {
    color: #666;
  }
}
</style>
