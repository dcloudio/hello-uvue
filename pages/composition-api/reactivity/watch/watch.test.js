const PAGE_PATH = '/pages/composition-api/reactivity/watch/watch'

describe('watch', () => {
  let page = null
  beforeAll(async () => {
    page = await program.reLaunch(PAGE_PATH)
    await page.waitFor('view')
  })
  it('count', async () => {
    const count = await page.$('#count')
    expect(await count.text()).toBe('count: 0')

    // watch
    const watchCountRes = await page.$('#watch-count-res')
    expect((await watchCountRes.text()).trim()).toBe('watch count result:')

    // track
    const watchCountTrackNum = await page.$('#watch-count-track-num')
    expect(await watchCountTrackNum.text()).toBe('watch count track number: 2')

    const watchCountCleanupRes = await page.$('#watch-count-cleanup-res')
    expect((await watchCountCleanupRes.text()).trim()).toBe('watch count cleanup result:')

    // watch count and obj.num
    const watchCountAndObjNumRes = await page.$('#watch-count-obj-num-res')
    expect((await watchCountAndObjNumRes.text()).trim()).toBe('watch count and obj.num result:')

    const incrementBtn = await page.$('.increment-btn')
    await incrementBtn.tap()

    expect(await count.text()).toBe('count: 1')

    expect(await watchCountRes.text()).toBe(
      'watch count result: count: 1, prevCount: 0, count ref text (flush sync): count: 0')

    if (process.env.uniTestPlatformInfo.startsWith('android')) {
    expect(await watchCountTrackNum.text()).toBe('watch count track number: 2')
    } else {
    expect(await watchCountTrackNum.text()).toBe('watch count track number: 4')
    }
    expect((await watchCountCleanupRes.text()).trim()).toBe('watch count cleanup result:')

    expect(await watchCountAndObjNumRes.text()).toBe(
      'watch count and obj.num result: state: [1,0], preState: [0,0]')

    await incrementBtn.tap()

    expect(await count.text()).toBe('count: 2')
    expect(await watchCountRes.text()).toBe(
      'watch count result: count: 2, prevCount: 1, count ref text (flush sync): count: 1')
    
    if (process.env.uniTestPlatformInfo.startsWith('android')) {
      expect(await watchCountTrackNum.text()).toBe('watch count track number: 2')
    } else {
      expect(await watchCountTrackNum.text()).toBe('watch count track number: 6')
    }
    expect(await watchCountCleanupRes.text()).toBe('watch count cleanup result: watch count cleanup: 1')

    expect(await watchCountAndObjNumRes.text()).toBe(
      'watch count and obj.num result: state: [2,0], preState: [1,0]')

    // stop watch
    const stopWatchCountBtn = await page.$('.stop-watch-count-btn')
    await stopWatchCountBtn.tap()

    expect(await watchCountCleanupRes.text()).toBe('watch count cleanup result: watch count cleanup: 2')

    await incrementBtn.tap()

    expect(await count.text()).toBe('count: 3')
    expect(await watchCountRes.text()).toBe(
      'watch count result: count: 2, prevCount: 1, count ref text (flush sync): count: 1')
    
    if (process.env.uniTestPlatformInfo.startsWith('android')) {
      expect(await watchCountTrackNum.text()).toBe('watch count track number: 2')
    } else {
      expect(await watchCountTrackNum.text()).toBe('watch count track number: 6')
    }
    expect(await watchCountCleanupRes.text()).toBe('watch count cleanup result: watch count cleanup: 2')

    expect(await watchCountAndObjNumRes.text()).toBe(
      'watch count and obj.num result: state: [3,0], preState: [2,0]')
  })
  it('obj', async () => {
    const objStr = await page.$('#obj-str')
    expect(await objStr.text()).toBe('obj.str: num: 0')
    const objNum = await page.$('#obj-num')
    expect(await objNum.text()).toBe('obj.num: 0')
    const objBool = await page.$('#obj-bool')
    expect(await objBool.text()).toBe('obj.bool: false')
    const objArr = await page.$('#obj-arr')
    expect(await objArr.text()).toBe('obj.arr: [0]')

    const watchObjRes = await page.$('#watch-obj-res')
    if (process.env.uniTestPlatformInfo.startsWith('android')) {
      expect(await watchObjRes.text()).toBe(
        'watch obj result: obj: {"arr":[0],"bool":false,"num":0,"str":"num: 0"}, prevObj: {"arr":[0],"bool":false,"num":0,"str":"num: 0"}'
      )
    }
    if (process.env.uniTestPlatformInfo.startsWith('web')) {
      expect(await watchObjRes.text()).toBe(
        'watch obj result: obj: {"num":0,"str":"num: 0","bool":false,"arr":[0]}, prevObj: null'
      )
    }
    const watchObjStrRes = await page.$('#watch-obj-str-res')
    expect((await watchObjStrRes.text()).trim()).toBe('watch obj.str result:')

    // trigger
    const watchObjStrTriggerNum = await page.$('#watch-obj-str-trigger-num')
    expect(await watchObjStrTriggerNum.text()).toBe('watch obj.str trigger number: 0')

    const watchObjBoolRes = await page.$('#watch-obj-bool-res')
    expect((await watchObjBoolRes.text()).trim()).toBe('watch obj.bool result:')
    const watchObjArrRes = await page.$('#watch-obj-arr-res')
    expect((await watchObjArrRes.text()).trim()).toBe('watch obj.arr result:')

    const updateObjBtn = await page.$('.update-obj-btn')
    await updateObjBtn.tap()

    expect(await objStr.text()).toBe('obj.str: num: 1')
    expect(await objNum.text()).toBe('obj.num: 1')
    expect(await objBool.text()).toBe('obj.bool: true')
    expect(await objArr.text()).toBe('obj.arr: [0,1]')

    if (process.env.uniTestPlatformInfo.startsWith('android')) {
      expect(await watchObjRes.text()).toBe(
        'watch obj result: obj: {"arr":[0,1],"bool":true,"num":1,"str":"num: 1"}, prevObj: {"arr":[0,1],"bool":true,"num":1,"str":"num: 1"}'
      )
    }
    if (process.env.uniTestPlatformInfo.startsWith('web')) {
      expect(await watchObjRes.text()).toBe(
        'watch obj result: obj: {"num":1,"str":"num: 1","bool":true,"arr":[0,1]}, prevObj: {"num":1,"str":"num: 1","bool":true,"arr":[0,1]}'
      )
    }
    expect(await watchObjStrRes.text()).toBe(
      'watch obj.str result: str: num: 1, prevStr: num: 0, obj.str ref text (flush pre): obj.str: num: 0')

    expect(await watchObjStrTriggerNum.text()).toBe('watch obj.str trigger number: 1')

    expect(await watchObjBoolRes.text()).toBe(
      'watch obj.bool result: bool: true, prevBool: false, obj.bool ref text (flush post): obj.bool: true'
    )
    expect(await watchObjArrRes.text()).toBe('watch obj.arr result: arr: [0,1], prevArr: [0,1]')

    const watchCountAndObjNumRes = await page.$('#watch-count-obj-num-res')
    expect(await watchCountAndObjNumRes.text()).toBe(
      'watch count and obj.num result: state: [3,1], preState: [3,0]')
  })
})