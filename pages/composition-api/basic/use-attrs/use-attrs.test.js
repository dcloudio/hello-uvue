const PAGE_PATH = '/pages/composition-api/basic/use-attrs/use-attrs'

describe('useAttrs', () => {
  let page = null
  beforeAll(async () => {
    page = await program.reLaunch(PAGE_PATH)
    await page.waitFor('view')
  })
  it('basic', async () => {
    const attrsClass = await page.$('#attrs-class')
    expect(await attrsClass.text()).toBe('attrs.class: foo')

    const attrsMsg = await page.$('#attrs-msg')
    expect(await attrsMsg.text()).toBe('attrs.msg: msg')
  })

})