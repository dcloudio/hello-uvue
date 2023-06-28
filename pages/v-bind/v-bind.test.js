const PAGE_PATH = '/pages/v-bind/v-bind'

describe('v-bind', () => {
  let page
  beforeAll(async () => {
    page = await program.reLaunch(PAGE_PATH)
    await page.waitFor(500)
  })
  it('button-v-bind:disabled', async () => {
  })
})
