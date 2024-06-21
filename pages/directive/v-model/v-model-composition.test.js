const PAGE_PATH = '/pages/directive/v-model/v-model-composition'

describe('defineModel', () => {
  let page = null
  beforeAll(async () => {
    page = await program.reLaunch(PAGE_PATH)
    await page.waitFor('view')
  })
  it('basic', async () => {
    const modelValueText = await page.$('#model-value-text')
    expect(await modelValueText.text()).toBe('str')

    const modelValueInput = await page.$('#model-value-input')
    expect(await modelValueInput.value()).toBe('str')

    const modelMsgText = await page.$('#model-msg-text')
    expect(await modelMsgText.text()).toBe('msg')
    
    const modelMsgInput = await page.$('#model-msg-input')
    expect(await modelMsgInput.value()).toBe('msg')
    
    const modelNumText = await page.$('#model-num-text')
    expect(await modelNumText.text()).toBe('1')


    const updateValueBtn = await page.$('#update-value-btn')
    await updateValueBtn.tap()

    expect(await modelValueText.text()).toBe('str1')
    expect(await modelValueInput.value()).toBe('str1')

    expect(await modelMsgText.text()).toBe('msg2')
    expect(await modelMsgInput.value()).toBe('msg2')
    
    const handleModelValueUpdateRes = await page.$('#handle-model-value-update-res')
    expect(await handleModelValueUpdateRes.text()).toBe('str1')
    
    const handleModelMsgUpdateRes = await page.$('#handle-model-msg-update-res')
    expect(await handleModelMsgUpdateRes.text()).toBe('msg2')
  })
})
