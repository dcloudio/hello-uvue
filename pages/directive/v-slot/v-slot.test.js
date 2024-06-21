const OPTIONS_PAGE_PATH = '/pages/directive/v-slot/v-slot-options'
const COMPOSITION_PAGE_PATH = '/pages/directive/v-slot/v-slot-composition'

describe('v-slot', () => {
  let page
  
  const test = async (pagePath) => {
    page = await program.reLaunch(pagePath)
    await page.waitFor('view')
    
    const slotHeader = await page.$('#slot-header')
    expect(await slotHeader.text()).toBe('foo msg')

    const slotContent = await page.$('#slot-default')
    expect(await slotContent.text()).toBe('0')

    const slotFooter = await page.$('#slot-footer')
    expect(await slotFooter.text()).toBe('["a","b","c"]')
  }
  
  it('v-slot', async () => {
    await test(OPTIONS_PAGE_PATH)
  })
  
  it('defineSlots', async () => {
    await test(COMPOSITION_PAGE_PATH)
  })
})
