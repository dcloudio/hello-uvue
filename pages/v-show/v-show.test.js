const PAGE_PATH = '/pages/v-show/v-show'

describe('v-show', () => {
  let page
  beforeAll(async () => {
    page = await program.reLaunch(PAGE_PATH)
    await page.waitFor(500)
  })
  it('style::display', async () => {
    const element = await page.$('.hello')
    expect(await element.style('display')).toBe('flex')

    const toggle = await page.$('.toggle')
    await toggle.tap()
    expect(await element.style('display')).toBe('none')
    await toggle.tap()
    expect(await element.style('display')).toBe('flex')
  })
  it('screenshot', async () => {
    const toggle = await page.$('.toggle')
    const element = await page.$('.hello')

    await program.screenshot({
      path: "static/v-show/screenshot-show1.png"
    })

    await toggle.tap()

    await toggle.tap()
    await program.screenshot({
      path: "static/v-show/screenshot-show2.png"
    })
  })
})