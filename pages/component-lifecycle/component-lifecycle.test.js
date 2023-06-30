const PAGE_PATH = '/pages/component-lifecycle/component-lifecycle'
const HOME_PATH = '/pages/index'

describe('component-lifecycle', () => {
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

    page = await program.navigateTo(PAGE_PATH)
    await page.waitFor(1000)
  })
  it('beforeCreate created beforeMount mounted', async () => {
    lifeCycleNum = await page.callMethod('getLifeCycleNum')
    expect(lifeCycleNum).toBe(4)
  })
  it('beforeUpdate updated', async () => {
		const component = await page.$('.component-lifecycle')
		await component.setData({
			title: 'component for lifecycle test new title'
		})
    lifeCycleNum = await page.callMethod('getLifeCycleNum')
    expect(lifeCycleNum).toBe(6)
  })
  it('beforeUnmount unmounted', async () => {
    page = await program.navigateBack()
    lifeCycleNum = await page.callMethod('getLifeCycleNum')
    expect(lifeCycleNum).toBe(4)
    
		const resetLifecycleNum = 1100
		await page.callMethod('setLifeCycleNum', resetLifecycleNum)
		lifeCycleNum = await page.callMethod('getLifeCycleNum')
		expect(lifeCycleNum).toBe(resetLifecycleNum)
  })
})
