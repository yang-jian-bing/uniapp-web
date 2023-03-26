<!--
 * @Author: YangJianBing
 * @Date: 2021-10-23 11:32:53
 * @LastEditTime: 2023-03-26 13:03:35
 * @LastEditors: YangJianBing
 * @Description: 待缴费列表
 * @FilePath: \app\pages\page\constructionPage.VUE
-->
<template>
  <view class="page">
    <uni-nav-bar
      title="建设中"
      :fixed="true"
      :statusBar="true"
      color="#ffffff"
      background-color="#dd2c34"
      @clickLeft="back"
      left-icon="left"
    ></uni-nav-bar>

    <view class="text-center p-20 m-t-100">
      <view class='text-center font-14 font-bold'> 我们即将上线啦！ </view>
      <view class="text-center font-12"> 工程师正在玩命开发，请耐心等待，谢谢合作 </view>
    </view>
  </view>
</template>

<script>
export default {
  components: {},
  data() {
    return {};
  },
  created() {
    // this.getList();
  },
  methods: {
    back() {
      uni.navigateBack();
    },
  },
};
</script>

<style scoped lang="scss">
.m-t-100{
  margin-top: 100px;
}
</style>

