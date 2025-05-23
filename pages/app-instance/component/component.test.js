const PAGE_PATH = '/pages/app-instance/component/component'

describe('app-instance', () => {
  let page = null
  beforeAll(async () => {
    page = await program.reLaunch(PAGE_PATH)
    await page.waitFor(1000)
  })
  it('app.component', async () => {
    const CompForAppComponent = await page.$('.component-for-app-component')
    const CompForAppComponentText = await CompForAppComponent.text()
    expect(CompForAppComponentText).toBe('component for app.component')
  })
})
