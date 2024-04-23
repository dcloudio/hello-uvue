const OPTIONS_PAGE_PATH = '/pages/directive/v-on/v-on-options'
const COMPOSITION_PAGE_PATH = '/pages/directive/v-on/v-on-composition'

describe('v-on', () => {
  let page
  
  const test = async (pagePath) => {
    page = await program.reLaunch(pagePath)
    await page.waitFor('view')
    
    const count = await page.$('#count')
    expect(await count.text()).toBe('0')
    
    const btnList = await page.$$('.btn')
    for (let i = 0; i < btnList.length; i++) {
      await btnList[i].tap()
    }
    
    expect(await count.text()).toBe('6')
  }
  
  it('v-on options API', async () => {
    await test(OPTIONS_PAGE_PATH)
  })
  
  it('v-on composition API', async () => {
    await test(COMPOSITION_PAGE_PATH)
  })
})