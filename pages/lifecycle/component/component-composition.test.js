const PAGE_PATH = '/pages/lifecycle/component/component-composition'
const HOME_PATH = '/pages/index/index'

describe('component-lifecycle', () => {
  let page
  let lifeCycleNum
  const platformInfo = process.env.uniTestPlatformInfo.toLocaleLowerCase()
  const isAndroid = platformInfo.includes('android')
  const isIos = platformInfo.includes('ios')
  beforeAll(async () => {
    page = await program.reLaunch(HOME_PATH)
    await page.waitFor(700)
    const initLifecycleNum = 0
    await page.callMethod('setLifeCycleNum', initLifecycleNum)
    lifeCycleNum = await page.callMethod('getLifeCycleNum')
    expect(lifeCycleNum).toBe(initLifecycleNum)

    page = await program.navigateTo(PAGE_PATH)
    await page.waitFor(700)
  })
  afterAll(async () => {
    const resetLifecycleNum = 1100
    await page.callMethod('setLifeCycleNum', resetLifecycleNum)
    lifeCycleNum = await page.callMethod('getLifeCycleNum')
    expect(lifeCycleNum).toBe(resetLifecycleNum)
  })

  it('onLoad onPageShow onReady onBeforeMount onMounted onActivated', async () => {
    lifeCycleNum = await page.callMethod('pageGetLifeCycleNum')
    // TODO: android 组合式 API 不触发 onActivated
    expect(lifeCycleNum).toBe(isAndroid ? 112 : 113)
  })
  it('onDeactivated', async () => {
    // TODO: android 组合式 API 不触发 onActivated onDeactivated
    const toggleAliveComponentBtn = await page.$('#toggle-alive-component-btn')

    await toggleAliveComponentBtn.tap()
    lifeCycleNum = await page.callMethod('pageGetLifeCycleNum')
    expect(lifeCycleNum).toBe(112)

    await toggleAliveComponentBtn.tap()
    lifeCycleNum = await page.callMethod('pageGetLifeCycleNum')
    // TODO: android 端 组合式 API 不触发 activated
    expect(lifeCycleNum).toBe(isAndroid ? 112 : 113)
    await page.callMethod('pageSetLifeCycleNum', 0)
  })
  it('onBeforeUpdate onUpdated', async () => {
    const updateTitleBtn = await page.$('.component-lifecycle-btn')
    await updateTitleBtn.tap()
    lifeCycleNum = await page.callMethod('pageGetLifeCycleNum')
    expect(lifeCycleNum).toBe(2)
    await page.callMethod('pageSetLifeCycleNum', 0)
  })
  it('onPullDownRefresh', async () => {
    await page.callMethod('pullDownRefresh')
    await page.waitFor(2000)
    lifeCycleNum = await page.callMethod('pageGetLifeCycleNum')
    expect(lifeCycleNum).toBe(10)
    await page.callMethod('pageSetLifeCycleNum', 0)
  })
  it('onPageScroll onReachBottom', async () => {
    await program.pageScrollTo(2000)
    // TODO: web 端组件内监听 onPageScroll onReachBottom 不触发
    if (process.env.uniTestPlatformInfo.startsWith('android')) {
      const isScrolled = await page.callMethod('getIsScrolled')
      expect(isScrolled).toBe(true)
      lifeCycleNum = await page.callMethod('pageGetLifeCycleNum')
      expect(lifeCycleNum).toBe(10)
    }
    await page.callMethod('pageSetLifeCycleNum', 0)
  })
  it('onHide', async () => {
    page = await program.navigateTo(HOME_PATH)
    await page.waitFor('view')
    lifeCycleNum = await page.callMethod('getLifeCycleNum')
    // TODO: ios 跳转页面, 未触发 keep-alive 组件 onDeactivated,返回未触发 onActivated
    // TODO: android 跳转页面, 未触发 keep-alive 组件 onDeactivated,返回未触发 onActivated
    expect(lifeCycleNum).toBe(isIos || isAndroid ? -10 : -11)
    page = await program.navigateBack()
    await page.waitFor('view')
    lifeCycleNum = await page.callMethod('pageGetLifeCycleNum')
    expect(lifeCycleNum).toBe(0)
  })
  it('onDeactivated beforeUnmount unmounted onUnload onBackPress', async () => {
    page = await program.navigateBack()
    lifeCycleNum = await page.callMethod('getLifeCycleNum')
    // TODO: android 组合式 API 不触发 onDeactivated
    expect(lifeCycleNum).toBe(isAndroid ? -112 : -113)
    await page.callMethod('setLifeCycleNum', 0)
  })
})