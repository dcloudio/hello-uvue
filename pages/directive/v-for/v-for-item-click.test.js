const PAGE_PATH = '/pages/directive/v-for/v-for-item-click'

describe('v-for-item-click', () => {
  let page
  beforeAll(async () => {
    page = await program.reLaunch(PAGE_PATH)
    await page.waitFor(500)
  })
  it('list-item-click-count1', async () => {
    await clickItem(page, 1)
  })
  it('list-item-click-count2', async () => {
    await clickItem(page, 2)
  })
  it('list-item-click-count3', async () => {
    await clickItem(page, 3)
  })
  it('list-item-click-count4', async () => {
    await clickItem(page, 4)
  })
  it('list-item-click-count5', async () => {
    await clickItem(page, 5)
  })
})

async function clickItem(page, count) {
  // click
  const items = await page.$$('.list-item')
  for (let i = 0; i < items.length; i++) {
    const item = items[i]
    await item.tap()
  }
  await page.waitFor(50)

  // text count
  const items_count = await page.$$('.list-item-text-count')
  for (let i = 0; i < items_count.length; i++) {
    const item = items_count[i]
    expect(await item.text()).toBe(count + '')
  }
}
