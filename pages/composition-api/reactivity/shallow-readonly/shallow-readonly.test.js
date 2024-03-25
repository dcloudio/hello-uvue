const PAGE_PATH = '/pages/composition-api/reactivity/shallow-readonly/shallow-readonly'

describe('shallowReadonly', () => {
  let page = null
  beforeAll(async () => {
    page = await program.reLaunch(PAGE_PATH)
    await page.waitFor('view')
  })
  it('basic', async () => {
    let stateCount = await page.$('#state-count')
    expect(await stateCount.text()).toBe('state.count: 0')

    let stateNestedCount = await page.$('#state-nested-count')
    expect(await stateNestedCount.text()).toBe('state.nested.count: 0')

    if (process.env.uniTestPlatformInfo.startsWith('web')) {
      // web端操作readonly对象会直接编译失败，以下测试无法执行
      return
    }

    const incrementStateCountBtn = await page.$('#increment-state-count-btn')
    await incrementStateCountBtn.tap()

    const incrementStateNestedCountBtn = await page.$('#increment-state-nested-count-btn')
    await incrementStateNestedCountBtn.tap()

    expect(await stateCount.text()).toBe('state.count: 0')
    expect(await stateNestedCount.text()).toBe('state.nested.count: 0')

    const updatePageRenderBtn = await page.$('#update-page-render-btn')
    await updatePageRenderBtn.tap()

    stateCount = await page.$('#state-count')
    expect(await stateCount.text()).toBe('state.count: 0')
    stateNestedCount = await page.$('#state-nested-count')
    expect(await stateNestedCount.text()).toBe('state.nested.count: 1')
  })
})