const PAGE_PATH = '/pages/directive/v-for/v-for-item-v-if'

describe('v-for-item-v-if', () => {
  let page
  beforeAll(async () => {
    page = await program.reLaunch(PAGE_PATH)
    await page.waitFor(500)
  })
  it('list-item-click', async () => {
    // click
    const items = await page.$$('.list-item')
    for (let i = 0; i < items.length; i++) {
      const item = items[i]
      await item.tap()
    }
    await page.waitFor(100)

    const elements = await page.$$('.list-item-text-show')
    expect(elements.length).toBe(1)
  })
})