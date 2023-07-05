const PAGE_PATH = '/pages/component-instance/options/options'

describe('$options', () => {
  let page
  beforeAll(async () => {
    page = await program.reLaunch(PAGE_PATH)
    await page.waitFor(500)
  })

  it('获取到组件name属性', async () => {
    const data = await page.data()
    expect(data.name).toBe('$options')
  });
})
