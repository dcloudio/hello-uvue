const PAGE_PATH = '/pages/directive/v-bind/v-bind-props'

describe('v-bind-props', () => {
  let page
  beforeAll(async () => {
    page = await program.reLaunch(PAGE_PATH)
    await page.waitFor(500)
  })
  it('counter1', async () => {
    const counter = await page.$('.counter1')
    const counterID = await counter.$('.count-id')
    expect(await counterID.text()).toBe('1')
    const counterTitle = await counter.$('.count-title')
    expect(await counterTitle.text()).toBe('title')
    const counterObj = await counter.$('.count-obj')
    expect(await counterObj.text()).toBe('obj prop name')
  })
})