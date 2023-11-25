describe('/pages/rendering/unrecognized-component/unrecognized-component', () => {
	let page
	beforeAll(async () => {
		page = await program.reLaunch('/pages/rendering/unrecognized-component/unrecognized-component')
		await page.waitFor('text')
	})
	it('unrecognized-component should be created as "view"', async () => {
		const element = await page.$('text')
		expect(await element.text()).toBe('text in unrecognized component')
	})
});