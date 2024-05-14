const OPTIONS_PAGE_PATH = '/pages/directive/v-show/v-show-options'
const COMPOSITION_PAGE_PATH = '/pages/directive/v-show/v-show-composition'

describe('v-show', () => {
  let page
  
  const test = async (page) => {
    let dataInfo = await page.data('dataInfo')
    expect(dataInfo.show).toBe(true)
    
    const vShowElement = await page.$('#v-show-element')
    expect(await vShowElement.style('display')).toBe('flex')
    

    const toggle = await page.$('#toggle-btn')
    await toggle.tap()
    
    dataInfo = await page.data('dataInfo')
    expect(dataInfo.show).toBe(false)
    expect(await vShowElement.style('display')).toBe('none')
    
    await toggle.tap()
    dataInfo = await page.data('dataInfo')
    expect(dataInfo.show).toBe(true)
    expect(await vShowElement.style('display')).toBe('flex')
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