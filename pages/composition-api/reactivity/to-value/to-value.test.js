const PAGE_PATH = '/pages/composition-api/reactivity/to-value/to-value'

describe('toValue', () => {
  if (process.env.uniTestPlatformInfo.startsWith('android')) {
    let page = null
    beforeAll(async () => {
      page = await program.reLaunch(PAGE_PATH)
      await page.waitFor('view')
    })
    it('basic', async () => {
      const refCount = await page.$('#ref-count')
      expect(await refCount.text()).toBe('ref count: 0')
      const isRefRefCount = await page.$('#is-ref-ref-count')
      expect(await isRefRefCount.text()).toBe('isRef ref count: true')
      const count = await page.$('#count')
      expect(await count.text()).toBe('count: 0')
      const isRefCount = await page.$('#is-ref-count')
      expect(await isRefCount.text()).toBe('isRef count: false')

      const objNum = await page.$('#obj-num')
      expect(await objNum.text()).toBe('obj.num: 0')
      const toValueObjNum = await page.$('#to-value-obj-num')
      expect(await toValueObjNum.text()).toBe('toValue(() => obj.num): 0')

      const incrementBtn = await page.$('#increment-btn')
      await incrementBtn.tap()

      expect(await objNum.text()).toBe('obj.num: 1')
      expect(await toValueObjNum.text()).toBe('toValue(() => obj.num): 1')
    })
  } else {
    it('other platform', () => {
      expect(1).toBe(1)
    })
  }
})