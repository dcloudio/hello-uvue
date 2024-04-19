const PAGE_PATH = '/pages/component-instance/nextTick/nextTick-composition'

describe('$nextTick()', () => {
  let page

  it('nextTick page', async () => {
    page = await program.reLaunch(PAGE_PATH)
    await page.waitFor('view')
    
    let pageDataInfo = await page.data('dataInfo')
    expect(pageDataInfo.title).toBe('default title')
    
    const pageTestNextTickBtn = await page.$('#page-test-next-tick-btn')
    await pageTestNextTickBtn.tap()
    await page.waitFor(1000)
    
    pageDataInfo = await page.data('dataInfo')
    expect(pageDataInfo.beforeNextTickTitle).toBe('default title')
    expect(pageDataInfo.afterNextTickTitle).toBe('new title')
  });
  
  it('nextTick component', async () => {
    const childComponent = await page.$('#child-component')
    let childDataInfo = await childComponent.data('dataInfo')
    expect(childDataInfo.title).toBe('default title')
    
    const childTestNextTickBtn = await page.$('#child-test-next-tick-btn')
    await childTestNextTickBtn.tap()
    await page.waitFor(1000)
    
    childDataInfo = await childComponent.data('dataInfo')
    expect(childDataInfo.beforeNextTickTitle).toBe('default title')
    expect(childDataInfo.afterNextTickTitle).toBe('new title')
  })
})
