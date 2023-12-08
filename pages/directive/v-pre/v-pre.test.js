const PAGE_PATH = '/pages/directive/v-pre/v-pre'

describe('v-pre', () => {
  let page
  beforeAll(async () => {
    page = await program.reLaunch(PAGE_PATH)
    await page.waitFor('view')
  })
  it('basic', async () => {
    const vPreTextEl = await page.$('.v-pre-text')
    let vPreTextText = await vPreTextEl.text()
    expect(vPreTextText).toBe('{{ this will not be compiled }}')
  })
})
