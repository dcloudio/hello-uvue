const PAGE_PATH = '/pages/composition-api/reactivity/to-ref/to-ref'

describe('toRef', () => {
  if (process.env.uniTestPlatformInfo.startsWith('android')) {
    let page = null
    beforeAll(async () => {
      page = await program.reLaunch(PAGE_PATH)
      await page.waitFor('view')
    })
    it('basic', async () => {
      const count = await page.$('#count')
      expect(await count.text()).toBe('count: 0')
      const isRefCount = await page.$('#is-ref-count')
      expect(await isRefCount.text()).toBe('isRef count: false')
      const refCount = await page.$('#ref-count')
      expect(await refCount.text()).toBe('ref count: 0')
      const isRefRefCount = await page.$('#is-ref-ref-count')
      expect(await isRefRefCount.text()).toBe('isRef ref count: true')

      const objNum = await page.$('#obj-num')
      expect(await objNum.text()).toBe('obj.num: 0')
      const toRefObjNum = await page.$('#to-ref-obj-num')
      expect(await toRefObjNum.text()).toBe('toRef(obj, "num"): 0')
      const toRefFnObjNum = await page.$('#to-ref-fn-obj-num')
      expect(await toRefFnObjNum.text()).toBe('toRef(() => obj.num): 0')

      const incrementBtn = await page.$('#increment-btn')
      await incrementBtn.tap()

      expect(await objNum.text()).toBe('obj.num: 2')
      expect(await toRefObjNum.text()).toBe('toRef(obj, "num"): 2')
      expect(await toRefFnObjNum.text()).toBe('toRef(() => obj.num): 2')
    })
  } else {
    it('other platform', () => {
      expect(1).toBe(1)
    })
  }
})