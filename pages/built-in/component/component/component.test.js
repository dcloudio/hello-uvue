const PAGE_OPTIONS = '/pages/built-in/component/component/component-options'
const PAGE_COMPOSITION = '/pages/built-in/component/component/component-composition'

describe('built-in/component', () => {
	let page
	const test = async () => {
		let fooList = await page.$$('.component-foo')
		expect(fooList.length).toBe(2)
		expect(await fooList[0].text()).toBe('this is component Foo')
		expect(await fooList[1].text()).toBe('this is component Foo')

		let barList = await page.$$('.component-bar')
		expect(barList.length).toBe(0)

		await page.callMethod('changeCurrentComponent')

		fooList = await page.$$('.component-foo')
		expect(fooList.length).toBe(0)

		barList = await page.$$('.component-bar')
		expect(barList.length).toBe(2)
		expect(await barList[0].text()).toBe('this is component Bar')
		expect(await barList[1].text()).toBe('this is component Bar')
	}
	it('component Options API', async () => {
		page = await program.reLaunch(PAGE_OPTIONS)
		await page.waitFor('view')
		await test()
	})
	it('component Composition API', async () => {
		page = await program.reLaunch(PAGE_COMPOSITION)
		await page.waitFor('view')
		await test()
	})
});