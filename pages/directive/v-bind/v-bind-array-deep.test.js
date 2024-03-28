const PAGE_PATH = '/pages/directive/v-bind/v-bind-array-deep'

describe('v-bind-array-deep', () => {
  let page
  beforeAll(async () => {
    page = await program.reLaunch(PAGE_PATH)
    await page.waitFor(500)
  })
  it('object-value', async () => {
    const value = await page.$('.deep-value')
    expect(await value.text()).toBe('3')
  })
})