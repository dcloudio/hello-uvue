const PAGE_PATH = '/pages/directive/v-for/v-for-v-for'

describe('v-for-v-for', () => {
  let page
  beforeAll(async () => {
    page = await program.reLaunch(PAGE_PATH)
    await page.waitFor(500)
  })
  it('item1.item1', async () => {
    const item_item = await page.$('.list-item-item')
    expect(await item_item.text()).toBe('item1.item1')
  })
})
