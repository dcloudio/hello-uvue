const PAGE_PATH = '/pages/composition-api/basic/define-model/define-model'

describe('defineModel', () => {
  let page = null
  beforeAll(async () => {
    page = await program.reLaunch(PAGE_PATH)
    await page.waitFor('view')
  })
  it('basic', async () => {
    const modelValueText = await page.$('#model-value-text')
    expect(await modelValueText.text()).toBe('modelValue in Foo: str')

    const modelValueInput = await page.$('#model-value-input')
    expect(await modelValueInput.property('value')).toBe('str')

    const msgText = await page.$('#msg-text')
    expect(await msgText.text()).toBe('msg in Foo: msg')

    const msgInput = await page.$('#msg-input')
    expect(await msgInput.property('value')).toBe('msg')

    const updateValueBtn = await page.$('#update-value-btn')
    await updateValueBtn.tap()

    expect(await modelValueText.text()).toBe('modelValue in Foo: str1')
    expect(await modelValueInput.property('value')).toBe('str1')

    expect(await msgText.text()).toBe('msg in Foo: msg2')
    expect(await msgInput.property('value')).toBe('msg2')
  })
})