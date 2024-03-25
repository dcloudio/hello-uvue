const PAGE_PATH = '/pages/composition-api/reactivity/computed/computed'

describe('computed', () => {
	const isSafari = process.env.uniTestPlatformInfo.toLowerCase().indexOf('safari') > -1
  let page = null
  beforeAll(async () => {
    page = await program.reLaunch(PAGE_PATH)
    await page.waitFor('view')
  })
  it('basic', async () => {
    const count = await page.$('#count')
    expect(await count.text()).toBe('count: 0')
    const doubleCount = await page.$('#double-count')
    expect(await doubleCount.text()).toBe('computed double count: 0')

    const objArr = await page.$('#obj-arr')
    expect(await objArr.text()).toBe(isSafari ? 'obj.arr: [ 1, 2, 3]' : 'obj.arr: [1,2,3]')
    const objArrLen = await page.$('#obj-arr-len')
    expect(await objArrLen.text()).toBe('computed obj.arr.length: 3')

    const updateBtn = await page.$('#update-btn')
    await updateBtn.tap()

    expect(await count.text()).toBe('count: 1')
    expect(await doubleCount.text()).toBe('computed double count: 2')
    expect(await objArr.text()).toBe(isSafari ? 'obj.arr: [ 1, 2, 3, 4]' : 'obj.arr: [1,2,3,4]')
    expect(await objArrLen.text()).toBe('computed obj.arr.length: 4')
  })

})