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

    const updateCountBtn = await page.$('#update-count-btn')
    await updateCountBtn.tap()
    expect(await count.text()).toBe('1')

    const updateObjStrBtn = await page.$('#update-obj-str-btn')
    await updateObjStrBtn.tap()
    expect(await objStr.text()).toBe('new str')

    const updateObjNumBtn = await page.$('#update-obj-num-btn')
    await updateObjNumBtn.tap()
    expect(await count.text()).toBe('2')
    expect(await objNum.text()).toBe('2')

    const updateObjArrBtn = await page.$('#update-obj-arr-btn')
    await updateObjArrBtn.tap()
    expect(await objArr.text()).toBe('["a","b","c","d"]')
  })
})