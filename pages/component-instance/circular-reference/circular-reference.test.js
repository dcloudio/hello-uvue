const PAGE_PATH = '/pages/component-instance/circular-reference/circular-reference'

describe('circular-reference', () => {
  let page
  beforeAll(async () => {
    page = await program.reLaunch(PAGE_PATH)
    await page.waitFor(1000)
  })

  if (process.env.uniTestPlatformInfo.toLowerCase().includes('android')) {
    it('cross reference', async () => {
      const childA = await page.$$('.child-a')
      expect(childA.length).toBe(3)

      const childB = await page.$$('.child-b')
      expect(childB.length).toBe(2)
    })
  }

  it('reference self', async () => {
    const childC = await page.$$('.child-c')
    expect(childC.length).toBe(5)
  })
})