const PAGE_PATH = '/pages/component-instance/nextTick-function/nextTick-function'

describe('$nextTick()', () => {
  let page
  beforeAll(async () => {
    page = await program.reLaunch(PAGE_PATH)
    await page.waitFor(500)
  })

  it('$nextTick() 回调方式', async () => {
    const data = await page.data()

    expect(data.nextTickBeforeWidth).toBe(100)
    expect(data.nextTickAfterWidth).toBe(200)
  });

  it('$nextTick() Promise方式', async () => {
    const data = await page.data()

    expect(data.nextTickBeforeHeight).toBe(100)
    expect(data.nextTickAfterHeight).toBe(200)
  });
})
