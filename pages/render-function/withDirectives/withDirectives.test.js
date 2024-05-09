const OPTIONS_PAGE_PATH = '/pages/render-function/withDirectives/withDirectives-options'
const COMPOSITION_PAGE_PATH = '/pages/render-function/withDirectives/withDirectives-composition'

describe('withDirectives', () => {
  let page = null
  const test = async (pagePath) => {
    page = await program.reLaunch(pagePath)
    await page.waitFor(1000)

    const image = await program.screenshot();
    expect(image).toSaveImageSnapshot();
  }

  it('withDirectives options API', async () => {
    await test(OPTIONS_PAGE_PATH)
  })

  it('withDirectives composition API', async () => {
    await test(COMPOSITION_PAGE_PATH)
  })
})