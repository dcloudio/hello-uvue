const OPTIONS_PAGE_PATH = '/pages/component-instance/parent/parent-options'
const COMPOSITION_PAGE_PATH = '/pages/component-instance/parent/parent-composition'

describe('$parent', () => {
  let page
  const test = async (page) => {
    const parentStr = await page.$('#parent-str')
    expect(await parentStr.text()).toBe('parent str')
    
    const parentNum = await page.$('#parent-num')
    expect(await parentNum.text()).toBe('0')
    
    const triggerParentFnBtn = await page.$('#trigger-parent-fn')
    await triggerParentFnBtn.tap()
    expect(await parentNum.text()).toBe('1')
  }
  
  it('$parent 选项式 API', async () => {
    page = await program.reLaunch(OPTIONS_PAGE_PATH)
    await page.waitFor('view')
    
    await test(page)
  });
  
  it('$parent 组合式 API', async () => {
    page = await program.reLaunch(COMPOSITION_PAGE_PATH)
    await page.waitFor('view')
    
    await test(page)
  })
})
