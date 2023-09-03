<template>
  <view class="page">
    <web-view class="webb" :src="url"></web-view>
  </view>
</template>

<script>
export default {
  components: {},
  data() {
    const page = this.$route.query.page
    return {
      url: `https://www.shuainiba.com/admin/${page}`
    };
  },
  created() {},
  methods: {
   
  },
};
</script>

<style scoped lang="scss">

</style>
