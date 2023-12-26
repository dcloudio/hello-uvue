const PAGE_PATH = '/pages/component-instance/props/props'

describe('$props', () => {
  let page
  beforeAll(async () => {
    page = await program.reLaunch(PAGE_PATH)
    await page.waitFor(500)
  })

  it('$props 属性生效', async () => {
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
		expect((await checkTypeArr.text()).replaceAll('\n', '')).toBe('arr: ["a","b","c"]')
		const fooArr = await page.$('#foo-arr')
		expect((await fooArr.text()).replaceAll('\n', '')).toBe('arr: [1,2,3]')
  })
})
