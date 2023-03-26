<template>
  <view>
    <view class="header-min-box"> </view>
    <!-- <van-pull-refresh v-model="refreshing" @refresh="onRefresh">
      <van-list v-model="loading" :finished="finished" finished-text="没有更多了" @load="onLoad"> -->
        <view v-for="(item, index) of list" :key="index">
          <view>
            <view class="text-center col-8686" style="padding:16px 0 12px">
              {{ item.sendTime }}
            </view>
            <view style="border-radius:4px" class="b-g-f m-l-15 m-r-15 p-15" @click="details">
              <view class="flex align-items">
                <view class="col-1b1b">{{ item.submitPersonUserName }}</view>
              </view>
              <view class="m-t-10">
                {{ item.title }}
              </view>
            </view>
          </view>
        </view>
      <!-- </van-list>
    </van-pull-refresh> -->
  </view>
</template>

<script>
// import { List, Cell, Tab, Tabs, Divider, Button, Sticky, Toast, PullRefresh } from 'vant'
export default {
  components: {
    // [Divider.name]: Divider,
    // [List.name]: List,
    // [Cell.name]: Cell,
    // [Tab.name]: Tab,
    // [Tabs.name]: Tabs,
    // [PullRefresh.name]: PullRefresh,
    // [Button.name]: Button,
    // [Toast.name]: Toast,
    // [Sticky.name]: Sticky
  },
  data() {
    return {
      value: '',
      loading: false,
      finished: false,
      total: 1,
      list: [
        {
          sendTime: '2023-03-12 12:12',
          submitPersonUserName: '通知',
          title: '物业清明放假一天'
        }
      ],
      refreshing: false,
      page: 1,
      limit: 10,
      isFrist: true,
      type: '1',
      processInstanceStatus: '',
      businessTotal: 0,
      systemTotal: 0
    }
  },
  created() {
   
  },
  mounted() {},
  methods: {

  }
}
</script>

<style scoped></style>
