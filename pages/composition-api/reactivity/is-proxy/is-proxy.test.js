const PAGE_PATH = '/pages/composition-api/reactivity/is-proxy/is-proxy'

describe('isProxy', () => {
  if (process.env.uniTestPlatformInfo.startsWith('android')) {
    let page = null
    beforeAll(async () => {
      page = await program.reLaunch(PAGE_PATH)
      await page.waitFor('view')
    })
    it('basic', async () => {
      const isProxyCount = await page.$('#is-proxy-count')
      expect(await isProxyCount.text()).toBe('isProxy(count): false')
      
      const isProxyRefCount = await page.$('#is-proxy-ref-count')
      expect(await isProxyRefCount.text()).toBe('isProxy(refCount): false')
      
      const isProxyReactiveCount = await page.$('#is-proxy-reactive-count')
      expect(await isProxyReactiveCount.text()).toBe('isProxy(reactiveCount): true')
      
      const isProxyReadonlyCount = await page.$('#is-proxy-readonly-count')
      expect(await isProxyReadonlyCount.text()).toBe('isProxy(readonlyCount): true')
      
      const isProxyShallowReactiveCount = await page.$('#is-proxy-shallow-reactive-count')
      expect(await isProxyShallowReactiveCount.text()).toBe('isProxy(shallowReactiveCount): true')
      
      const isProxyShallowReadonlyCount = await page.$('#is-proxy-shallow-readonly-count')
      expect(await isProxyShallowReadonlyCount.text()).toBe('isProxy(shallowReadonlyCount): true')
    })
  } else {
    it('other platform', () => {
      expect(1).toBe(1)
    })
  }
})