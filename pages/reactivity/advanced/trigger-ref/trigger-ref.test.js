const PAGE_PATH = '/pages/composition-api/reactivity/trigger-ref/trigger-ref'

describe('triggerRef', () => {
  let page = null
  beforeAll(async () => {
    page = await program.reLaunch(PAGE_PATH)
    await page.waitFor('view')
  })
  it('basic', async () => {
    const stateCount = await page.$('#state-count')
    expect(await stateCount.text()).toBe('state.count: 0')

    const incrementStateCountBtn = await page.$('#increment-state-count-btn')
    await incrementStateCountBtn.tap()

    expect(await stateCount.text()).toBe('state.count: 0')

    const triggerRefStateBtn = await page.$('#trigger-ref-state-btn')
    await triggerRefStateBtn.tap()

    expect(await stateCount.text()).toBe('state.count: 1')
  })
})