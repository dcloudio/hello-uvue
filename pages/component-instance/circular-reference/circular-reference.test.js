const OPTIONS_PAGE_PATH = '/pages/component-instance/circular-reference/circular-reference-options'
const COMPOSITION_PAGE_PATH = '/pages/component-instance/circular-reference/circular-reference-composition'

describe('', () => {
  let page

  const test = async (page) => {
    if (process.env.uniTestPlatformInfo.toLowerCase().includes('android')) {
      // cross reference
      const childA = await page.$$('.child-a')
      expect(childA.length).toBe(3)

      const childB = await page.$$('.child-b')
      expect(childB.length).toBe(2)
    }

    // reference self
    const childC = await page.$$('.child-c')
    expect(childC.length).toBe(5)
  }

  it('circular-reference options API', async () => {
    page = await program.reLaunch(OPTIONS_PAGE_PATH)
    await page.waitFor('view')

    await test(page)
  })

  it('circular-reference composition API', async () => {
    page = await program.reLaunch(COMPOSITION_PAGE_PATH)
    await page.waitFor('view')

    await test(page)
  })
})