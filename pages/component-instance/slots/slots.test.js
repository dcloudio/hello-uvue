const PAGE_PATH = '/pages/component-instance/slots/slots-options'
const PAGE_COMPOSITION_PATH = '/pages/component-instance/slots/slots-composition'

describe('$slots', () => {
  let page

  it('$slots Options API 生效', async () => {
    page = await program.reLaunch(PAGE_PATH)
    await page.waitFor(500)
    const slotComp = await page.$('.slot-comp')
    const hasSlots = await slotComp.callMethod('hasSlots')
    expect(hasSlots).toBe(true)
  })

  it('$slots Composition API 生效', async () => {
    page = await program.reLaunch(PAGE_COMPOSITION_PATH)
    await page.waitFor(500)
    const slotComp = await page.$('.slot-comp')
    const hasSlots = await slotComp.callMethod('hasSlots')
    expect(hasSlots).toBe(true)
  })
})
