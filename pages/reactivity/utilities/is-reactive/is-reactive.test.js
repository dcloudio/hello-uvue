const PAGE_PATH = '/pages/composition-api/reactivity/is-reactive/is-reactive'

describe('isReactive', () => {
  let page = null
  beforeAll(async () => {
    page = await program.reLaunch(PAGE_PATH)
    await page.waitFor('view')
  })
  it('basic', async () => {
    const isReactiveCount = await page.$('#is-reactive-count')
    expect(await isReactiveCount.text()).toBe('isReactive(count): false')

    const isReactiveRefCount = await page.$('#is-reactive-ref-count')
    expect(await isReactiveRefCount.text()).toBe('isReactive(refCount): false')

    const isReactiveReactiveCount = await page.$('#is-reactive-reactive-count')
    expect(await isReactiveReactiveCount.text()).toBe('isReactive(reactiveCount): true')

    const isReactiveReadonlyCount = await page.$('#is-reactive-readonly-count')
    expect(await isReactiveReadonlyCount.text()).toBe('isReactive(readonlyCount): false')

    const isReactiveShallowReactiveCount = await page.$('#is-reactive-shallow-reactive-count')
    expect(await isReactiveShallowReactiveCount.text()).toBe('isReactive(shallowReactiveCount): true')

    const isReactiveShallowReadonlyCount = await page.$('#is-reactive-shallow-readonly-count')
    expect(await isReactiveShallowReadonlyCount.text()).toBe('isReactive(shallowReadonlyCount): false')
  })
})