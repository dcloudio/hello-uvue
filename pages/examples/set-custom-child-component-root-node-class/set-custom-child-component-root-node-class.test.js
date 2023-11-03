const PAGE_PATH =
  '/pages/examples/set-custom-child-component-root-node-class/set-custom-child-component-root-node-class'

describe('自定义组件中使用 class 定制另一个自定义组件根节点样式', () => {
  let page
  beforeAll(async () => {
    page = await program.reLaunch(PAGE_PATH)
    await page.waitFor('view')
  })

  it('screenshot', async () => {
    const image = await program.screenshot()
    expect(image).toMatchImageSnapshot()
  })
})
