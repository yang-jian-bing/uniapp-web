<template>
  <view class="page">
    <web-view class="webb" :src="url"></web-view>
  </view>
</template>

<script>
export default {
  components: {},
  data() {
    const page = uni.getStorageSync("pageName")
    return {
      url: `https://www.shuainiba.com/admin/${page}`,
    };
  },
  created() {},
  methods: {},
};
</script>

<style scoped lang="scss">
.webb {
  width: 100vh;
  height: 100vh;
  overflow: auto;
}
</style>
