const OPTIONS_PAGE_PATH = '/pages/render-function/resolveComponent/resolveComponent-options'
const COMPOSITION_PAGE_PATH = '/pages/render-function/resolveComponent/resolveComponent-composition'

describe('resolveComponent', () => {
  let page = null
  const test = async (pagePath) => {
    page = await program.reLaunch(pagePath)
    // 因为 web 端无法获取, 未使用 waitFor view
    await page.waitFor(1000)

    const image = await program.screenshot();
    expect(image).toSaveImageSnapshot();
  }

  it('resolveComponent options API', async () => {
    await test(OPTIONS_PAGE_PATH)
  })

  it('resolveComponent composition API', async () => {
    await test(COMPOSITION_PAGE_PATH)
  })
})