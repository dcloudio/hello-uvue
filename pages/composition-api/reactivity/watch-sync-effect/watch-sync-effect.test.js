const PAGE_PATH = '/pages/composition-api/reactivity/watch-sync-effect/watch-sync-effect'

describe('watchSyncEffect', () => {
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
    expect(await watchCountRes.text()).toBe(
      'watch count result: count: 0, count ref text: count: 0')

    // track
    const watchCountTrackNum = await page.$('#watch-count-track-num')
    expect(await watchCountTrackNum.text()).toBe('watch count track number: 3')

    // trigger
    const watchCountTriggerNum = await page.$('#watch-count-trigger-num')
    expect(await watchCountTriggerNum.text()).toBe('watch count trigger number: 1')
    const watchCountCleanupRes = await page.$('#watch-count-cleanup-res')
    expect(await watchCountCleanupRes.text()).toBe('watch count cleanup result: watch count cleanup: 0')

    // watch count and obj.num
    const watchCountAndObjNumRes = await page.$('#watch-count-obj-num-res')
    expect(await watchCountAndObjNumRes.text()).toBe('watch count and obj.num result: count: 0, obj.num: 0')

    const incrementBtn = await page.$('#increment-btn')
    await incrementBtn.tap()

    expect(await count.text()).toBe('count: 1')
    expect(await watchCountRes.text()).toBe(
      'watch count result: count: 1, count ref text: count: 0')
    expect(await watchCountTrackNum.text()).toBe('watch count track number: 3')
    expect(await watchCountTriggerNum.text()).toBe('watch count trigger number: 2')
    expect(await watchCountCleanupRes.text()).toBe('watch count cleanup result: watch count cleanup: 1')

    expect(await watchCountAndObjNumRes.text()).toBe('watch count and obj.num result: count: 1, obj.num: 0')

    await incrementBtn.tap()

    expect(await count.text()).toBe('count: 2')
    expect(await watchCountRes.text()).toBe(
      'watch count result: count: 2, count ref text: count: 1')
    expect(await watchCountTrackNum.text()).toBe('watch count track number: 3')
    expect(await watchCountTriggerNum.text()).toBe('watch count trigger number: 3')
    expect(await watchCountCleanupRes.text()).toBe('watch count cleanup result: watch count cleanup: 2')

    expect(await watchCountAndObjNumRes.text()).toBe('watch count and obj.num result: count: 2, obj.num: 0')

    // stop watch
    const stopWatchCountBtn = await page.$('#stop-watch-count-btn')
    await stopWatchCountBtn.tap()

    await incrementBtn.tap()

    expect(await count.text()).toBe('count: 3')
    expect(await watchCountRes.text()).toBe(
      'watch count result: count: 2, count ref text: count: 1')
    expect(await watchCountTrackNum.text()).toBe('watch count track number: 3')
    expect(await watchCountTriggerNum.text()).toBe('watch count trigger number: 3')
    expect(await watchCountCleanupRes.text()).toBe('watch count cleanup result: watch count cleanup: 2')

    expect(await watchCountAndObjNumRes.text()).toBe('watch count and obj.num result: count: 3, obj.num: 0')
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
    expect(await watchObjRes.text()).toBe(
      'watch obj result: obj: {"arr":[0],"bool":false,"num":0,"str":"num: 0"}')
    const watchObjStrRes = await page.$('#watch-obj-str-res')
    expect(await watchObjStrRes.text()).toBe(
      'watch obj.str result: str: num: 0, obj.str ref text: obj.str: num: 0')
    const watchObjArrRes = await page.$('#watch-obj-arr-res')
    expect(await watchObjArrRes.text()).toBe('watch obj.arr result: arr: [0]')

    const updateObjBtn = await page.$('#update-obj-btn')
    await updateObjBtn.tap()

    expect(await objStr.text()).toBe('obj.str: num: 1')
    expect(await objNum.text()).toBe('obj.num: 1')
    expect(await objBool.text()).toBe('obj.bool: true')
    expect(await objArr.text()).toBe('obj.arr: [0,1]')

    expect(await watchObjRes.text()).toBe(
      'watch obj result: obj: {"arr":[0],"bool":false,"num":0,"str":"num: 0"}')
    expect(await watchObjStrRes.text()).toBe(
      'watch obj.str result: str: num: 1, obj.str ref text: obj.str: num: 0')
    expect(await watchObjArrRes.text()).toBe('watch obj.arr result: arr: [0,1]')

    const watchCountAndObjNumRes = await page.$('#watch-count-obj-num-res')
    expect(await watchCountAndObjNumRes.text()).toBe('watch count and obj.num result: count: 3, obj.num: 1')
  })
})