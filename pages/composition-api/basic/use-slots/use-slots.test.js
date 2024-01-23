const PAGE_PATH = '/pages/composition-api/basic/use-slots/use-slots'

describe('useSlots', () => {
  let page = null
  beforeAll(async () => {
    page = await program.reLaunch(PAGE_PATH)
    await page.waitFor('view')
  })
  it('basic', async () => {
    const slotHeader = await page.$('#slot-header')
    expect(await slotHeader.text()).toBe('header slot num: 0')

    const slotContent = await page.$('#slot-default')
    expect(await slotContent.text()).toBe('default slot msg: default msg')

    const slotFooter = await page.$('#slot-footer')
    expect((await slotFooter.text()).replaceAll('\n', '')).toBe('footer slot arr: ["a","b","c"]')

    const checkUseSlotsRes = await page.$('#check-use-slots-res')
    expect(await checkUseSlotsRes.text()).toBe('check useSlots result: false')

    const checkUseSlotsBtn = await page.$('.check-use-slots-btn')
    await checkUseSlotsBtn.tap()

    expect(await checkUseSlotsRes.text()).toBe('check useSlots result: true')
  })
})