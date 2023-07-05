const PAGE_PATH = '/pages/component-instance/refs/refs'

describe('$refs', () => {
  let page
  beforeAll(async () => {
    page = await program.reLaunch(PAGE_PATH)
    await page.waitFor(500)
  })

  it('$refs 属性生效', async () => {
    const data = await page.data()

    expect(data.existRef).toBe(true)
  });
})
