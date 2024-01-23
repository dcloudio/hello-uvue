const PAGE_PATH = '/pages/directive/v-memo/v-memo'

describe('v-memo', () => {
  if (process.env.uniTestPlatformInfo.startsWith('web')) {
    // TODO: web 暂不支持
    it('web', async () => {
      expect(1).toBe(1)
    })
    return
  }
  let page
  beforeAll(async () => {
    page = await program.reLaunch(PAGE_PATH)
    await page.waitFor('view')
  })
  it('basic', async () => {
    const equivalentVOnceTextEl = await page.$('.equivalent-v-once-text')
    let equivalentVOnceTextText = await equivalentVOnceTextEl.text()
    expect(equivalentVOnceTextText).toBe(
      'This will never change: hello world'
    )

    const vMemoTextEl = await page.$('.v-memo-text')
    let vMemoTextText = await vMemoTextEl.text()
    expect(vMemoTextText).toBe(
      'This will change when num change, msg: hello world, num: 0'
    )

    const changeMessageBtn = await page.$('.change-message-btn')
    await changeMessageBtn.tap()

    const msg = await page.data('msg')
    expect(msg).toBe('msg changed')

    equivalentVOnceTextText = await equivalentVOnceTextEl.text()
    expect(equivalentVOnceTextText).toBe(
      'This will never change: hello world'
    )
    vMemoTextText = await vMemoTextEl.text()
    expect(vMemoTextText).toBe(
      'This will change when num change, msg: hello world, num: 0'
    )

    const plusNumBtn = await page.$('.plus-num-btn')
    await plusNumBtn.tap()

    vMemoTextText = await vMemoTextEl.text()
    expect(vMemoTextText).toBe(
      'This will change when num change, msg: msg changed, num: 1'
    )
  })
})
