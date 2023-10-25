<template>
  <view></view>
</template>

<script>
  export default {
    data() {
      return {
      }
    },
    methods: {
      foo1() {
      },
      foo2(date1 : number) {
      },
      foo3(date1 : number, date2 : number) {
      },
      foo4(callback : (() => void)) {
        callback()
      },
      foo5(text1 : string) : any | null {
        return text1
      }
    }
  }
</script>
