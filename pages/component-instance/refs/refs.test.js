const PAGE_PATH = '/pages/component-instance/refs/refs-options'
const PAGE_COMPOSITION_PATH = '/pages/component-instance/refs/refs-composition'

describe('$refs', () => {
  let page

  it('$refs 选项式 API 属性生效', async () => {
    page = await program.reLaunch(PAGE_PATH)
    await page.waitFor(500)

    expect.assertions(2)
    const data = await page.data()

    expect(data.existRef).toBe(true)
    expect(data.exisChildRef).toBe(true)
  })

  it('$refs 组合式 API 属性生效', async () => {
    page = await program.reLaunch(PAGE_COMPOSITION_PATH)
    await page.waitFor(500)

    expect.assertions(2)
    const data = await page.data()
    console.log('data: ',data);
    expect(data.refObject.existRef).toBe(true)
    expect(data.refObject.exisChildRef).toBe(true)
  })
})
