<template>
  <div>
    <div class="vux-demo">
      <img class="logo" src="../assets/vux_logo.png">
      <h1></h1>
    </div>
    <group title="vux 示例模板">
      <cell class="ccc" title="点击跳转" is-link link="other"></cell>
    </group>
  </div>
</template>

<script>
  import { Group, Cell } from 'vux'

  export default {
    components: {
      Group,
      Cell
    },
    data () {
      return {
        msg: 'Hello World!'
      }
    }
  }
</script>

<style lang="scss">
  @import '../style/utils.scss';

  .vux-demo {
    text-align: center;
  }

  .logo {
    margin-top: 2rem;
    width: toRem(700);
    height: 1rem;
    border: 1px solid red;
  }
  .ccc{
    font-size: toRem(12);
  }


</style>
