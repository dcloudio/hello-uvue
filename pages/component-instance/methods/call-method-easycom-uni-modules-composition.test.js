const PAGE_PATH = "/pages/component-instance/methods/call-method-easycom-uni-modules-composition"



let page
beforeAll(async () => {
  page = await program.reLaunch(PAGE_PATH)
  await page.waitFor('view')
})

it('callMethodTest', async () => {
  // a[[]] only issue 8582
  if (process.env.uniTestPlatformInfo.toLowerCase().startsWith('web')) {
    expect(1).toBe(1)
    return
  }

  const platformInfo = process.env.uniTestPlatformInfo.toLocaleLowerCase()
  const isIOS = process.env.uniTestPlatformInfo.toLowerCase().startsWith('ios')
  // ios_simulator ios 17.0
  // xcodoe 15 以下的版本环境不满足
  if (
    isIOS &&
    (platformInfo.indexOf('14.') != -1 ||
      platformInfo.indexOf('13.') != -1 ||
      platformInfo.indexOf('12.') != -1)
  ) {
    expect(1).toBe(1)
    return
  }

  const delay = () =>
    new Promise((resolve, _) => {
      setTimeout(() => {
        resolve('')
      }, 1500)
    })

  await page.callMethod('onButtonClick')
  await delay()
  const resStr1 = await page.$("#isNumListValid")
  const resStr2 = await page.$("#isObjListValid")
  expect(await resStr1.text()).toBe(`true`)
  expect(await resStr2.text()).toBe(`true`)
})
