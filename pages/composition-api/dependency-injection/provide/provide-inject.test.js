const PAGE_PATH = '/pages/composition-api/dependency-injection/provide/provide'

describe('provide-inject-hasInjectionContext', () => {
  const isWeb = process.env.uniTestPlatformInfo.startsWith('web')
  let page = null
  beforeAll(async () => {
    page = await program.reLaunch(PAGE_PATH)
    await page.waitFor('view')
  })
  it('baisc', async () => {
    const msg = await page.$('.msg')
    expect(await msg.text()).toBe('msg: hello')

    const num = await page.$('.num')
    expect(await num.text()).toBe('num: 0')

    const obj = await page.$('.obj')
    expect(await obj.text()).toBe(isWeb ? 'obj: {\n"a": 1\n}' : 'obj: {"a":1}')

    const arr = await page.$('.arr')

    expect(await arr.text()).toBe(isWeb ? 'arr: [\n1,\n2,\n3\n]' : 'arr: [1,2,3]')

    const fn = await page.$('.fn')
    expect(await fn.text()).toBe('fn: hello')

    if (process.env.uniTestPlatformInfo.startsWith('android')) {
      const hasInjectionContext = await page.$('.has-injection-context')
      expect(await hasInjectionContext.text()).toBe('hasInjectionContext: true')

      const checkHasInjectionContextBtn = await page.$('.check-has-injection-context-btn')
      await checkHasInjectionContextBtn.tap()

      expect(await hasInjectionContext.text()).toBe('hasInjectionContext: false')
    }
  })
})