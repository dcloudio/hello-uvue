const PAGE_PATH = '/pages/composition-api/basic/define-expose/define-expose'

describe('defineExpose', () => {
  if (process.env.uniTestPlatformInfo.startsWith('android')) {
    let page = null
    beforeAll(async () => {
      page = await program.reLaunch(PAGE_PATH)
      await page.waitFor('view')
    })
    it('basic', async () => {
      const fooStr = await page.$('#foo-str')
      expect(await fooStr.text()).toBe('str from component Foo: foo str')
      const fooNum = await page.$('#foo-num')
      expect(await fooNum.text()).toBe('num from component Foo: 0')
      
      const incrementBtn = await page.$('#increment-btn')
      await incrementBtn.tap()
      
      expect(await fooNum.text()).toBe('num from component Foo: 1')
    })
  } else {
    it('other platform', () => {
      expect(1).toBe(1)
    })
  }
})