describe('/pages/rendering/template/template-map-style', () => {
  let page
  beforeAll(async () => {
    page = await program.reLaunch('/pages/rendering/template/template-map-style')
    await page.waitFor(1000)
  })
  it('init screen shot', async () => {
    const image = await program.screenshot();
    expect(image).toSaveImageSnapshot();
  })

  it('change isClassValid screen shot', async () => {
    const btn = await page.$('#btn')
    await btn.tap()
    const image = await program.screenshot();
    expect(image).toSaveImageSnapshot();
  })
});