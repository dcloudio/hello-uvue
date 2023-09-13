const PAGE_PATH = '/pages/component-instance/watch-function/watch-function'

describe('$watch()', () => {
  let page
  beforeAll(async () => {
    page = await program.reLaunch(PAGE_PATH)
    await page.waitFor(500)
  })

  it('$watch() 生效', async () => {
    // 验证立即触发
    const value4_new = await page.$('.value-4-n')
    const value4_old = await page.$('.value-4-o')
    expect(await value4_new.text()).toBe('6')
    expect(await value4_old.text()).toBe('6')

    const btn = await page.$('.btn-click')

    // 改变 10 次
    for (let i = 1; i < 10; i++) {
      await btn.tap()
      await page.waitFor(50)
      await clickCount(page, i)
    }
  })

  it('子组件 $watch() 生效', async () => {
    const initValue = await page.$('.child-init-value')
    const comp = await page.$('.watch-child')
    const value = await (await comp.data()).val
    const isChange = await (await comp.data()).changed

    expect(value).not.toBe('init')
    expect(isChange).toBe(true)

    const isChange2 = await (await comp.data()).immediateChanged
    expect(isChange2).toBe(true)
  })
})

async function clickCount(page, count) {
  // 验证数据
  const data = await page.data()
  const data_a = data.a
  const data_b = data.b
  const data_d = data.c.d
  const data_e = data.e
  const data_f = data.f
  expect(data_a).toBe(1 + count)
  expect(data_b).toBe(2 + count)
  expect(data_d).toBe(4 + count)
  expect(data_e).toBe(5 + count)
  expect(data_f).toBe(6 + count)

  // 验证界面
  const value1_new = await page.$('.value-1-n')
  const value1_old = await page.$('.value-1-o')
  const value2_new = await page.$('.value-2-n')
  const value2_old = await page.$('.value-2-o')
  const value3_new = await page.$('.value-3-n')
  const value3_old = await page.$('.value-3-o')
  const value4_new = await page.$('.value-4-n')
  const value4_old = await page.$('.value-4-o')
  const new_count = count
  const old_count = count - 1
  expect(await value1_new.text()).toBe(1 + new_count + '')
  expect(await value1_old.text()).toBe(1 + old_count + '')
  expect(await value2_new.text()).toBe(4 + new_count + '')
  expect(await value2_old.text()).toBe(4 + old_count + '')
  expect(await value3_new.text()).toBe(1 + new_count + 2 + new_count + '')
  expect(await value3_old.text()).toBe(1 + old_count + 2 + old_count + '')
  expect(await value4_new.text()).toBe(6 + new_count + '')
  expect(await value4_old.text()).toBe(6 + old_count + '')
}