const PAGE_PATH_OPTIONS = '/pages/built-in/component/template/template-options'
const PAGE_PATH_COMPONSITION = '/pages/built-in/component/template/template-composition'

describe('built-in/component', () => {
  let page
  const test = async () => {
    await page.waitFor('view')
    expect.assertions(4);
    const showBtn = await page.$('.show-botton')
    await showBtn.tap()
    expect((await page.data()).isShow).toBeTruthy()
    const getTitle = await page.$('.title')
    expect(await getTitle.text()).toBe("hello")
    const getShow = await page.$('.show-botton')
    expect(await getShow.text()).toBe("点击隐藏")
    expect((await page.$$('.item')).length).toBe(2)
  }
  it('template Options API', async () => {
    page = await program.reLaunch(PAGE_PATH_OPTIONS)
    await test()
  })
  it('template Composition API', async () => {
    page = await program.reLaunch(PAGE_PATH_COMPONSITION)
    await test()
  })
});