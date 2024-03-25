const PAGE_PATH = '/pages/component-instance/props/props'

describe('$props', () => {
  const isWeb = process.env.uniTestPlatformInfo.startsWith('web')
  const isSafari = process.env.uniTestPlatformInfo.toLowerCase().indexOf('safari') > -1
  let page
  beforeAll(async () => {
    page = await program.reLaunch(PAGE_PATH)
    await page.waitFor(500)
  })

  it('$props 属性生效', async () => {
    const arrayLiteralStr = await page.$('#array-literal-str')
    expect(await arrayLiteralStr.text()).toBe('abcd')
    const arrayLiteralNum = await page.$('#array-literal-num')
    expect(await arrayLiteralNum.text()).toBe('12345')
    const arrayLiteralBool = await page.$('#array-literal-bool')
    expect(await arrayLiteralBool.text()).toBe('true')
    const arrayLiteralObj = await page.$('#array-literal-obj')
    if (isWeb) {
      expect(await arrayLiteralObj.text()).toBe(isSafari ? '{ "count": 1}' : '{"count": 1}')
    } else {
      expect(await arrayLiteralObj.text()).toBe('{"count":1}')
    }
    const arrayLiteralArr = await page.$('#array-literal-arr')
    expect(await arrayLiteralArr.text()).toBe(isSafari ? '[ 1, 2, 3]' : '[1,2,3]')

    const string = await page.$('.string')
    const number = await page.$('.number')
    const boolean = await page.$('.boolean')
    const arrayString = await page.$('.array-string')
    const object = await page.$('.object')

    expect(await string.text()).toBe('abcd')
    expect(await number.text()).toBe('12345')
    expect(await boolean.text()).toBe('true')
    expect(await arrayString.text()).toBe('str1')
    expect(await object.text()).toBe('1')

    const checkTypeArr = await page.$('#check-type-arr')
    expect(await checkTypeArr.text()).toBe(isSafari ? 'arr: [ "a", "b", "c"]' : 'arr: ["a","b","c"]')
    const fooArr = await page.$('#foo-arr')
    expect(await fooArr.text()).toBe(isSafari ? 'arr: [ 1, 2, 3]' : 'arr: [1,2,3]')
  })
})