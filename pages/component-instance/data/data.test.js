const PAGE_PATH = '/pages/component-instance/data/data'

describe('$data', () => {
  let page
  beforeAll(async () => {
    page = await program.reLaunch(PAGE_PATH)
    await page.waitFor(500)
  })

  it('should data.val === 2', async () => {
    const plusButton = await page.$('.plus')
    await plusButton.tap()

    const val = await page.$('.val')
    expect(await val.text()).toBe('2')
  });

  it('should data.val === 1', async () => {
    const minusButton = await page.$('.minus')
    await minusButton.tap()

    const val = await page.$('.val')
    expect(await val.text()).toBe('1')
  })
})
