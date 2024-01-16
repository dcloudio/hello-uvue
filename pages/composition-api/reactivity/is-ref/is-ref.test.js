const PAGE_PATH = '/pages/composition-api/reactivity/is-ref/is-ref'

describe('isRef', () => {
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
    })
  } else {
    it('other platform', () => {
      expect(1).toBe(1)
    })
  }
})