const PAGE_PATH = '/pages/directive/v-show/v-show'

describe('v-show', () => {
  let page
  beforeAll(async () => {
    page = await program.reLaunch(PAGE_PATH)
    await page.waitFor(500)
  })
  it('style::display', async () => {
    const element = await page.$('.v-show-content')
    expect(await element.style('display')).toBe('flex')

    const toggle = await page.$('.btn-toggle')
    await toggle.tap()
    expect(await element.style('display')).toBe('none')
    await toggle.tap()
    expect(await element.style('display')).toBe('flex')
  })
  it('screenshot', async () => {
    const toggle = await page.$('.btn-toggle')
    const element = await page.$('.hello')

    const image1 = await program.screenshot()
    expect(image1).toMatchSnapshot()

    await toggle.tap()
    await page.waitFor(20)
    const image2 = await program.screenshot()
    expect(image2).toMatchSnapshot()

    await toggle.tap()
    await page.waitFor(20)
    const image3 = await program.screenshot()
    expect(image3).toMatchSnapshot()
  })
})