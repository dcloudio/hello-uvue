const PAGE_PATH = '/pages/built-in-component/teleport/teleport'

describe('teleport', () => {
  if(process.env.uniTestPlatformInfo.toLocaleLowerCase().startsWith('ios')){
    it("IOS platform not support", async () => {
      expect(1).toBe(1);
    });
    return
  }
  
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
