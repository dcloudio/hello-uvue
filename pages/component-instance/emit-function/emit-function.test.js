const PAGE_PATH = '/pages/component-instance/emit-function/emit-function-options'
const PAGE_COMPOSITION_PATH = '/pages/component-instance/emit-function/emit-function-composition'

describe('$emit()', () => {
  let page
  it('$emit() 选项式 API 事件生效', async () => {
    page = await program.reLaunch(PAGE_PATH)
    await page.waitFor(500)
    const beforeValue = await page.data('value')
    const btn = await page.$('.call-parent-btn')

    btn.tap()

    const afterValue = await page.data('value')

    expect(beforeValue).not.toBe(afterValue)
  })

  it('$emit() 组合式 API 事件生效', async () => {
    page = await program.reLaunch(PAGE_COMPOSITION_PATH)
    await page.waitFor(500)
    const beforeValue = await page.data('value')
    const btn = await page.$('.call-parent-btn')

    btn.tap()

    const afterValue = await page.data('value')

    expect(beforeValue).not.toBe(afterValue)
  })
})
