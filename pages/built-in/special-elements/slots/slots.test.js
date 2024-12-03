const PAGE_OPTIONS = '/pages/built-in/special-elements/slots/slots-options'
const PAGE_COMPOSITION = '/pages/built-in/special-elements/slots/slots-composition'

const platformInfo = process.env.uniTestPlatformInfo.toLocaleLowerCase()
const isMP = platformInfo.startsWith('mp')

describe('built-in/special-elements/slots', () => {
  let page;

  const test = async () => {
    await page.waitFor('view')
    expect.assertions(3);
    const childEl = await page.$('.container');
    const container = isMP ? page : childEl
    const headerEl = await container.$('.header');
    expect(await headerEl.text()).toEqual("Here might be a page title");
    const mainEl = await container.$('.main');
    expect(await mainEl.text()).toEqual("A paragraph for the main content.");
    const footerEl = await container.$('.footer');
    expect(await footerEl.text()).toEqual("Here's some contact info");
  }

  it('slots Options API', async () => {
    page = await program.reLaunch(PAGE_OPTIONS)
    await test()
  });

  it('slots Composition API', async () => {
    page = await program.reLaunch(PAGE_COMPOSITION)
    await test()
  });
});