const OPTIONS_PAGE_PATH = '/pages/component-instance/attrs/attrs-options'
const COMPOSITION_PAGE_PATH = '/pages/component-instance/attrs/attrs-composition'

describe('$attrs', () => {
  let page
  
  const test = async (page) => {
    const hasPropsAttr = await page.$('#has-props-attr')
    expect(await hasPropsAttr.text()).toBe('false')
    const hasEmitsAttr = await page.$('#has-emits-attr')
    expect(await hasEmitsAttr.text()).toBe('false')
    const hasClassAttr = await page.$('#has-class-attr')
    expect(await hasClassAttr.text()).toBe('true')
  }
  
  it('$attrs options API', async () => {
    page = await program.reLaunch(OPTIONS_PAGE_PATH)
    await page.waitFor('view')
    
    await test(page)
  })

  it('useAttrs composition API', async () => {
    page = await program.reLaunch(COMPOSITION_PAGE_PATH)
    await page.waitFor('view')
    
    await test(page)
  })
})
