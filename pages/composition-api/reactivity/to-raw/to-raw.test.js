const PAGE_PATH = '/pages/composition-api/reactivity/to-raw/to-raw'

describe('toRaw', () => {
  if (process.env.uniTestPlatformInfo.startsWith('android')) {
    let page = null
    beforeAll(async () => {
      page = await program.reLaunch(PAGE_PATH)
      await page.waitFor('view')
    })
    it('basic', async () => {
      const checkToRawRef = await page.$('#check-to-raw-ref')
      expect(await checkToRawRef.text()).toBe('check toRaw ref: false')

      const checkToRawReactive = await page.$('#check-to-raw-reactive')
      expect(await checkToRawReactive.text()).toBe('check toRaw reactive: true')

      const checkToRawReadonly = await page.$('#check-to-raw-readonly')
      expect(await checkToRawReadonly.text()).toBe('check toRaw readonly: true')

      const checkToRawShallowReactive = await page.$('#check-to-raw-shallow-reactive')
      expect(await checkToRawShallowReactive.text()).toBe('check toRaw shallowReactive: true')

      const checkToRawShallowReadonly = await page.$('#check-to-raw-shallow-readonly')
      expect(await checkToRawShallowReadonly.text()).toBe('check toRaw shallowReadonly: true')
    })
  } else {
    it('other platform', () => {
      expect(1).toBe(1)
    })
  }
})