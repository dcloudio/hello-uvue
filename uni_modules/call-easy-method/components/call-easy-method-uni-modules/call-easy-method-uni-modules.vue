<template>
  <view>{{result}}</view>
</template>

<script>
  export default {
    props: {
      list: {
        type: Array as PropType < number[] > ,
        default: () => [] as number[]
      }
    },
    data() {
      return {
        result: ''
      }
    },
    emits:['propsChanged'],
    watch: {
      list: {
        handler(newVal, oldVal) {
          console.log('isProxy',isProxy(newVal),'isReactive',isReactive(newVal),'isRef',isRef(newVal))
          this.$emit('propsChanged', newVal)
        },
        immediate: true
      }
    },
    methods: {
      foo1() {
        this.result = "foo1"
      },
      foo2(date1: number) {
        this.result = "foo2=" + date1
      },
      foo3(date1: number, date2: number) {
        this.result = "foo3=" + date1 + " " + date2
      },
      foo4(callback: (() => void)) {
        callback()
      },
      foo5(text1: string): any | null {
        this.result = text1
        return text1
      }
    }
  }
</script>
