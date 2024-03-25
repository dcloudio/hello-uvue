const PAGE_PATH = '/pages/component-instance/root/root'

describe('$root', () => {
  if (process.env.uniTestPlatformInfo.startsWith('web')) {
    // TODO: web 端$root指向和app端不同，具体待定
    it('web', async () => {
      expect(1).toBe(1)
    })
    return
  }
  let page
  beforeAll(async () => {
    page = await program.reLaunch(PAGE_PATH)
    await page.waitFor(500)
  })

  it('$root 属性生效', async () => {
    const root = await page.callMethod('getRoot')

    expect(root).toBe(true)
  })
})
