const PAGE_PATH = '/pages/directive/v-html/v-html'

describe('v-html', () => {
  let page
  beforeAll(async () => {
    page = await program.reLaunch(PAGE_PATH)
    await page.waitFor('view')
  })
  it('basic', async () => {
    // 补充延迟确保渲染完成
    await page.waitFor(500)
    
    const image = await program.screenshot()
    expect(image).toMatchImageSnapshot()
  })
})