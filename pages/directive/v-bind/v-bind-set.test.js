const PAGE_PATH = '/pages/directive/v-bind/v-bind-set'

describe('v-bind-set', () => {
  let page
  beforeAll(async () => {
    page = await program.reLaunch(PAGE_PATH)
    await page.waitFor(500)
  })
  it('number', async () => {
    const list = await page.$$('.number-item')
    for (let i = 0; i < list.length; i++) {
      const item = list[i];
      expect(await item.text()).toBe(i + '')
    }
  })
  it('string', async () => {
    const list = await page.$$('.string-item')
    for (let i = 0; i < list.length; i++) {
      const item = list[i];
      expect(await item.text()).toBe(i + '')
    }
  })
})