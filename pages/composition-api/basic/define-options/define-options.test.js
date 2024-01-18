const PAGE_PATH = '/pages/composition-api/basic/define-options/define-options'

describe('defineOptions', () => {
  if (process.env.uniTestPlatformInfo.startsWith('android')) {
    let page = null
    beforeAll(async () => {
      page = await program.reLaunch(PAGE_PATH)
      await page.waitFor('view')
    })
    it('basic', async () => {
      const count = await page.$('#count')
      expect(await count.text()).toBe('count: 0')
      const doubleCount = await page.$('#double-count')
      expect(await doubleCount.text()).toBe('double count: 0')
      const total = await page.$('#total')
      expect(await total.text()).toBe('total: 0')
      
      const incrementBtn = await page.$('#increment-btn')
      await incrementBtn.tap()
      
      expect(await count.text()).toBe('count: 1')
      expect(await doubleCount.text()).toBe('double count: 2')
      const price = await page.data('price')
      expect(await total.text()).toBe(`total: ${1*price}`)
    })
  } else {
    it('other platform', () => {
      expect(1).toBe(1)
    })
  }
})