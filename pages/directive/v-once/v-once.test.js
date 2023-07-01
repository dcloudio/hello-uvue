const PAGE_PATH = '/pages/directive/v-once/v-once'

describe('v-once', () => {
  let page
  beforeAll(async () => {
    page = await program.reLaunch(PAGE_PATH)
    await page.waitFor(500)
  })
  it('list-items-3', async () => {
  })
})
