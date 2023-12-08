describe('/pages/rendering/render/render', () => {
	if (process.env.uniTestPlatformInfo.startsWith('android')) {
		let page
		beforeAll(async () => {
			page = await program.reLaunch('/pages/rendering/render/render')
			await page.waitFor('view')
		})
		it('component', async () => {
			const ComForRenderFunction = await page.$('.component-for-render-function')
			expect(await ComForRenderFunction.text()).toEqual(
				'component for render function'
			)
			const compSlot = await page.$('.comp-slot')
			console.log('compSlot', compSlot)
			expect(await compSlot.text()).toEqual('component slot')
		})
		it('text', async () => {
			const msgEl = await page.$('.msg')
			expect(await msgEl.text()).toEqual('default msg')
		})
		it('button', async () => {
			const btnEl = await page.$('.btn')
			expect(await btnEl.property('type')).toBe('primary')
			await btnEl.tap()
			const msgEl = await page.$('.msg')
			expect(await msgEl.text()).toEqual('new msg')
		})
	} else {
		// TODO: web 端暂不支持
		it('web', async () => {
			expect(1).toBe(1)
		})
	}
})