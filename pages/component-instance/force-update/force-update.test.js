const PAGE_PATH = '/pages/component-instance/force-update/force-update'

describe('$forceUpdate', () => {
  let page
  beforeAll(async () => {
    page = await program.reLaunch(PAGE_PATH)
    await page.waitFor('view')
  })
  it('basic', async () => {
    const timeEl = await page.$('.time')
    const timeText1 = (await timeEl.text()).replace('Date.now(): ', '')

    const triggerForceUpdateBtn = await page.$('.trigger-force-update-btn')
    await triggerForceUpdateBtn.tap()

    const timeText2 = (await timeEl.text()).replace('Date.now(): ', '')
    expect(parseInt(timeText2)).toBeGreaterThanOrEqual(parseInt(timeText1))
  })
})
