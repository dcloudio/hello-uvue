const PAGE_PATH = '/pages/component-instance/methods/call-method-define-expose'

describe('call-method-define-expose', () => {
  let page
  beforeAll(async () => {
    page = await program.reLaunch(PAGE_PATH)
    await page.waitFor(500)
  })
  it('callMethodTest', async () => {
    const result = await page.callMethod('callMethod')
    expect(result).toBe(`hello call-method-define-expose`)
  })
})