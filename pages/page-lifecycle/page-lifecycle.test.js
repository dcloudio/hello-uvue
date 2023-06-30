const PAGE_PATH = '/pages/page-lifecycle/page-lifecycle'
const HOME_PATH = '/pages/index'

describe('page-lifecycle', () => {
  let page
	let lifeCycleNum
  beforeAll(async () => {
    page = await program.reLaunch(PAGE_PATH)
    await page.waitFor(1000)
  })
  it('onLoad onShow onReady', async () => {
    lifeCycleNum = await page.callMethod('getLifeCycleNum')
    expect(lifeCycleNum).toBe(1220)
  })
  it('onHide', async () => {
    page = await program.navigateTo(HOME_PATH)
    lifeCycleNum = await page.callMethod('getLifeCycleNum')
    expect(lifeCycleNum).toBe(1210)
		page = await program.navigateBack()
    lifeCycleNum = await page.callMethod('getLifeCycleNum')
    expect(lifeCycleNum).toBe(1220)
  })
  it('onUnload', async () => {
    page = await program.redirectTo(HOME_PATH)
    lifeCycleNum = await page.callMethod('getLifeCycleNum')
    expect(lifeCycleNum).toBe(1120)
  })
  it('onBackPress', async () => {
    page = await program.navigateTo(PAGE_PATH)
    lifeCycleNum = await page.callMethod('getLifeCycleNum')
    expect(lifeCycleNum).toBe(1240)
    page = await program.navigateBack()
    lifeCycleNum = await page.callMethod('getLifeCycleNum')
    expect(lifeCycleNum).toBe(1130)
  })
	it('onLastPageBackPress', async () => {
	  page = await program.navigateBack()
	  lifeCycleNum = await page.callMethod('getLifeCycleNum')
	  expect(lifeCycleNum).toBe(130)
	})
})