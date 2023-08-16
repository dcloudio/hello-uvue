const PAGE_PATH = '/pages/lifecycle/component/component'
const HOME_PATH = '/pages/index'

describe('component-lifecycle', () => {
  let page
	let lifeCycleNum
  beforeAll(async () => {
    page = await program.reLaunch(HOME_PATH)
    const initLifecycleNum = 0
    await page.callMethod('setLifeCycleNum', initLifecycleNum)
    lifeCycleNum = await page.callMethod('getLifeCycleNum')
    expect(lifeCycleNum).toBe(initLifecycleNum)

    page = await program.navigateTo(PAGE_PATH)
    await page.waitFor(1000)
  })
  afterAll(async () => {
    const resetLifecycleNum = 1100
    await page.callMethod('setLifeCycleNum', resetLifecycleNum)
    lifeCycleNum = await page.callMethod('getLifeCycleNum')
    expect(lifeCycleNum).toBe(resetLifecycleNum)
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
  })
})
