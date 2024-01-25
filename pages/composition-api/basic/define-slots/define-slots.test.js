const PAGE_PATH = '/pages/composition-api/basic/define-slots/define-slots'

describe('defineSlots', () => {
	const isSafari = process.env.uniTestPlatformInfo.indexOf('safari') > -1
  let page = null
  beforeAll(async () => {
    page = await program.reLaunch(PAGE_PATH)
    await page.waitFor('view')
  })
  it('basic', async () => {
    const slotHeader = await page.$('#slot-header')
    expect(await slotHeader.text()).toBe('header slot msg: foo msg')

    const slotContent = await page.$('#slot-default')
    expect(await slotContent.text()).toBe('default slot num: 0')

    const slotFooter = await page.$('#slot-footer')
    expect(await slotFooter.text()).toBe(isSafari ? 'footer slot arr: [ "a", "b", "c"]' : 'footer slot arr: ["a","b","c"]')
  })
})