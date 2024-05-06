const OPTIONS_PAGE_PATH = '/pages/component-instance/root/root-options'
const COMPOSITION_PAGE_PATH = '/pages/component-instance/root/root-composition'

describe('$root', () => {
  if (process.env.uniTestPlatformInfo.startsWith('web')) {
    // TODO: web 端 $root 指向和 app 端不同，具体待定
    it('web', async () => {
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
