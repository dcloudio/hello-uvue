const PAGE_PATH = '/pages/component-instance/parent/parent'

describe('$parent', () => {
  if (process.env.uniTestPlatformInfo.startsWith('web')) {
    // TODO: web 端暂不支持
    it('web', async () => {
      expect(1).toBe(1)
    })
    return
  }
  let page
  beforeAll(async () => {
    page = await program.reLaunch(PAGE_PATH)
    await page.waitFor(500)
  })

  it('$parent 属性生效', async () => {
    const el = await page.$('.parent-text')

    expect(await el.text()).toBe('parent')
  });

  it('调用$parent方法正常', async () => {
    const el = await page.$('.parent-func-text')
    const btn = await page.$('.call-parent-func')

    btn.tap()

    await page.waitFor(1000)

    expect(await el.text()).toBe('parentFunctionResult')
  })
})
