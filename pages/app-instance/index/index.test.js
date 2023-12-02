const PAGE_PATH = '/pages/app-instance/index/index'

describe('app-instance', () => {
  it('basic', async () => {
    const page = await program.reLaunch(PAGE_PATH)
    await page.waitFor('view')
    const CompForAppComponent = await page.$('.component-for-app-component')
    const CompForAppComponentText = await CompForAppComponent.text()
    expect(CompForAppComponentText).toBe('component for app.component')
  })
})
