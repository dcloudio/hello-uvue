const PAGE_PATH = '/pages/component-instance/slots/slots'

describe('$slots', () => {
  let page
  beforeAll(async () => {
    page = await program.reLaunch(PAGE_PATH)
    await page.waitFor(500)
  })

  it('$slots 生效', async () => {
    const slotComp = await page.$('.slot-comp')
    const hasSlots = await slotComp.callMethod('hasSlots')

    expect(hasSlots).toBe(true)
  })
})
