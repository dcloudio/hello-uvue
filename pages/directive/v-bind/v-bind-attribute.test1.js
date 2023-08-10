const PAGE_PATH = '/pages/directive/v-bind/v-bind-attribute'

describe('v-bind-attribute', () => {
  let page
  beforeAll(async () => {
    page = await program.reLaunch(PAGE_PATH)
    await page.waitFor(500)
  })
  it('attribute', async () => {
    const view1 = await page.$('.attribute')
    expect(await view1.attribute('id1')).toBe('id1')
    expect(await view1.attribute('id2')).toBe('id2')
  })
})