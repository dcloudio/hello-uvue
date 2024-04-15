const OPTIONS_PAGE_PATH = '/pages/component-instance/props/props-options'
const COMPOSITION_PAGE_PATH = '/pages/component-instance/props/props-composition'

describe('props', () => {
  let page
  const test = async (page) => {
    const arrayLiteralStr = await page.$('#array-literal-str')
    expect(await arrayLiteralStr.text()).toBe('str')
    
    const arrayLiteralNum = await page.$('#array-literal-num')
    expect(await arrayLiteralNum.text()).toBe('10')
    
    const arrayLiteralBool = await page.$('#array-literal-bool')
    expect(await arrayLiteralBool.text()).toBe('true')
    
    const arrayLiteralObj = await page.$('#array-literal-obj')
    expect(await arrayLiteralObj.text()).toBe('{"age":18}')
    
    const arrayLiteralArr = await page.$('#array-literal-arr')
    expect(await arrayLiteralArr.text()).toBe('["a","b","c"]')
    
    const objectTypeStr = await page.$('#object-type-str')
    expect(await objectTypeStr.text()).toBe('str')
    
    const objectTypeNum = await page.$('#object-type-num')
    expect(await objectTypeNum.text()).toBe('10')
    
    const objectTypeBool = await page.$('#object-type-bool')
    expect(await objectTypeBool.text()).toBe('true')
    
    const objectTypeObj = await page.$('#object-type-obj')
    expect(await objectTypeObj.text()).toBe('{"age":18}')
    
    const objectTypeArr = await page.$('#object-type-arr')
    expect(await objectTypeArr.text()).toBe('["a","b","c"]')
    
    const sameNamePropDefaultValueArr = await page.$('#same-name-prop-default-value-arr')
    expect(await sameNamePropDefaultValueArr.text()).toBe('[1,2,3]')
  }

  it('props 选项式 API', async () => {
    page = await program.reLaunch(OPTIONS_PAGE_PATH)
    await test(page)
  });

  it('props 组合式 API', async () => {
    page = await program.reLaunch(COMPOSITION_PAGE_PATH)
    await test(page)
  })
})