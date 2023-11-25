describe('/pages/rendering/component/component', () => {
	let page
	beforeAll(async () => {
		page = await program.reLaunch('/pages/rendering/component/component')
		await page.waitFor('view')
	})
	it('basic', async () => {
		let fooList = await page.$$('.component-foo')
		expect(fooList.length).toBe(2)
		expect(await fooList[0].text()).toBe('this is component Foo')
		expect(await fooList[1].text()).toBe('this is component Foo')
		
		let barList= await page.$$('.component-bar')
		expect(barList.length).toBe(0)
		
		await page.callMethod('changeCurrentComponent')
		
		fooList = await page.$$('.component-foo')
		expect(fooList.length).toBe(0)
		
		barList= await page.$$('.component-bar')
		expect(barList.length).toBe(2)
		expect(await barList[0].text()).toBe('this is component Bar')
		expect(await barList[1].text()).toBe('this is component Bar')
	})
});