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

    const changeDataBtn = await page.$('#change-data-btn')
    await changeDataBtn.tap()

    expect(await count.text()).toBe('1')
    expect(await str.text()).toBe('new str')
    expect(await bool.text()).toBe('true')
    expect(await arr.text()).toBe('[1,2,3,4]')
    expect(await counterCount.text()).toBe('1')
  })

})