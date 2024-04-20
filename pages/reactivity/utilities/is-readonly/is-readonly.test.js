const PAGE_PATH = '/pages/composition-api/reactivity/is-readonly/is-readonly'

describe('isReadonly', () => {
  let page = null
  beforeAll(async () => {
    page = await program.reLaunch(PAGE_PATH)
    await page.waitFor('view')
  })
  it('basic', async () => {
    const isReadonlyCount = await page.$('#is-readonly-count')
    expect(await isReadonlyCount.text()).toBe('isReadonly(count): false')

    const isReadonlyRefCount = await page.$('#is-readonly-ref-count')
    expect(await isReadonlyRefCount.text()).toBe('isReadonly(refCount): false')

    const isReadonlyReactiveCount = await page.$('#is-readonly-reactive-count')
    expect(await isReadonlyReactiveCount.text()).toBe('isReadonly(reactiveCount): false')

    const isReadonlyReadonlyCount = await page.$('#is-readonly-readonly-count')
    expect(await isReadonlyReadonlyCount.text()).toBe('isReadonly(readonlyCount): true')

    const isReadonlyShallowReactiveCount = await page.$('#is-readonly-shallow-reactive-count')
    expect(await isReadonlyShallowReactiveCount.text()).toBe('isReadonly(shallowReactiveCount): false')

    const isReadonlyShallowReadonlyCount = await page.$('#is-readonly-shallow-readonly-count')
    expect(await isReadonlyShallowReadonlyCount.text()).toBe('isReadonly(shallowReadonlyCount): true')
  })
})