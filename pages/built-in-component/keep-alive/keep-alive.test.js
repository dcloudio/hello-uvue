const PAGE_PATH = '/pages/built-in-component/keep-alive/keep-alive'

describe('keep-alive', () => {
  let page = null
  beforeAll(async () => {
    page = await program.reLaunch(PAGE_PATH)
    await page.waitFor('view')
  })
  it('keep-alive', async () => {
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
  })
})
