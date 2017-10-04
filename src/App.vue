<template>
  <div id="app">
    <div class="page-loading" v-show="isLoading">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid">
        <path stroke="none" d="M3 50A47 47 0 0 0 97 50A47 49 0 0 1 3 50" fill="#bababa"
              transform="rotate(99.9008 50 51)">
          <animateTransform attributeName="transform" type="rotate" calcMode="linear" values="0 50 51;360 50 51"
                            keyTimes="0;1" dur="0.6s" begin="0s" repeatCount="indefinite"></animateTransform>
        </path>
      </svg>
      <span>加载中</span>
    </div>
    <router-view v-show="!isLoading"></router-view>
  </div>
</template>

<script>
  export default {
    name: 'app',
    computed: {
      isLoading () {
        return this.$store.state.isLoading
      }
    }
  }
</script>

<style lang="less">
  @import '~vux/src/styles/reset.less';
</style>

<style lang="scss">
  @import './style/utils.scss';

  body {
    background-color: #fbf9fe;
  }

  .page-loading {
    width: toRem(100);
    height: toRem(100);
    position: absolute;
    top: 50%;
    left: 50%;
    z-index: 9999;
    margin-left: toRem(-50);
    margin-top: toRem(-50);
    margin-bottom: toRem(40);
    svg {
      width: 100%;
      height: 100%;
      position: absolute;
      top: 0;
      left: 0;
    }
    span {
      color: #cecece;
      font-size: toRem(24);
      width: inherit;
      height: inherit;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
</style>
