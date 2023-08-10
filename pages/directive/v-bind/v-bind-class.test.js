const PAGE_PATH = '/pages/directive/v-bind/v-bind-class'

describe('v-bind-class', () => {
  let page
  beforeAll(async () => {
    page = await program.reLaunch(PAGE_PATH)
    await page.waitFor(500)
  })
  it('rect', async () => {
    const rect1 = await page.$('.rect1')
    const rect2 = await page.$('.rect2')
    const rect3 = await page.$('.rect3')
    expect(await rect1.attribute('class')).toBe('rect rect1 red')
    expect(await rect2.attribute('class')).toBe('rect rect2 class-a class-b')
    expect(await rect3.attribute('class')).toBe('rect rect3 class-a class-b class-c')
  })
})