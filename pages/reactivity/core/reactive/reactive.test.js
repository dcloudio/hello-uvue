const PAGE_PATH = '/pages/reactivity/core/reactive/reactive'

describe('reactive', () => {
  let page = null
  beforeAll(async () => {
    page = await program.reLaunch(PAGE_PATH)
    await page.waitFor('view')
  })
  it('basic', async () => {
    const count = await page.$('#count')
    expect(await count.text()).toBe('0')

    const objStr = await page.$('#obj-str')
    expect(await objStr.text()).toBe('default str')

    const objNum = await page.$('#obj-num')
    expect(await objNum.text()).toBe('0')

    const objArr = await page.$('#obj-arr')
    expect(await objArr.text()).toBe('["a","b","c"]')

    const updateBtn = await page.$('#update-btn')
    await updateBtn.tap()

    expect(await count.text()).toBe('2')
    expect(await objStr.text()).toBe('new str')
    expect(await objNum.text()).toBe('2')
    expect(await objArr.text()).toBe('["a","b","c","d"]')
  })
})