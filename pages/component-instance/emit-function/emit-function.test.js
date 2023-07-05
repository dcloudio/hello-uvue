const PAGE_PATH = '/pages/component-instance/emit-function/emit-function'

describe('$emit()', () => {
  let page
  beforeAll(async () => {
    page = await program.reLaunch(PAGE_PATH)
    await page.waitFor(500)
  })

  it('$emit() 事件生效', async () => {
    const beforeValue = await page.data('value')
    const btn = await page.$('.call-parent-btn')

    btn.tap()

    const afterValue = await page.data('value')

    expect(beforeValue).not.toBe(afterValue)
  })
})
