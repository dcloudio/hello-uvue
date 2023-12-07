const PAGE_PATH = '/pages/rendering/force-update/force-update'

describe('$forceUpdate', () => {
  if (process.env.uniTestPlatformInfo.startsWith('android')) {
    let page
    beforeAll(async () => {
      page = await program.reLaunch(PAGE_PATH)
      await page.waitFor('view')
    })
    it('basic', async () => {
      const timeEl = await page.$('.time')
      const timeText1 = await timeEl.text()

      const triggerForceUpdateBtn = await page.$('.trigger-force-update-btn')
      await triggerForceUpdateBtn.tap()

      const timeText2 = await timeEl.text()
      expect(parseInt(timeText2)).toBeGreaterThan(parseInt(timeText1))
    })
  } else {
    // TODO: web 端暂不支持
    it('web', async () => {
      expect(1).toBe(1)
    })
  }
})
