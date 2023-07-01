const PAGE_PATH = '/pages/directive/v-for/v-for'

describe('v-for', () => {
  let page
  beforeAll(async () => {
    page = await program.reLaunch(PAGE_PATH)
    await page.waitFor(500)
  })
  it('list-items-3', async () => {
    const length = 3;
    const elements = await page.$$('.list-item')
    expect(elements.length).toBe(length)
  })
})
