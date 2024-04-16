const PAGE_PATH_OPTIONS = '/pages/built-in-component/teleport/teleport-options'
const PAGE_PATH_COMPONSITION = '/pages/built-in-component/teleport/teleport-composition'

describe('teleport', () => {
  if(process.env.uniTestPlatformInfo.toLocaleLowerCase().startsWith('ios')){
    it("IOS platform not support", async () => {
      expect(1).toBe(1);
    });
    return
  }
  
  let page = null
  it('teleport Options API', async () => {
    page = await program.reLaunch(PAGE_PATH_OPTIONS)
    await page.waitFor('view')
  	await page.waitFor(500)
  	const image = await program.screenshot();
  	expect(image).toMatchImageSnapshot();
  })
  it('teleport Composition API', async () => {
    page = await program.reLaunch(PAGE_PATH_COMPONSITION)
    await page.waitFor('view')
  	await page.waitFor(500)
  	const image = await program.screenshot();
  	expect(image).toMatchImageSnapshot();
  })
})
