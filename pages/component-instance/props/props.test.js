const PAGE_PATH = '/pages/component-instance/props/props'

describe('$props', () => {
  let page
  beforeAll(async () => {
    page = await program.reLaunch(PAGE_PATH)
    await page.waitFor(500)
  })

  it('$props 属性生效', async () => {
    const string = await page.$('.string')
    const number = await page.$('.number')
    const boolean = await page.$('.boolean')

    expect(await string.text()).toBe('abcd')
    expect(await number.text()).toBe('12345')
    expect(await boolean.text()).toBe('true')
  })
})
