const OPTIONS_PAGE_PATH = '/pages/directive/v-html/v-html-options'
const COMPOSITION_PAGE_PATH = '/pages/directive/v-html/v-html-composition'

// TODO: ios 暂不支持

describe('v-html', () => {
  const platformInfo = process.env.uniTestPlatformInfo.toLocaleLowerCase()
  const isIos = platformInfo.includes('ios')
  if (isIos) {
    it("ios platform not support", async () => {
      expect(1).toBe(1);
    });
    return
  }
  let page
  
  const test = async () => {
    const image = await program.screenshot()
    expect(image).toSaveImageSnapshot()
  }
  
  it('v-html options API', async () => {
    page = await program.reLaunch(OPTIONS_PAGE_PATH)
    await page.waitFor(700)
    
    await test(page)
  })
  
  it('v-html composition API', async () => {
    page = await program.reLaunch(COMPOSITION_PAGE_PATH)
    await page.waitFor(700)
    
    await test(page)
  })
})