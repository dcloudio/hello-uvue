<script lang="ts">
import { state, setLifeCycleNum } from './store/index.uts'
export default {
  onLaunch: function () {
    setLifeCycleNum(state.lifeCycleNum + 1000)
    console.log('App Launch')

    const performance: Performance = uni.getPerformance()
    const observer: PerformanceObserver = performance.createObserver((entryList: PerformanceObserverEntryList) => {
      console.log("observer:entryList.getEntries()")
      console.log(entryList.getEntries())
    })
    observer.observe({ entryTypes: ['render', 'navigation'] } as PerformanceObserverOptions)
  },
  onShow: function () {
    setLifeCycleNum(state.lifeCycleNum + 100)
    console.log('App Show')
  },
  onHide: function () {
    setLifeCycleNum(state.lifeCycleNum - 100)
    console.log('App Hide')
  },
  onLastPageBackPress(): boolean | null {
    setLifeCycleNum(state.lifeCycleNum - 1000)
    console.log('App onLastPageBackPress')
    return null
  },
}
</script>

<style>
/* @font-face {
    font-family: uniicons;
    font-weight: normal;
    font-style: normal;
    src: url('./static/fonts/uni.ttf') format('truetype');
  } */

.page {
  padding: 15px;
}

.uni-panel {
  margin-bottom: 12px;
}

.uni-panel-h {
  background-color: #ffffff;
  flex-direction: row;
  align-items: center;
  padding: 12px;
}

.uni-panel-h-on {
  background-color: #f0f0f0;
}

.uni-panel-text {
  color: #000000;
  font-size: 14px;
  font-weight: normal;
}

.uni-panel-icon {}

.uni-panel-icon-on {
  transform: rotate(180deg);
}

.uni-navigate-item {
  flex-direction: row;
  align-items: center;
  background-color: #FFFFFF;
  border-top-style: solid;
  border-top-color: #f0f0f0;
  border-top-width: 1px;
  padding: 12px;
  justify-content: space-between;
}

.uni-navigate-item:active {
  background-color: #f8f8f8;
}

.uni-navigate-text {
  color: #000000;
  font-size: 12px;
  opacity: 0.8;
}

.uni-navigate-icon {
  margin-left: 15px;
  color: #999999;
  font-size: 14px;
  font-weight: normal;
}

.split-title {
  margin: 20px 0 5px;
  padding: 5px 0;
  border-bottom: 1px solid #dfdfdf;
}
</style>