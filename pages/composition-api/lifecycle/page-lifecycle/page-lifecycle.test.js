const PAGE_PATH = '/pages/composition-api/lifecycle/page-lifecycle/page-lifecycle'
const HOME_PATH = '/pages/tab-bar/options-api'
const INTER_PAGE_PATH = '/pages/app-instance/index/index'
let page
let lifeCycleNum

describe('page-lifecycle', () => {
  if (process.env.uniTestPlatformInfo.startsWith('web')) {
    // TODO: 自动化测试暂不能调用web端setup内defineExpose导出的方法，待自动化测试兼容后开放此测试例
    it('web', async () => {
      expect(1).toBe(1)
    })
    return
  }
  beforeAll(async () => {
    page = await program.reLaunch(HOME_PATH)
    await page.waitFor(700)
    await page.callMethod('setLifeCycleNum', 0)
  });
	afterAll(async () => {
		const resetLifecycleNum = 1100
		await page.callMethod('setLifeCycleNum', resetLifecycleNum)
		lifeCycleNum = await page.callMethod('getLifeCycleNum')
		expect(lifeCycleNum).toBe(resetLifecycleNum)
	})

	it('onLoad onShow onReady onResize', async () => {
		page = await program.reLaunch(PAGE_PATH)
		await page.waitFor(700)
		lifeCycleNum = await page.callMethod('getLifeCycleNum')
		expect(lifeCycleNum).toBe(130)
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
		const isScrolled = await page.callMethod('getIsScrolled')
		expect(isScrolled).toBe(true)
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
	})
	it('onUnload', async () => {
		page = await program.reLaunch(HOME_PATH)
		await page.waitFor(700)
		lifeCycleNum = await page.callMethod('getLifeCycleNum')
		expect(lifeCycleNum).toBe(-100)
		await page.callMethod('setLifeCycleNum', 0)
	})
	it('onBackPress', async () => {
		page = await program.navigateTo(PAGE_PATH)
		await page.waitFor(700)
		lifeCycleNum = await page.callMethod('getLifeCycleNum')
		expect(lifeCycleNum).toBe(130)
		page = await program.navigateBack()
		await page.waitFor('view')
		lifeCycleNum = await page.callMethod('getLifeCycleNum')
		expect(lifeCycleNum).toBe(20)
		await page.callMethod('setLifeCycleNum', 0)
	})
})