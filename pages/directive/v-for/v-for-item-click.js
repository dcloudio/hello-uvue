const PAGE_PATH = '/pages/directive/v-for/v-for-item-click'

describe('v-for-item-click', () => {
  let page
  beforeAll(async () => {
    page = await program.reLaunch(PAGE_PATH)
    await page.waitFor(500)
  })
})
