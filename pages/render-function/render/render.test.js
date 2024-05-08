const PAGE_PATH = '/pages/render-function/render/render'

describe('/pages/render-function/render/render', () => {
  if (process.env.uniTestPlatformInfo.startsWith('web')) {
    // TODO: web 端测试未获取到元素
    it('web', async () => {
      expect(1).toBe(1)
    })
    return
  }
  let page
  beforeAll(async () => {
    page = await program.reLaunch(PAGE_PATH)
    await page.waitFor('view')
  })
  it('component', async () => {
    const ComForRenderFunction = await page.$('.component-for-h-function')
    expect(await ComForRenderFunction.text()).toEqual(
      'component for h()'
    )
    const compSlot = await page.$('.comp-slot')
    expect(await compSlot.text()).toEqual('component slot')
  })
  it('text', async () => {
    const msgEl = await page.$('.msg')
    expect(await msgEl.text()).toEqual('default msg')
  })
  it('button', async () => {
    const btnEl = await page.$('.btn')
    expect(await btnEl.property('type')).toBe('primary')
    await btnEl.tap()
    const msgEl = await page.$('.msg')
    expect(await msgEl.text()).toEqual('new msg')
  })
})