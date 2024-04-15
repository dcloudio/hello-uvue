const OPTIONS_PAGE_PATH = '/pages/component-instance/data/data-options'
const COMPOSITION_PAGE_PATH = '/pages/component-instance/data/data-composition'

describe('$data', () => {
  let page
  const test = async (page) => {
    const str = await page.$('#str')
    expect(await str.text()).toBe('default str')
    
    const num = await page.$('#num')
    expect(await num.text()).toBe('0')
    
    const arr = await page.$('#arr')
    expect(await arr.text()).toBe('1,2,3')
    
    await page.callMethod('updateData')
    
    expect(await str.text()).toBe('new str')
    expect(await num.text()).toBe('1')
    expect(await arr.text()).toBe('4,5,6')
  }

  it('$data 选项式 API', async () => {
    page = await program.reLaunch(OPTIONS_PAGE_PATH)
    await page.waitFor('view')
    
    await test(page)
  });

  it('data 组合式 API', async () => {
    page = await program.reLaunch(COMPOSITION_PAGE_PATH)
    await page.waitFor('view')

    await test(page)
  })
})
