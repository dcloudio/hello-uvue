const PAGE_PATH = '/pages/composition-api/reactivity/custom-ref/custom-ref'

describe('customRef', () => {
  let page = null
  beforeAll(async () => {
    page = await program.reLaunch(PAGE_PATH)
    await page.waitFor('view')
  })
  it('basic', async () => {
    const stateCount = await page.$('#state-count')
    expect(await stateCount.text()).toBe('state.count: 0')

    const incrementBtn = await page.$('#increment-btn')
    await incrementBtn.tap()

    expect(await stateCount.text()).toBe('state.count: 0')

    const triggerRefBtn = await page.$('#trigger-ref-btn')
    await triggerRefBtn.tap()

    expect(await stateCount.text()).toBe('state.count: 1')
  })
})