const PAGE_PATH = '/pages/component-instance/attrs/attrs'

describe('$props', () => {
  let page
  beforeAll(async () => {
    page = await program.reLaunch(PAGE_PATH)
    await page.waitFor(500)
  })

  it('$attrs中不应该存在$props属性（已在组件props中声明）', async () => {
    const val = await page.$('.has-props-attrs')
    expect(await val.text()).toBe('false')
  })

  it('$attrs中不应该存在$emits属性（已在组件emits中声明）', async () => {
    const val = await page.$('.has-emits-attrs')
    expect(await val.text()).toBe('false')
  })

  it('$attrs中可以获取到未声明的属性', async () => {
    const val = await page.$('.has-attrs')
    expect(await val.text()).toBe('true')
  })
})
