const PAGE_PATH = '/pages/directive/v-if/v-if'

describe('v-if', () => {
  let page
  beforeAll(async () => {
    page = await program.reLaunch(PAGE_PATH)
    await page.waitFor(500)
  })
  it('show-hide-switch', async () => {
    const btn_view = await page.$('.view-click')

    const elements1 = await page.$$('.hello')
    expect(elements1.length).toBe(1)

    await btn_view.tap()
    await page.waitFor(50)
    const elements2 = await page.$$('.hello')
    expect(elements2.length).toBe(0)

    await btn_view.tap()
    await page.waitFor(50)
    const elements3 = await page.$$('.hello')
    expect(elements3.length).toBe(1)
  })
})