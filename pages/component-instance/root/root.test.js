const PAGE_PATH = '/pages/component-instance/root/root'

describe('$root', () => {
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
