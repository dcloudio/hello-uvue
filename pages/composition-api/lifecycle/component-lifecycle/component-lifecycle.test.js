const PAGE_PATH = '/pages/composition-api/lifecycle/component-lifecycle/component-lifecycle'
const HOME_PATH = '/pages/tab-bar/options-api'

describe('component-lifecycle', () => {
  if (process.env.uniTestPlatformInfo.startsWith('web')) {
    // TODO: 自动化测试暂不能调用web端setup内defineExpose导出的方法，待自动化测试兼容后开放此测试例
    it('web', async () => {
      expect(1).toBe(1)
    })
    return
  }
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
	afterAll(async () => {
		const resetLifecycleNum = 1100
		await page.callMethod('setLifeCycleNum', resetLifecycleNum)
		lifeCycleNum = await page.callMethod('getLifeCycleNum')
		expect(lifeCycleNum).toBe(resetLifecycleNum)
	})

	it('onBeforeMount onMounted', async () => {
		lifeCycleNum = await page.callMethod('getLifeCycleNum')
		expect(lifeCycleNum).toBe(2)
	})
	it('onBeforeUpdate onUpdated', async () => {
		const updateTitleBtn = await page.$('.component-lifecycle-btn')
		await updateTitleBtn.tap()
		lifeCycleNum = await page.callMethod('getLifeCycleNum')
		expect(lifeCycleNum).toBe(4)
	})
	it('beforeUnmount unmounted', async () => {
		page = await program.navigateBack()
		lifeCycleNum = await page.callMethod('getLifeCycleNum')
		expect(lifeCycleNum).toBe(2)
	})
})