const OPTIONS_PAGE_PATH = '/pages/directive/v-bind/v-bind-options'
const COMPOSITION_PAGE_PATH = '/pages/directive/v-bind/v-bind-composition'

describe('v-bind', () => {
  let page
  const platformInfo = process.env.uniTestPlatformInfo.toLocaleLowerCase()
  const isWeb = platformInfo.startsWith('web')
  const isFirefox = platformInfo.indexOf('firefox') > -1

  const test = async (pagePath) => {
    page = await program.reLaunch(pagePath)
    await page.waitFor('view')
    await page.waitFor(1000)

    const disabledBtn = await page.$('#disabled-btn')
    expect((await disabledBtn.property('disabled')).toString()).toBe('true')

    const vBindDisabledBtn = await page.$('#v-bind-disabled-btn')
    expect((await vBindDisabledBtn.property('disabled')).toString()).toBe('false')

    const dataInfo = await page.data('dataInfo')

    const bindObjectStyle = await page.$('#bind-object-style')
    expect(await bindObjectStyle.style('fontSize')).toBe(dataInfo.fontSize)

    const bindArrayStyle = await page.$('#bind-array-style')
    if (isWeb) {
      expect(await bindArrayStyle.style('backgroundColor')).toBe('rgb(0, 128, 0)')
    } else {
      expect(await bindArrayStyle.style('backgroundColor')).toBe(dataInfo.backgroundColor.replace(
        'background-color:', '').trim())
    }
    const borderStyles = dataInfo.border.replace('border:', '').trim().split(' ')
    expect(await bindArrayStyle.style(isFirefox ? 'borderTopWidth' : 'borderWidth')).toBe(borderStyles[0])
    expect(await bindArrayStyle.style(isFirefox ? 'borderTopStyle' : 'borderStyle')).toBe(borderStyles[1])
    if (isWeb) {
      expect(await bindArrayStyle.style(isFirefox ? 'borderTopColor' : 'borderColor')).toBe('rgb(255, 0, 0)')
    } else {
      expect(await bindArrayStyle.style(isFirefox ? 'borderTopColor' : 'borderColor')).toBe(borderStyles[2])
    }

    const fooPropsTitle = await page.$('#foo-props-title')
    expect(await fooPropsTitle.text()).toBe(dataInfo.fooProps.title)
    const fooPropsNum = await page.$('#foo-props-num')
    expect(await fooPropsNum.text()).toBe(dataInfo.fooProps.num.toString())
    const fooPropsObjName = await page.$('#foo-props-obj-name')
    expect(await fooPropsObjName.text()).toBe(dataInfo.fooProps.obj.name)

    if (isWeb) {
      const vBindCss = await page.$('.v-bind-css')
      expect(await vBindCss.style('backgroundColor')).toBe('rgb(255, 0, 0)')
      expect(await vBindCss.style('height')).toBe('150px')
    }
  }

  it('v-bind options API', async () => {
    await test(OPTIONS_PAGE_PATH)
  })

  it('v-bind composition API', async () => {
    await test(COMPOSITION_PAGE_PATH)
  })
})