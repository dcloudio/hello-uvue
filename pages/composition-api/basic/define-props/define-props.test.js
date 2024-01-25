const PAGE_PATH = '/pages/composition-api/basic/define-props/define-props'

describe('defineProps', () => {
	const isSafari = process.env.uniTestPlatformInfo.indexOf('safari') > -1
  let page = null
  beforeAll(async () => {
    page = await program.reLaunch(PAGE_PATH)
    await page.waitFor('view')
  })
  it('basic', async () => {
    const arrayLiteralStr = await page.$('#array-literal-str')
    expect(await arrayLiteralStr.text()).toBe('str: default str')
    const arrayLiteralNum = await page.$('#array-literal-num')
    expect(await arrayLiteralNum.text()).toBe('num: 0')
    const arrayLiteralBool = await page.$('#array-literal-bool')
    expect(await arrayLiteralBool.text()).toBe('bool: false')
    const arrayLiteralArr = await page.$('#array-literal-arr')
    expect(await arrayLiteralArr.text()).toBe(isSafari ? 'arr: [ "a", "b", "c"]' : 'arr: ["a","b","c"]')
    
    const arrayLiteralObj = await page.$('#array-literal-obj')
    if (process.env.uniTestPlatformInfo.startsWith('android')) {
      expect(await arrayLiteralObj.text()).toBe('obj: {"arr":[1,2,3],"num":0,"str":"obj str"}')
    }
    if (process.env.uniTestPlatformInfo.startsWith('web')) {
      expect(await arrayLiteralObj.text()).toBe(
       isSafari ? 'obj: { "str": "obj str", "num": 0, "arr": [ 1, 2, 3 ]}' : 'obj: {"str": "obj str","num": 0,"arr": [1,2,3]}')
    }

    const arrayLiteralFn = await page.$('#array-literal-fn')
    expect(await arrayLiteralFn.text()).toBe('fn: fn res')

    const objectLiteralStr = await page.$('#object-literal-str')
    expect(await objectLiteralStr.text()).toBe('str: default str')
    const objectLiteralNum = await page.$('#object-literal-num')
    expect(await objectLiteralNum.text()).toBe('num: 0')
    const objectLiteralBool = await page.$('#object-literal-bool')
    expect(await objectLiteralBool.text()).toBe('bool: false')
    const objectLiteralArr = await page.$('#object-literal-arr')
    expect(await objectLiteralArr.text()).toBe(isSafari ? 'arr: [ "a", "b", "c"]' : 'arr: ["a","b","c"]')
    
    const objectLiteralObj = await page.$('#object-literal-obj')
    if (process.env.uniTestPlatformInfo.startsWith('android')) {
      expect(await objectLiteralObj.text()).toBe('obj: {"a":1}')
    }
    if (process.env.uniTestPlatformInfo.startsWith('web')) {
      expect(await objectLiteralObj.text()).toBe(isSafari ? 'obj: { "a": 1}' : 'obj: {"a": 1}')
    }
    
    const objectLiteralFn = await page.$('#object-literal-fn')
    expect(await objectLiteralFn.text()).toBe('fn: fn res')

    const typeStr = await page.$('#type-str')
    expect(await typeStr.text()).toBe('str: default str')
    const typeNum = await page.$('#type-num')
    expect(await typeNum.text()).toBe('num: 0')
    const typeBool = await page.$('#type-bool')
    expect(await typeBool.text()).toBe('bool: false')
    const typeArr = await page.$('#type-arr')
    expect(await typeArr.text()).toBe(isSafari ? 'arr: [ "a", "b", "c"]' : 'arr: ["a","b","c"]')
    
    const typeObj = await page.$('#type-obj')
    if (process.env.uniTestPlatformInfo.startsWith('android')) {
      expect(await typeObj.text()).toBe('obj: {"arr":[1,2,3],"num":0,"str":"obj str"}')
    }
    if (process.env.uniTestPlatformInfo.startsWith('web')) {
      expect(await typeObj.text()).toBe(isSafari ? 'obj: { "str": "obj str", "num": 0, "arr": [ 1, 2, 3 ]}' : 'obj: {"str": "obj str","num": 0,"arr": [1,2,3]}')

    }
    const typeFn = await page.$('#type-fn')
    expect(await typeFn.text()).toBe('fn: fn res')
  })
})