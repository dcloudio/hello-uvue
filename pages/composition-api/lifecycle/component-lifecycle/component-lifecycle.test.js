const PAGE_PATH = '/pages/composition-api/lifecycle/component-lifecycle/component-lifecycle'
const INTER_PAGE_PATH = '/pages/app-instance/index/index'
const HOME_PATH = '/pages/tab-bar/options-api'

describe('component-lifecycle', () => {
  let page
  let lifeCycleNum
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
  // afterAll(async () => {
  // 	const resetLifecycleNum = 1100
  // 	await page.callMethod('setLifeCycleNum', resetLifecycleNum)
  // 	lifeCycleNum = await page.callMethod('getLifeCycleNum')
  // 	expect(lifeCycleNum).toBe(resetLifecycleNum)
  // })

  it('onLoad onPageShow onReady onBeforeMount onMounted', async () => {
    lifeCycleNum = await page.callMethod('getLifeCycleNum')
    expect(lifeCycleNum).toBe(112)
    await page.callMethod('pageSetlifeCycleNum', 0)
  })
  it('onBeforeUpdate onUpdated', async () => {
    const updateTitleBtn = await page.$('.component-lifecycle-btn')
    await updateTitleBtn.tap()
    lifeCycleNum = await page.callMethod('getLifeCycleNum')
    expect(lifeCycleNum).toBe(2)
    await page.callMethod('pageSetlifeCycleNum', 0)
  })
  it('onPullDownRefresh', async () => {
    await page.callMethod('pullDownRefresh')
    await page.waitFor(1500)
    lifeCycleNum = await page.callMethod('getLifeCycleNum')
    expect(lifeCycleNum).toBe(10)
    await page.callMethod('pageSetlifeCycleNum', 0)
  })
  it('onPageScroll onReachBottom', async () => {
    await program.pageScrollTo(2000)
    // 测试 web 端组件内监听 onPageScroll 不触发
    if (process.env.uniTestPlatformInfo.startsWith('android')) {
      const isScrolled = await page.callMethod('getIsScrolled')
      expect(isScrolled).toBe(true)
    }
    lifeCycleNum = await page.callMethod('getLifeCycleNum')
    expect(lifeCycleNum).toBe(10)
    await page.callMethod('pageSetlifeCycleNum', 0)
  })
  it('onHide', async () => {
    page = await program.navigateTo(INTER_PAGE_PATH)
    await page.waitFor('view')
    lifeCycleNum = await page.callMethod('getLifeCycleNum')
    expect(lifeCycleNum).toBe(-10)
    page = await program.navigateBack()
    await page.waitFor('view')
    lifeCycleNum = await page.callMethod('getLifeCycleNum')
    expect(lifeCycleNum).toBe(0)
    await page.callMethod('pageSetlifeCycleNum', 0)
  })
  it('beforeUnmount unmounted onUnload onBackPress', async () => {
    page = await program.navigateBack()
    lifeCycleNum = await page.callMethod('getLifeCycleNum')
    expect(lifeCycleNum).toBe(-112)
    await page.callMethod('setLifeCycleNum', 0)
  })
})