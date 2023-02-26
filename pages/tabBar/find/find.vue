<template>
  <view class="page">
    <view class="main-box">
      <view class="module-icon" :key="index" v-for="(item, index) in moduleList">
        <view>
          <svg class="icon svg-icon" aria-hidden="true">
            <use v-bind:xlink:href="item.icon"></use>
          </svg>
        </view>
        <view class="module-title">{{ item.name }}</view>
      </view>
    </view>
  </view>
</template>

<script>
export default {
  components: {

  },
  data() {
    return {
      moduleList: [
        {
          name: '社区通知',
          id: '',
          icon: '#icon-gonggao'
        },

        {
          name: '维修',
          id: '',
          icon: '#icon-sousuo'
        },
        {
          name: '干洗',
          id: '',
          icon: '#icon-fushi'
        },
        {
          name: '汽修',
          id: '',
          icon: '#icon-wuliu'
        },
        {
          name: '家政',
          id: '',
          icon: '#icon-jiaju'
        },
        {
          name: '接送娃',
          id: '',
          icon: '#icon-zengsong'
        },
        {
          name: '托管',
          id: '',
          icon: '#icon-zhanghaoguanli'
        },
        {
          name: '约活动',
          id: '',
          icon: '#icon-huodong'
        },
        {
          name: '家教',
          id: '',
          icon: '#icon-jiaoyu'
        },
        {
          name: '旧物',
          id: '',
          icon: '#icon-wupinshenqing'
        },
        {
          name: '送菜',
          id: '',
          icon: '#icon-peisong'
        },
        {
          name: '拼车',
          id: '',
          icon: '#icon-qiche'
        },
        {
          name: '论坛',
          id: '',
          icon: '#icon-luntan'
        }
      ]
    }
  }
}
</script>

<style scoped lang="scss">
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
