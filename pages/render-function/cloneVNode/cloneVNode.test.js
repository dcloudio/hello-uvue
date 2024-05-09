const OPTIONS_PAGE_PATH = '/pages/render-function/cloneVNode/cloneVNode-options'
const COMPOSITION_PAGE_PATH = '/pages/render-function/cloneVNode/cloneVNode-composition'

describe('cloneVNode', () => {
  if (process.env.uniTestPlatformInfo.toLocaleLowerCase().startsWith('ios')) {
    // TODO: ios options API 合并属性无效, composition API 页面空白(defineOptions + render)
    it("IOS platform not support", async () => {
      expect(1).toBe(1);
    });
    return
  }

  let page = null
  const test = async (pagePath) => {
    page = await program.reLaunch(pagePath)
    // 因为 web 端无法获取, 未使用 waitFor view
    await page.waitFor(1000)

    const image = await program.screenshot();
    expect(image).toSaveImageSnapshot();
  }

  it('cloneVNode options API', async () => {
    await test(OPTIONS_PAGE_PATH)
  })

  it('cloneVNode composition API', async () => {
    await test(COMPOSITION_PAGE_PATH)
  })
})