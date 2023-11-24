const PAGE_PATH = '/pages/directive/v-html/v-html'

describe('v-html', () => {
	let page
	beforeAll(async () => {
		page = await program.reLaunch(PAGE_PATH)
		await page.waitFor('view')
	})
	it('basic', async () => {
		const image = await program.screenshot()
		expect(image).toMatchImageSnapshot()
	})
})