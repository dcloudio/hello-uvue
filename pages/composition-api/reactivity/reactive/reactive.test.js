const PAGE_PATH = '/pages/composition-api/reactivity/reactive/reactive'

describe('reactive', () => {
  let page = null
  beforeAll(async () => {
    page = await program.reLaunch(PAGE_PATH)
    await page.waitFor('view')
  })
  it('basic', async () => {
    const count = await page.$('#count')
    expect(await count.text()).toBe('count: 0')

    const objStr = await page.$('#obj-str')
    expect(await objStr.text()).toBe('obj.str: default str')

    const objNum = await page.$('#obj-num')
    expect(await objNum.text()).toBe('obj.num: 0')

    const objArr = await page.$('#obj-arr')
    expect((await objArr.text()).replaceAll('\n', '')).toBe('obj.arr: ["a","b","c"]')

    const updateBtn = await page.$('.update-btn')
    await updateBtn.tap()

    expect(await count.text()).toBe('count: 2')
    expect(await objStr.text()).toBe('obj.str: new str')
    expect(await objNum.text()).toBe('obj.num: 2')
    expect((await objArr.text()).replaceAll('\n', '')).toBe('obj.arr: ["a","b","c","d"]')
  })
})