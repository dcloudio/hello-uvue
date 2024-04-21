const PAGE_PATH = '/pages/reactivity/core/watch-post-effect/watch-post-effect'

describe('watchPostEffect', () => {
  let page = null
  const platformInfo = process.env.uniTestPlatformInfo.toLowerCase()
  const isAndroid = platformInfo.startsWith('android')
  const isIos = platformInfo.startsWith('ios')
  const isWeb = platformInfo.startsWith('web')
  
  beforeAll(async () => {
    page = await program.reLaunch(PAGE_PATH)
    await page.waitFor('view')
  })
  it('count', async () => {
    const count = await page.$('#count')
    expect(await count.text()).toBe('0')

    // watch
    const watchCountRes = await page.$('#watch-count-res')
    expect(await watchCountRes.text()).toBe(
      'count: 0, count ref text: 0')

    // track
    const watchCountTrackNum = await page.$('#watch-count-track-num')
    if (isAndroid) {
      expect(await watchCountTrackNum.text()).toBe('3')
    } else if (isIos) {
      // TODO: 确认 IOS 的差异是否正常
      expect(await watchCountTrackNum.text()).toBe('8')
    } else {
      expect(await watchCountTrackNum.text()).toBe('3')
    }

    const watchCountCleanupRes = await page.$('#watch-count-cleanup-res')
    if (isAndroid || isWeb) {
      expect(await watchCountCleanupRes.text()).toBe('')
    }
    if (isIos) {
      expect(await watchCountCleanupRes.text()).toBe(null)
    }

    // watch count and obj.num
    const watchCountAndObjNumRes = await page.$('#watch-count-obj-num-res')
    expect(await watchCountAndObjNumRes.text()).toBe('count: 0, obj.num: 0')

    const incrementBtn = await page.$('.increment-btn')
    await incrementBtn.tap()

    expect(await count.text()).toBe('1')
    expect(await watchCountRes.text()).toBe(
      'count: 1, count ref text: 1')

    if (isAndroid) {
      expect(await watchCountTrackNum.text()).toBe('3')
    } else if (isIos) {
      expect(await watchCountTrackNum.text()).toBe('16')
    } else {
      expect(await watchCountTrackNum.text()).toBe('6')
    }

    expect(await watchCountCleanupRes.text()).toBe('watch count cleanup: 1')

    expect(await watchCountAndObjNumRes.text()).toBe('count: 1, obj.num: 0')

    await incrementBtn.tap()

    expect(await count.text()).toBe('2')
    expect(await watchCountRes.text()).toBe(
      'count: 2, count ref text: 2')

    if (isAndroid) {
      expect(await watchCountTrackNum.text()).toBe('3')
    } else if (isIos) {
      expect(await watchCountTrackNum.text()).toBe('24')
    } else {
      expect(await watchCountTrackNum.text()).toBe('9')
    }

    expect(await watchCountCleanupRes.text()).toBe('watch count cleanup: 2')

    expect(await watchCountAndObjNumRes.text()).toBe('count: 2, obj.num: 0')

    // stop watch
    const stopWatchCountBtn = await page.$('.stop-watch-count-btn')
    await stopWatchCountBtn.tap()

    await incrementBtn.tap()

    expect(await count.text()).toBe('3')
    expect(await watchCountRes.text()).toBe(
      'count: 2, count ref text: 2')

    if (isAndroid) {
      expect(await watchCountTrackNum.text()).toBe('3')
    } else if (isIos) {
      expect(await watchCountTrackNum.text()).toBe('24')
    } else {
      expect(await watchCountTrackNum.text()).toBe('9')
    }

    expect(await watchCountCleanupRes.text()).toBe('watch count cleanup: 2')

    expect(await watchCountAndObjNumRes.text()).toBe('count: 3, obj.num: 0')
  })
  it('obj', async () => {
    const objStr = await page.$('#obj-str')
    expect(await objStr.text()).toBe('num: 0')
    const objNum = await page.$('#obj-num')
    expect(await objNum.text()).toBe('0')
    const objBool = await page.$('#obj-bool')
    expect(await objBool.text()).toBe('false')
    const objArr = await page.$('#obj-arr')
    expect(await objArr.text()).toBe('[0]')

    const watchObjRes = await page.$('#watch-obj-res')
    // TODO web端和安卓端JSON.stringify对属性的排序不一致
    if (process.env.uniTestPlatformInfo.startsWith('web') || isIos) {
      expect(await watchObjRes.text()).toBe(
        'obj: {"num":0,"str":"num: 0","bool":false,"arr":[0]}'
      )
    } else {
      expect(await watchObjRes.text()).toBe(
        'obj: {"arr":[0],"bool":false,"num":0,"str":"num: 0"}'
      )
    }
    const watchObjStrRes = await page.$('#watch-obj-str-res')
    expect(await watchObjStrRes.text()).toBe(
      'str: num: 0, obj.str ref text: num: 0')

    // trigger
    const watchObjStrTriggerNum = await page.$('#watch-obj-str-trigger-num')
    expect(await watchObjStrTriggerNum.text()).toBe('0')

    const watchObjArrRes = await page.$('#watch-obj-arr-res')
    expect(await watchObjArrRes.text()).toBe('arr: [0]')

    const updateObjBtn = await page.$('.update-obj-btn')
    await updateObjBtn.tap()

    expect(await objStr.text()).toBe('num: 1')
    expect(await objNum.text()).toBe('1')
    expect(await objBool.text()).toBe('true')
    expect(await objArr.text()).toBe('[0,1]')

    if (process.env.uniTestPlatformInfo.startsWith('web') || isIos) {
      expect(await watchObjRes.text()).toBe(
        'obj: {"num":1,"str":"num: 1","bool":true,"arr":[0,1]}'
      )
    } else {
      expect(await watchObjRes.text()).toBe(
        'obj: {"arr":[0,1],"bool":true,"num":1,"str":"num: 1"}'
      )
    }
    expect(await watchObjStrRes.text()).toBe(
      'str: num: 1, obj.str ref text: num: 1')

    expect(await watchObjStrTriggerNum.text()).toBe('1')

    expect(await watchObjArrRes.text()).toBe(
      'arr: [0,1]')

    const watchCountAndObjNumRes = await page.$('#watch-count-obj-num-res')
    expect(await watchCountAndObjNumRes.text()).toBe('count: 3, obj.num: 1')
  })
})