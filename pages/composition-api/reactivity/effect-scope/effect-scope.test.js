const PAGE_PATH = '/pages/composition-api/reactivity/effect-scope/effect-scope'

describe('effectScope', () => {
  if (process.env.uniTestPlatformInfo.startsWith('android')) {
    let page = null
    beforeAll(async () => {
      page = await program.reLaunch(PAGE_PATH)
      await page.waitFor('view')
    })
    it('basic', async () => {
      const counter = await page.$('#counter')
      expect(await counter.text()).toBe('counter: 0')

      const watchCounterRes = await page.$('#watch-counter-res')
      expect(await watchCounterRes.text()).toBe('watch counter result: ')

      const watchEffectCounterRes = await page.$('#watch-effect-counter-res')
      expect(await watchEffectCounterRes.text()).toBe('watchEffect counter result: counter: 0')

      const incrementCounterBtn = await page.$('#increment-counter-btn')
      await incrementCounterBtn.tap()

      expect(await counter.text()).toBe('counter: 1')
      expect(await watchCounterRes.text()).toBe('watch counter result: newVal: 1, oldVal: 0')
      expect(await watchEffectCounterRes.text()).toBe('watchEffect counter result: counter: 1')

      const stopEffectScopeBtn = await page.$('#stop-effect-scope-btn')
      await stopEffectScopeBtn.tap()

      await incrementCounterBtn.tap()

      expect(await counter.text()).toBe('counter: 2')
      expect(await watchCounterRes.text()).toBe('watch counter result: newVal: 1, oldVal: 0')
      expect(await watchEffectCounterRes.text()).toBe('watchEffect counter result: counter: 1')

    })
  } else {
    it('other platform', () => {
      expect(1).toBe(1)
    })
  }
})