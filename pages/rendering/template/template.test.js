// uni-app自动化测试教程: https://uniapp.dcloud.net.cn/worktile/auto/hbuilderx-extension/

describe('/pages/rendering/template/template', () => {
	let page
	beforeAll(async () => {
		page = await program.reLaunch('/pages/rendering/template/template')
		await page.waitFor(500)
	})
	it('template', async () => {
		expect.assertions(2);
		const showBtn = await page.$('.show-botton')
		await showBtn.tap()
		expect((await page.data()).isShow).toBeFalsy()
		expect((await page.$$('.item')).length).toBe(2)
	})
});