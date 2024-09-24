jest.setTimeout(30000)
const OPTIONS_PAGE_PATH = '/pages/lifecycle/page/onBackPress/on-back-press-options'
const OPTIONS_CHILD_PAGE_PATH = '/pages/lifecycle/page/onBackPress/on-back-press-child-options'
const COMPOSITION_PAGE_PATH = '/pages/lifecycle/page/onBackPress/on-back-press-composition'
const COMPOSITION_CHILD_PAGE_PATH = '/pages/lifecycle/page/onBackPress/on-back-press-child-composition'

describe('onBackPress 返回值', () => {
  const test = async (pagePath, childPagePath) => {
    const page = await program.navigateTo(pagePath)
    await page.waitFor('view')
    expect(page.path).toBe(pagePath.substring(1))
    await page.callMethod('goChildPage')
    await page.waitFor(800)
    const childPage = await program.currentPage()
    await childPage.waitFor('view')
    expect(childPage.path).toBe(childPagePath.substring(1))
    await program.navigateBack()
    let currentPage = await program.currentPage()
    expect(currentPage.path).toBe(pagePath.substring(1))
    await program.navigateBack()
    currentPage = await program.currentPage()
    expect(currentPage.path).toBe(pagePath.substring(1))
    const currentPageData = await currentPage.data('backPressOptions')
    expect(currentPageData.from).toBe('navigateBack')

  }
  it('onBackPress options API', async () => {
    await test(OPTIONS_PAGE_PATH, OPTIONS_CHILD_PAGE_PATH)
  })

  it('onBackPress composition API', async () => {
    await test(COMPOSITION_PAGE_PATH, COMPOSITION_CHILD_PAGE_PATH)
  })
});