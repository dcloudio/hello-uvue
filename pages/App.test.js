const HOME_PATH = '/pages/index/index'

describe("app launch & show options", () => {
  it("onLaunch onShow", async () => {
    const page = await program.reLaunch(HOME_PATH)
    await page.waitFor(1000)
    expect(await page.callMethod("checkLaunchPath")).toBe(true)
    if (!process.env.uniTestPlatformInfo.startsWith('android')) {
      expect(await page.callMethod("checkAppMixin")).toBe(true)
    }

    const lifeCycleNum = await page.callMethod('getLifeCycleNum')
    expect(lifeCycleNum).toBe(1110)
  })
  it('onLastPageBackPress', async () => {
    if (process.env.uniTestPlatformInfo.startsWith('android')) {
      page = await program.navigateBack()
      await page.waitFor(700)
      lifeCycleNum = await page.callMethod('getLifeCycleNum')
      expect(lifeCycleNum).toBe(110)
    }
  })
})
