// uni-app自动化测试教程: uni-app自动化测试教程: https://uniapp.dcloud.net.cn/worktile/auto/hbuilderx-extension/

describe('/pages/rendering/slots/slots', () => {
	let page;
	beforeAll(async () => {
		page = await program.reLaunch('/pages/rendering/slots/slots')
		await page.waitFor('view')
	});
	it('slots', async () => {
		expect.assertions(3);
		const childEl = await page.$('child');
		const headerEl = await childEl.$('.header');
		expect(await headerEl.text()).toEqual("Here might be a page title");
		const mainEl = await childEl.$('.main');
		expect(await mainEl.text()).toEqual("A paragraph for the main content.");
		const footerEl = await childEl.$('.footer');
		expect(await footerEl.text()).toEqual("Here's some contact info");
	});
});