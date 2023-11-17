const PAGE_PATH = '/pages/component-instance/circular-reference/circular-reference'

describe('circular-reference', () => {
  let page
  beforeAll(async () => {
    page = await program.reLaunch(PAGE_PATH)
    await page.waitFor(500)
  })

  it('render', async () => {
    const child_a = await page.$$('.child-a-child-b')
    expect(child_a.length).toBe(5)

    const child_b = await page.$$('.child-b-child-a')
    expect(child_b.length).toBe(5)

    const child_c = await page.$$('.child-c-child-c')
    expect(child_c.length).toBe(10)
  })
})