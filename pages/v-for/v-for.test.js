const PAGE_PATH = '/pages/v-for/v-for'

describe('v-for', () => {
  let page
  beforeAll(async () => {
    page = await program.reLaunch(PAGE_PATH)
    await page.waitFor(5000)
  })
  it('list-items-3', async () => {
    const length = 3;
    const elements = await page.$$('.list-item')
    expect(elements.length).toBe(length)
  })
})
