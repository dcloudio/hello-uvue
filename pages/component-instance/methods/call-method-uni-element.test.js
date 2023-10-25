const PAGE_PATH = '/pages/component-instance/methods/call-method-uni-element'

describe('call-method-uni-element', () => {
  let page
  beforeAll(async () => {
    page = await program.reLaunch(PAGE_PATH)
    await page.waitFor(500)
  })
  it('callMethodTest', async () => {
    const title = Date.now() + ''
    const result = await page.callMethod('callMethodTest', title)
    expect(result).toBe(title)
  })
})