const PAGE_PATH = '/pages/directive/v-bind/v-bind'

describe('v-bind', () => {
  let page
  beforeAll(async () => {
    page = await program.reLaunch(PAGE_PATH)
    await page.waitFor(500)
  })
  it('button-disabled', async () => {
    const button = await page.$('.button-disabled')
    // TODO
    const disabled = await button.property('disabled')
    expect(disabled.toString()).toBe(true + '')
  })
  it('button-v-bind:disabled', async () => {
    const button = await page.$('.button-v-bind-disabled')
    // TODO
    const disabled = await button.property('disabled')
    expect(disabled.toString()).toBe(true + '')
  })
})
