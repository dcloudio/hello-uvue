const PAGE_PATH = '/pages/directive/v-bind/v-bind-style'

describe('v-bind-style', () => {
  let page
  beforeAll(async () => {
    page = await program.reLaunch(PAGE_PATH)
    await page.waitFor(500)
  })
  it('basic', async () => {
    const text = await page.$('.text-font-size')
    const view = await page.$('.view-style')

    expect(await text.style('fontSize')).toBe('14px')
    expect(await view.style('backgroundColor')).toBe('#008000')
    expect(await view.style('borderWidth')).toBe('2px')
    expect(await view.style('borderColor')).toBe('#0000FF')
  })
})