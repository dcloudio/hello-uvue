const PAGE_PATH = '/pages/composition-api/reactivity/readonly/readonly'

describe('ref', () => {
  let page = null
  beforeAll(async () => {
    page = await program.reLaunch(PAGE_PATH)
    await page.waitFor('view')
  })
  it('basic', async () => {
    const dataStr = await page.$('#data-str')
    expect(await dataStr.text()).toBe('data.str: default str')
    const dataNum = await page.$('#data-num')
    expect(await dataNum.text()).toBe('data.num: 0')
    const dataArr = await page.$('#data-arr')
    expect(await dataArr.text()).toBe('data.arr: ["a","b","c"]')

    const readonlyDataStr = await page.$('#readonly-data-str')
    expect(await readonlyDataStr.text()).toBe('readonly data.str: default str')
    const readonlyDataNum = await page.$('#readonly-data-num')
    expect(await readonlyDataNum.text()).toBe('readonly data.num: 0')
    const readonlyDataArr = await page.$('#readonly-data-arr')
    expect(await readonlyDataArr.text()).toBe('readonly data.arr: ["a","b","c"]')

    const updateDataBtn = await page.$('#update-data-btn')
    await updateDataBtn.tap()

    expect(await dataStr.text()).toBe('data.str: new str')
    expect(await dataNum.text()).toBe('data.num: 1')
    expect(await dataArr.text()).toBe('data.arr: ["a","b","c","d"]')
    expect(await readonlyDataStr.text()).toBe('readonly data.str: new str')
    expect(await readonlyDataNum.text()).toBe('readonly data.num: 1')
    expect(await readonlyDataArr.text()).toBe('readonly data.arr: ["a","b","c","d"]')

    const updateReadonlyDataBtn = await page.$('#update-readonly-data-btn')
    await updateReadonlyDataBtn.tap()

    expect(await dataStr.text()).toBe('data.str: new str')
    expect(await dataNum.text()).toBe('data.num: 1')
    expect(await dataArr.text()).toBe('data.arr: ["a","b","c","d"]')
    expect(await readonlyDataStr.text()).toBe('readonly data.str: new str')
    expect(await readonlyDataNum.text()).toBe('readonly data.num: 1')
    expect(await readonlyDataArr.text()).toBe('readonly data.arr: ["a","b","c","d"]')
  })
})