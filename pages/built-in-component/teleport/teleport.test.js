const PAGE_PATH = '/pages/built-in-component/teleport/teleport'

describe('teleport', () => {
  let page = null
  beforeAll(async () => {
    page = await program.reLaunch(PAGE_PATH)
    await page.waitFor('view')
  })
  
  it('teleport', async () => {
  	await page.waitFor(500)
  	const image = await program.screenshot();
  	expect(image).toMatchImageSnapshot();
  })
})
