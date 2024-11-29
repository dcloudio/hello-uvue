const OPTIONS_PAGE_PATH = '/pages/component-instance/root/root-options'
const COMPOSITION_PAGE_PATH = '/pages/component-instance/root/root-composition'

describe('$root', () => {
  const platformInfo = process.env.uniTestPlatformInfo.toLocaleLowerCase()
  const isAndroid = platformInfo.includes('android')
  const isIOS = platformInfo.includes('ios')
  const isMP = platformInfo.startsWith('mp')
  const isWeb = platformInfo.startsWith('web')
  if (isWeb) {
    it('not support', async () => {
      expect(1).toBe(1)
    })
    return
  }
  let page
  const test = async (pagePath) => {
    page = await program.reLaunch(pagePath)
    await page.waitFor('view')
    
    const rootStrParent = await page.$('#root-str-parent')
    expect(await rootStrParent.text()).toBe('root component str')
    
    const rootStrChild = await page.$('#root-str-child')
    expect(await rootStrChild.text()).toBe('root component str')
  }

  it('$root 选项式 API', async () => {
    await test(OPTIONS_PAGE_PATH)
  });
  
  it('$root 组合式 API', async () => {
    await test(COMPOSITION_PAGE_PATH)
  })
})
