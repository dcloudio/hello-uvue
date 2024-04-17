// uni-app自动化测试教程: uni-app自动化测试教程: https://uniapp.dcloud.net.cn/worktile/auto/hbuilderx-extension/
const PAGE_OPTIONS = '/pages/built-in/component/slots/slots-options'
const PAGE_COMPOSITION = '/pages/built-in/component/slots/slots-composition'

describe('built-in/component/slots', () => {
	let page;

	const test = async () => {
		await page.waitFor('view')
		expect.assertions(3);
		const childEl = await page.$('.container');
		const headerEl = await childEl.$('.header');
		expect(await headerEl.text()).toEqual("Here might be a page title");
		const mainEl = await childEl.$('.main');
		expect(await mainEl.text()).toEqual("A paragraph for the main content.");
		const footerEl = await childEl.$('.footer');
		expect(await footerEl.text()).toEqual("Here's some contact info");
	}

	it('slots Options API', async () => {
		page = await program.reLaunch(PAGE_OPTIONS)
		await test()
	});

	it('slots Composition API', async () => {
		page = await program.reLaunch(PAGE_COMPOSITION)
		await test()
	});
});