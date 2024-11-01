const OPTIONS_PAGE_PATH = '/pages/directive/v-show/v-show-options'
const COMPOSITION_PAGE_PATH = '/pages/directive/v-show/v-show-composition'

describe('v-show', () => {
  let page
  
  const test = async (page) => {
    let dataInfo = await page.data('dataInfo')
    expect(dataInfo.showDefaultTrue).toBe(true)
    expect(dataInfo.showDefaultFalse).toBe(false)
    
    const vShowElementDefaultTrue = await page.$('#v-show-element-default-true')
    expect(await vShowElementDefaultTrue.style('display')).toBe('flex')
    const vShowElementDefaultFalse = await page.$('#v-show-element-default-false')
    expect(await vShowElementDefaultFalse.style('display')).toBe('none')

    const toggle = await page.$('#toggle-btn')
    await toggle.tap()
    
    dataInfo = await page.data('dataInfo')
    expect(dataInfo.showDefaultTrue).toBe(false)
    expect(dataInfo.showDefaultFalse).toBe(true)
    expect(await vShowElementDefaultTrue.style('display')).toBe('none')
    expect(await vShowElementDefaultFalse.style('display')).toBe('flex')
    
    await toggle.tap()
    dataInfo = await page.data('dataInfo')
    expect(dataInfo.showDefaultTrue).toBe(true)
    expect(dataInfo.showDefaultFalse).toBe(false)
    expect(await vShowElementDefaultTrue.style('display')).toBe('flex')
    expect(await vShowElementDefaultFalse.style('display')).toBe('none')
  }
  
  it('v-show options API', async () => {
    page = await program.reLaunch(OPTIONS_PAGE_PATH)
    await page.waitFor('view')
    
    await test(page)
  })
  
  it('v-show composition API', async () => {
    page = await program.reLaunch(COMPOSITION_PAGE_PATH)
    await page.waitFor('view')
    
    await test(page)
  })
})