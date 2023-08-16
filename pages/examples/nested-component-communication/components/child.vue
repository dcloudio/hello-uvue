<template>
  <view class="child">
    子组件: {{ msg }}
    <grand-child></grand-child>
  </view>
</template>

<script>
  import grandChild from './grandChild'
  import {
    state
  } from '@/store/index.uts'
  export default {
    components: {
      grandChild
    },
    computed: {
      msg(): number {
        return state.componentMsg
      }
    }
  }
</script>
<style>
  .child {
    margin-top: 10px;
  }
</style>