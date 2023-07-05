const PAGE_PATH = '/pages/directive/v-if/v-if'

describe('v-if', () => {
  let page
  beforeAll(async () => {
    page = await program.reLaunch(PAGE_PATH)
    await page.waitFor(500)
  })
  it('switch-v-if', async () => {
    const btn_view = await page.$('.view-click')

    const element1 = await page.$$('.v-if-show-value')
    expect(element1.length).toBe(1)

    await btn_view.tap()
    await page.waitFor(50)
    const element2 = await page.$$('.v-if-show-value')
    expect(element2.length).toBe(0)

    await btn_view.tap()
    await page.waitFor(50)
    const element3 = await page.$$('.v-if-show-value')
    expect(element3.length).toBe(1)
  })
  it('switch-v-if-v-else-if-v-else', async () => {
    const btn_view = await page.$('.view-click-abc')

    const element_a = await page.$('.text-a')
    expect(await element_a.text()).toBe('A')

    await btn_view.tap()
    await page.waitFor(50)
    const element_b = await page.$('.text-b')
    expect(await element_b.text()).toBe('B')

    await btn_view.tap()
    await page.waitFor(50)
    const element_c = await page.$('.text-c')
    expect(await element_c.text()).toBe('C')

    await btn_view.tap()
    await page.waitFor(50)
    const element_not_abc = await page.$('.text-not-a-b-c')
    expect(await element_not_abc.text()).toBe('Not A/B/C')
  })
})