const PAGE_PATH = '/pages/directive/v-bind/v-bind-css'

describe('v-bind-css', () => {
  if (!process.env.uniTestPlatformInfo.startsWith('web')) {
    it('not-support', async () => {
      expect(1).toBe(1)
    })
    return
  }
  let page
  beforeAll(async () => {
    page = await program.reLaunch(PAGE_PATH)
    await page.waitFor(500)
  })
  it('screenshot', async () => {
    await page.waitFor(500)
    const image = await program.screenshot({
      fullPage: true
    });
    expect(image).toSaveImageSnapshot();
  })
})