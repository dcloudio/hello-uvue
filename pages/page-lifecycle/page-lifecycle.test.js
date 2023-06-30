const PAGE_PATH = '/pages/page-lifecycle/page-lifecycle'
const HOME_PATH = '/pages/index'

describe('page-lifecycle', () => {
  let page
	let lifeCycleNum
  beforeAll(async () => {
    page = await program.reLaunch(HOME_PATH)
    lifeCycleNum = await page.callMethod('getLifeCycleNum')
    expect(lifeCycleNum).toBe(1100)

		const initLifecycleNum = 0
		await page.callMethod('setLifeCycleNum', initLifecycleNum)
		lifeCycleNum = await page.callMethod('getLifeCycleNum')
    expect(lifeCycleNum).toBe(initLifecycleNum)
    
		page = await program.reLaunch(PAGE_PATH)
    await page.waitFor(1000)
  })
  it('onLoad onShow onReady', async () => {
    lifeCycleNum = await page.callMethod('getLifeCycleNum')
    expect(lifeCycleNum).toBe(120)
  })
  it('onHide', async () => {
    page = await program.navigateTo(HOME_PATH)
    lifeCycleNum = await page.callMethod('getLifeCycleNum')
    expect(lifeCycleNum).toBe(110)
		page = await program.navigateBack()
    lifeCycleNum = await page.callMethod('getLifeCycleNum')
    expect(lifeCycleNum).toBe(120)
  })
  it('onUnload', async () => {
    page = await program.redirectTo(HOME_PATH)
    lifeCycleNum = await page.callMethod('getLifeCycleNum')
    expect(lifeCycleNum).toBe(20)
  })
  it('onBackPress', async () => {
    page = await program.navigateTo(PAGE_PATH)
    lifeCycleNum = await page.callMethod('getLifeCycleNum')
    expect(lifeCycleNum).toBe(140)
    page = await program.navigateBack()
    lifeCycleNum = await page.callMethod('getLifeCycleNum')
    expect(lifeCycleNum).toBe(30)
  })
	it('onLastPageBackPress', async () => {
	  page = await program.navigateBack()
	  lifeCycleNum = await page.callMethod('getLifeCycleNum')
    expect(lifeCycleNum).toBe(-970)
    
		const resetLifecycleNum = 1100
		await page.callMethod('setLifeCycleNum', resetLifecycleNum)
		lifeCycleNum = await page.callMethod('getLifeCycleNum')
		expect(lifeCycleNum).toBe(resetLifecycleNum)
	})
})
