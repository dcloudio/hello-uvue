const PAGE_PATH = '/pages/composition-api/reactivity/ref/ref'

describe('ref', () => {
  let page = null
  beforeAll(async () => {
    page = await program.reLaunch(PAGE_PATH)
    await page.waitFor('view')
  })
  it('basic', async () => {
    const count1 = await page.$('#count1')
    expect(await count1.text()).toBe('count1: 0')
    const count2 = await page.$('#count2')
    expect(await count2.text()).toBe('count2: 0')
    const counterCount = await page.$('#counter-count')
    expect(await counterCount.text()).toBe('counter.count: 0')

    const incrementBtn = await page.$('.increment-btn')
    await incrementBtn.tap()

    expect(await count1.text()).toBe('count1: 2')
    expect(await count2.text()).toBe('count2: 2')
    expect(await counterCount.text()).toBe('counter.count: 1')
  })

})