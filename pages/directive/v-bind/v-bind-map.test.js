const PAGE_PATH = '/pages/directive/v-bind/v-bind-map'

describe('v-bind-map', () => {
  let page
  beforeAll(async () => {
    page = await program.reLaunch(PAGE_PATH)
    await page.waitFor(500)
  })
  it('numberBool', async () => {
    const numberBoolList = await page.$$('.numberBool-item')
    for (let i = 0; i < numberBoolList.length; i++) {
      const item = numberBoolList[i];
      expect(await item.text()).toBe(i + ':true')
    }
  })
  it('stringBool', async () => {
    const stringBoolList = await page.$$('.stringBool-item')
    for (let i = 0; i < stringBoolList.length; i++) {
      const item = stringBoolList[i];
      expect(await item.text()).toBe(i + ':true')
    }
  })
})