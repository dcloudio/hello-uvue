const PAGE_PATH = '/pages/composition/inject/inject'

describe('inject', () => {
  it('basic', async () => {
    const page = await program.reLaunch(PAGE_PATH)
    await page.waitFor('view')
    const globalProvideMsgEl = await page.$('.global-provide-msg')
    const globalProvideMsgElText = await globalProvideMsgEl.text()
    expect(globalProvideMsgElText).toBe(
      'globalProvideMsg: global provide message'
    )
  })
})
