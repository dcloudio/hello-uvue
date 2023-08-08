const PAGE_PATH = '/pages/component-instance/watch-function/watch-function'

describe('$watch()', () => {
  let page
  beforeAll(async () => {
    page = await program.reLaunch(PAGE_PATH)
    await page.waitFor(500)
  })

  it('$watch() 生效', async () => {
    const initValue = (await page.$('.init-value')).text()
    const value = await (await page.data()).val
    const isChange = await (await page.data()).changed

    expect(value).not.toBe(initValue)
    expect(isChange).toBe(true)
  })

  it('子组件 $watch() 生效', async () => {
    const initValue = (await page.$('.child-init-value')).text()
    const comp = await page.$('.watch-child')
    const value = await (await comp.data()).val
    const isChange = await (await comp.data()).changed

    expect(value).not.toBe(initValue)
    expect(isChange).toBe(true)
  })
})
