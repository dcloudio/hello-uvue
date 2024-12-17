const PAGE_PATH = '/pages/reactivity/core/reactive/reactive'

describe('reactive', () => {
    let page = null
    beforeAll(async () => {
        page = await program.reLaunch(PAGE_PATH)
        await page.waitFor('view')
    })
    it('basic', async () => {
        const count = await page.$('#count')
        expect(await count.text()).toBe('0')

        const objStr = await page.$('#obj-str')
        expect(await objStr.text()).toBe('default str')

        const objNum = await page.$('#obj-num')
        expect(await objNum.text()).toBe('0')

        const objArr = await page.$('#obj-arr')
        expect(await objArr.text()).toBe('["a","b","c"]')

        const arr1 = await page.$('#arr1')
        expect(await arr1.text()).toBe('[]')

        const updateCountBtn = await page.$('#update-count-btn')
        await updateCountBtn.tap()
        await page.waitFor(500)
        expect(await count.text()).toBe('1')

        const updateObjStrBtn = await page.$('#update-obj-str-btn')
        await updateObjStrBtn.tap()
        await page.waitFor(500)
        expect(await objStr.text()).toBe('new str')

        const updateObjNumBtn = await page.$('#update-obj-num-btn')
        await updateObjNumBtn.tap()
        await page.waitFor(500)
        expect(await count.text()).toBe('2')
        expect(await objNum.text()).toBe('2')

        const updateObjArrBtn = await page.$('#update-obj-arr-btn')
        await updateObjArrBtn.tap()
        await page.waitFor(500)
        expect(await objArr.text()).toBe('["a","b","c","d"]')

        const count1 = await page.$('#count1')
        expect(await count1.text()).toBe('1')

        const updateObj_A_B_C_Btn = await page.$('#update-obj1-a-b-c-btn')
        await updateObj_A_B_C_Btn.tap()
        expect(await count1.text()).toBe('2')

        const updateArr1Btn = await page.$('#update-arr1-btn')
        await updateArr1Btn.tap()
        await page.waitFor(500)
        expect(await arr1.text()).toBe(JSON.stringify([1, 2, 3]))

        const updateArr1ReactiveBtn = await page.$('#update-arr1-reactive-btn')
        await updateArr1ReactiveBtn.tap()
        expect(await arr1.text()).toBe(JSON.stringify([4, 5, 6]))
    })
})