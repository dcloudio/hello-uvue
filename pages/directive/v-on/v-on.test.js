const PAGE_PATH = '/pages/directive/v-on/v-on'

describe('v-on', () => {
  let page
  beforeAll(async () => {
    page = await program.reLaunch(PAGE_PATH)
    await page.waitFor(500)
  })
  it('view:click', async () => {
    const expectedCount = 6
    const countText = await page.$('.count')
    const clickEls = await page.$$('.view-click')
    for (let i = 0; i < clickEls.length; i++) {
      await clickEls[i].tap()
    }
    expect(await countText.text()).toBe(expectedCount + '')
    expect((await page.data()).count).toBe(expectedCount)
  })
})