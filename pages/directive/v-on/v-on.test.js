const PAGE_PATH = '/pages/directive/v-on/v-on'

describe('v-on', () => {
  let page
  beforeAll(async () => {
    page = await program.reLaunch(PAGE_PATH)
    await page.waitFor(500)
  })
  it('view:click', async () => {
    let count = 0

    const countText = await page.$('.count')

    const view = await page.$('.view-click')
    await view.tap()
    count += 1
    expect(await countText.text()).toBe(count + '')

    const view_v_on = await page.$('.view-v-on-click')
    await view_v_on.tap()
    count += 1
    expect(await countText.text()).toBe(count + '')
  })
})