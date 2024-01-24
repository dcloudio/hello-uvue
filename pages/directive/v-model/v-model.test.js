const PAGE_PATH = '/pages/directive/v-model/v-model'

describe('v-model', () => {
  let page
  beforeAll(async () => {
    page = await program.reLaunch(PAGE_PATH)
    await page.waitFor(500)
  })

  it('input', async () => {
    const value = Date.now() + ''

    // TODO: 自动化测试web端存在问题
    // 1. 直接获取 input 由于 web 端 input 为框架封装的自定义组件,所以被自动化测试框架识别为组定义组件,而不是  input element
    // 2. 通过 class 获取标准 input element,自动化测试框架 isValidEl 限制只允许获取 uni element
    if (process.env.uniTestPlatformInfo.startsWith('android')) {
      const inputElement = await page.$('.input')
      await inputElement.input(value)
      const inputValueElement = await page.$('.input-value')
      expect(await inputValueElement.text()).toBe(value)
    }
  })
})