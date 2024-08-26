const PAGE_PATH = '/pages/lifecycle/component/component-options'
const HOME_PATH = '/pages/index/index'

describe('component-lifecycle', () => {
  let page
  let lifeCycleNum
  const platformInfo = process.env.uniTestPlatformInfo.toLocaleLowerCase()
  const isAndroid = platformInfo.includes('android')
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

  it('beforeCreate created beforeMount mounted activated', async () => {
    lifeCycleNum = await page.callMethod('getLifeCycleNum')
    expect(lifeCycleNum).toBe(5)
  })
  it('deactivated', async () => {
    const toggleAliveComponentBtn = await page.$('#toggle-alive-component-btn')
    await toggleAliveComponentBtn.tap()
    lifeCycleNum = await page.callMethod('getLifeCycleNum')
    expect(lifeCycleNum).toBe(4)
    // TODO: android 端 keep-alive 组件切换时，不仅触发 activated, 之前还会触发 beforeUpdate updated
    await toggleAliveComponentBtn.tap()
    lifeCycleNum = await page.callMethod('getLifeCycleNum')
    expect(lifeCycleNum).toBe(isAndroid ? 7 : 5)
  })
  it('beforeUpdate updated', async () => {
    const updateTitleBtn = await page.$('.component-lifecycle-btn')
    await updateTitleBtn.tap()
    lifeCycleNum = await page.callMethod('getLifeCycleNum')
    expect(lifeCycleNum).toBe(isAndroid ? 9 : 7)
  })
  it('deactivated beforeUnmount unmounted', async () => {
    page = await program.navigateBack()
    lifeCycleNum = await page.callMethod('getLifeCycleNum')
    expect(lifeCycleNum).toBe(isAndroid ? 6 : 4)
  })
})