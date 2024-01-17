const PAGE_PATH = '/pages/composition-api/basic/define-emits/define-emits'

describe('defineEmits', () => {
  if (process.env.uniTestPlatformInfo.startsWith('android')) {
    let page = null
    beforeAll(async () => {
      page = await program.reLaunch(PAGE_PATH)
      await page.waitFor('view')
    })
    it('basic', async () => {
      const handleArrayLiteralChangeRes = await page.$('#handle-array-literal-change-res')
      expect(await handleArrayLiteralChangeRes.text()).toBe('handle array literal comp change result: ')
      
      const arrayLiteralEmitBtn = await page.$('#array-literal-emit-btn')
      await arrayLiteralEmitBtn.tap()
      
      expect(await handleArrayLiteralChangeRes.text()).toBe('handle array literal comp change result: options is 1')
      
      const handleTypeEmits1ChangeRes = await page.$('#handle-type-emits1-change-res')
      expect(await handleTypeEmits1ChangeRes.text()).toBe('handle type emits comp change result: ')
      
      const typeEmits1EmitBtn = await page.$('#type-emits1-emit-btn')
      await typeEmits1EmitBtn.tap()
      
      expect(await handleTypeEmits1ChangeRes.text()).toBe('handle type emits comp change result: options is 2')
      
      const handleTypeEmits2ChangeRes = await page.$('#handle-type-emits2-change-res')
      expect(await handleTypeEmits2ChangeRes.text()).toBe('handle type emits named tuple syntax comp change result: ')
      
      const typeEmits2EmitBtn = await page.$('#type-emits2-emit-btn')
      await typeEmits2EmitBtn.tap()
      
      expect(await handleTypeEmits2ChangeRes.text()).toBe('handle type emits named tuple syntax comp change result: options is 3')
    })
  } else {
    it('other platform', () => {
      expect(1).toBe(1)
    })
  }
})