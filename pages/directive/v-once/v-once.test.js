const PAGE_PATH = '/pages/directive/v-once/v-once'

describe('v-once', () => {
  if (process.env.uniTestPlatformInfo.startsWith('web')) {
    // TODO: web 端暂不支持
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
		const vOnceTextEl = await page.$('.v-once-text')
		let vOnceTextText = await vOnceTextEl.text()
		expect(vOnceTextText).toBe('This will never change: hello world')

		const btn = await page.$('.btn')
		await btn.tap()

		const msg = await page.data('msg')
		expect(msg).toBe('msg changed')

		vOnceTextText = await vOnceTextEl.text()
		expect(vOnceTextText).toBe('This will never change: hello world')
	})
})