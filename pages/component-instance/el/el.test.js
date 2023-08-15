const PAGE_PATH = '/pages/component-instance/el/el'

describe('$el', () => {
  let page
  beforeAll(async () => {
    page = await program.reLaunch(PAGE_PATH)
    await page.waitFor(500)
  })

  it('$el元素可用', async () => {
    const el = await page.$('.tag-name')
    expect(await el.text()).toBe('VIEW')
  })
})
