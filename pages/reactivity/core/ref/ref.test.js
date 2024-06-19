const PAGE_PATH = '/pages/reactivity/core/ref/ref'

describe('ref', () => {
  let page = null
  beforeAll(async () => {
    page = await program.reLaunch(PAGE_PATH)
    await page.waitFor('view')
  })
  it('basic', async () => {
    const count = await page.$('#count')
    expect(await count.text()).toBe('0')
    const str = await page.$('#str')
    expect(await str.text()).toBe('default str')
    const bool = await page.$('#bool')
    expect(await bool.text()).toBe('false')
    const arr = await page.$('#arr')
    expect(await arr.text()).toBe('[1,2,3]')
    const counterCount = await page.$('#counter-count')
    expect(await counterCount.text()).toBe('0')

    const changeCountBtn = await page.$('#change-count-btn')
    await changeCountBtn.tap()
    expect(await count.text()).toBe('1')

    const changeStrBtn = await page.$('#change-str-btn')
    await changeStrBtn.tap()
    expect(await str.text()).toBe('new str')

    const changeBoolBtn = await page.$('#change-bool-btn')
    await changeBoolBtn.tap()
    expect(await bool.text()).toBe('true')

    const changeArrBtn = await page.$('#change-arr-btn')
    await changeArrBtn.tap()
    expect(await arr.text()).toBe('[1,2,3,4]')

    const changeCounterBtn = await page.$('#change-counter-btn')
    await changeCounterBtn.tap()
    expect(await counterCount.text()).toBe('1')
  })

})