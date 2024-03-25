// uni-app自动化测试教程: https://uniapp.dcloud.net.cn/worktile/auto/hbuilderx-extension/

describe('/pages/rendering/template/template', () => {
	let page
	beforeAll(async () => {
		page = await program.reLaunch('/pages/rendering/template/template')
		await page.waitFor('view')
	})
	it('template', async () => {
		expect.assertions(4);
		const showBtn = await page.$('.show-botton')
		await showBtn.tap()
		expect((await page.data()).isShow).toBeTruthy()
		const getTitle = await page.$('.title')
		expect(await getTitle.text()).toBe("hello")
		const getShow = await page.$('.show-botton')
		expect(await getShow.text()).toBe("点击隐藏")
		expect((await page.$$('.item')).length).toBe(2)
	})
});