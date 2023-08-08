const PAGE_PATH = '/pages/directive/v-once/v-once'

describe('v-once', () => {
  let page
  beforeAll(async () => {
    page = await program.reLaunch(PAGE_PATH)
    await page.waitFor(500)
  })
  // TODO 暂不支持
  it('change-message', async () => {
    const btn_change = await page.$('.view-click')
    const messageText = await page.$('.v-once-message')

    // await btn_change.tap()
    // expect(await messageText.text()).toBe('message')
  })
})
