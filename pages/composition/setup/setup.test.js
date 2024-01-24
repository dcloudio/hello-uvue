// TODO web端

const PAGE_PATH = '/pages/composition/setup/setup'
describe('options setup', () => {
  let page
  beforeAll(async () => {
    page = await program.reLaunch(PAGE_PATH)
    await page.waitFor('view')
  })
  it('basic', async () => {
    const str = await page.$('#str')
    expect(await str.text()).toBe('str: default str')
    const num = await page.$('#num')
    expect(await num.text()).toBe('num: 0')
    const bool = await page.$('#bool')
    expect(await bool.text()).toBe('bool: false')

    const count = await page.$('#count')
    expect(await count.text()).toBe('count: 0')

    const objStr = await page.$('#obj-str')
    expect(await objStr.text()).toBe('obj.str: obj default str')
    const objNum = await page.$('#obj-num')
    expect(await objNum.text()).toBe('obj.num: 0')
    const objBool = await page.$('#obj-bool')
    expect(await objBool.text()).toBe('obj.bool: false')

    if (!process.env.uniTestPlatformInfo.startsWith('web')) {
      const propsStr = await page.$('#props-str')
      expect(await propsStr.text()).toBe('props.str: default str')
      const propsCount = await page.$('#props-count')
      expect(await propsCount.text()).toBe('props.count: 0')
      const propsObjStr = await page.$('#props-obj-str')
      expect(await propsObjStr.text()).toBe(`props.obj['str']: obj default str`)
      const propsObjNum = await page.$('#props-obj-num')
      expect(await propsObjNum.text()).toBe(`props.obj['num']: 0`)
      const propsObjBool = await page.$('#props-obj-bool')
      expect(await propsObjBool.text()).toBe(`props.obj['bool']: false`)
    }
  })
  it('props', async () => {
    const incrementBtn = await page.$('#increment-btn')
    await incrementBtn.tap()

    const count = await page.$('#count')
    expect(await count.text()).toBe('count: 1')
    const propsCount = await page.$('#props-count')
    expect(await propsCount.text()).toBe('props.count: 1')

    const updateObjBtn = await page.$('#update-obj-btn')
    await updateObjBtn.tap()

    const objStr = await page.$('#obj-str')
    expect(await objStr.text()).toBe('obj.str: obj new str')
    const objNum = await page.$('#obj-num')
    expect(await objNum.text()).toBe('obj.num: 100')
    const objBool = await page.$('#obj-bool')
    expect(await objBool.text()).toBe('obj.bool: true')

    if (!process.env.uniTestPlatformInfo.startsWith('web')) {
      const propsObjStr = await page.$('#props-obj-str')
      expect(await propsObjStr.text()).toBe(`props.obj['str']: obj new str`)
      const propsObjNum = await page.$('#props-obj-num')
      expect(await propsObjNum.text()).toBe(`props.obj['num']: 100`)
      const propsObjBool = await page.$('#props-obj-bool')
      expect(await propsObjBool.text()).toBe(`props.obj['bool']: true`)
    }
  })
  it('context', async () => {
    if (!process.env.uniTestPlatformInfo.startsWith('web')) {
      // attrs
      const contextAttrsIsShow = await page.$('#context-attrs-is-show')
      expect(await contextAttrsIsShow.text()).toBe('context.attrs.isShow: true')

      // emits
      const compUpdateObjBtn = await page.$('#comp-update-obj-btn')
      await compUpdateObjBtn.tap()
      const propsObjStr = await page.$('#props-obj-str')
      expect(await propsObjStr.text()).toBe(`props.obj['str']: obj new str by comp update`)
      const propsObjNum = await page.$('#props-obj-num')
      expect(await propsObjNum.text()).toBe(`props.obj['num']: 200`)
      const propsObjBool = await page.$('#props-obj-bool')
      expect(await propsObjBool.text()).toBe(`props.obj['bool']: true`)
    }
    // slots
    const defaultSlotInFoo = await page.$('#default-slot-in-foo')
    expect(await defaultSlotInFoo.text()).toBe('default slot in Foo')
    const hasDefaultSlot = await page.$('#has-default-slot')
    expect(await hasDefaultSlot.text()).toBe('hasDefaultSlot: true')
  })
})