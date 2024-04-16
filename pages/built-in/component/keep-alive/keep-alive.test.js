const PAGE_PATH_OPTIONS = '/pages/built-in-component/keep-alive/keep-alive-options'
const PAGE_PATH_COMPOSITION = '/pages/built-in-component/keep-alive/keep-alive-composition'

describe('keep-alive', () => {
	if (process.env.uniTestPlatformInfo.toLocaleLowerCase().startsWith('ios')) {
		it("IOS platform not support", async () => {
			expect(1).toBe(1);
		});
		return
	}
	let page = null
	const testKeepAlive = async () => {
		const shouldExcludeBtns = await page.$$('.should-exclude-btn')
		for (let i = 0; i < shouldExcludeBtns.length; i++) {
			await shouldExcludeBtns[i].tap()
		}
		let shouldExcludeTexts = await page.$$('.should-exclude-text')
		for (let i = 0; i < shouldExcludeTexts.length; i++) {
			expect(await shouldExcludeTexts[i].text()).toBe('count: 1')
		}

		const showCounterBtn = await page.$('.show-counter')
		await showCounterBtn.tap()

		const activatedNum = await page.$('#activated-num')
		expect(await activatedNum.text()).toBe('activated num: 1')
		const deactivatedNum = await page.$('#deactivated-num')
		expect(await deactivatedNum.text()).toBe('deactivated num: 0')

		const counterBtns = await page.$$('.counter-btn')
		for (let i = 0; i < counterBtns.length; i++) {
			await counterBtns[i].tap()
		}

		const showShouldExcludeBtn = await page.$('.show-should-exclude')
		await showShouldExcludeBtn.tap()

		shouldExcludeTexts = await page.$$('.should-exclude-text')
		for (let i = 0; i < shouldExcludeTexts.length; i++) {
			if (i < shouldExcludeBtns.length - 1) {
				expect(await shouldExcludeTexts[i].text()).toBe('count: 0')
			} else {
				expect(await shouldExcludeTexts[i].text()).toBe('count: 1')
			}
		}

		await showCounterBtn.tap()

		expect(await activatedNum.text()).toBe('activated num: 2')
		expect(await deactivatedNum.text()).toBe('deactivated num: 1')

		let counterTexts = await page.$$('.counter-text')
		for (let i = 0; i < counterTexts.length; i++) {
			expect(await counterTexts[i].text()).toBe('count: 1')
		}

		const showMessageBtn = await page.$('.show-message')
		await showMessageBtn.tap()

		const chnageMessageBtns = await page.$$('.change-message')
		for (let i = 0; i < chnageMessageBtns.length; i++) {
			await chnageMessageBtns[i].tap()
		}

		let messageTexts = await page.$$('.message-text')
		for (let i = 0; i < messageTexts.length; i++) {
			expect(await messageTexts[i].text()).toBe('msg: message changed')
		}

		await showCounterBtn.tap()

		expect(await activatedNum.text()).toBe('activated num: 3')
		expect(await deactivatedNum.text()).toBe('deactivated num: 2')

		counterTexts = await page.$$('.counter-text')
		for (let i = 0; i < counterTexts.length; i++) {
			expect(await counterTexts[i].text()).toBe('count: 1')
		}

		await showMessageBtn.tap()

		messageTexts = await page.$$('.message-text')
		for (let i = 0; i < messageTexts.length; i++) {
			expect(await messageTexts[i].text()).toBe('msg: message changed')
		}

		await showShouldExcludeBtn.tap()
		shouldExcludeTexts = await page.$$('.should-exclude-text')
		for (let i = 0; i < shouldExcludeTexts.length; i++) {
			expect(await shouldExcludeTexts[i].text()).toBe('count: 0')
		}
	}
	it('keep-alive Options API', async () => {
		page = await program.reLaunch(PAGE_PATH_OPTIONS)
		await page.waitFor('view')
		await testKeepAlive()
	})
	it('keep-alive Composition API', async () => {
		page = await program.reLaunch(PAGE_PATH_COMPOSITION)
		await page.waitFor('view')
		await testKeepAlive()
	})
})