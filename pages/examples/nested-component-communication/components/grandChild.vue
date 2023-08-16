<template>
  <view class="child">
    孙组件: {{ msg }}
    <button @click="change">孙组件清空数据</button>
  </view>
</template>

<script>
  import {
    state,
    setComponentMsg
  } from '@/store/index.uts'
  export default {
    computed: {
      msg(): number {
        return state.componentMsg
      }
    },
    methods: {
      change() {
        setComponentMsg(0)
      }
    }
  }
</script>

<style>
  .child {
    margin-top: 10px;
  }
</style>