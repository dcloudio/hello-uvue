const PAGE_PATH = '/pages/directive/v-for/v-for-item-v-if'

describe('v-for-item-v-if', () => {
  let page
  beforeAll(async () => {
    page = await program.reLaunch(PAGE_PATH)
    await page.waitFor(500)
  })
})
