const PAGE_PATH = '/pages/directive/v-once/v-once'

describe('v-once', () => {
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