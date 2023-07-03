const PAGE_PATH = '/pages/directive/v-slot/v-slot'

describe('v-slot', () => {
  let page
  beforeAll(async () => {
    page = await program.reLaunch(PAGE_PATH)
    await page.waitFor(500)
  })
  it('default', async () => {
    const defaultText = await page.$('.default')
    expect(await defaultText.text()).toBe('loading')
  })
})
