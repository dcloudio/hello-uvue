const PAGE_PATH = '/pages/component-instance/watch-function/watch-array'

describe('watch', () => {
  let page
  beforeAll(async () => {
    page = await program.reLaunch(PAGE_PATH)
    await page.waitFor(500)
  })

  it('change', async () => {
    // immediate count = 1
    await validateCount(page, 1)

    const btnChangeData1 = await page.$('.change-data1')
    await btnChangeData1.tap()
    await page.waitFor(100)
    // count = 1, 暂不支持 deep
    await validateCount(page, 1)
    // 验证数据正确性
    await validateData1(page, 1, 2)

    const btnChangeData2 = await page.$('.change-data2')
    await btnChangeData2.tap()
    await page.waitFor(100)
    // count = 2，重新赋值触发
    await validateCount(page, 2)
    // 验证数据正确性
    await validateData2(page, 3, 4)
  })
})

async function validateCount(page, count) {
  // page
  const count_text = await page.$('.watch-count')
  expect(await count_text.text()).toBe(count + '')

  // page.child
  const count_child = await page.$('.watch-array-child')
  const count_child_text = await count_child.$('.watch-count')
  expect(await count_child_text.text()).toBe(count + '')
}

async function validateData1(page, value1, value2) {
  const page_text = await page.$('.data-item-text')
  const page_json = JSON.parse(await page_text.text())
  expect(page_json.a).toBe(value1)
  expect(page_json.b).toBe(value2)

  const child = await page.$('.watch-array-child')
  const child_text = await child.$('.data-item-text')
  const child_json = JSON.parse(await child_text.text())
  expect(child_json.a).toBe(value1)
  expect(child_json.b).toBe(value2)
}

async function validateData2(page, value1, value2) {
  const page_text = await page.$('.data-item-text')
  const page_json = JSON.parse(await page_text.text())
  expect(page_json.c).toBe(value1)
  expect(page_json.d).toBe(value2)

  const child = await page.$('.watch-array-child')
  const child_text = await child.$('.data-item-text')
  const child_json = JSON.parse(await child_text.text())
  expect(child_json.c).toBe(value1)
  expect(child_json.d).toBe(value2)
}