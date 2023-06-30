// uni-app自动化测试教程: https://uniapp.dcloud.net.cn/worktile/auto/hbuilderx-extension/
const PAGE_PATH = '/pages/state/watch/watch'
let page;
describe('/pages/state/watch/watch', () => {
  beforeAll(async () => {
    page = await program.reLaunch(PAGE_PATH)
    page = await program.currentPage();
    console.log('page', page);
    // await page.waitFor(3000);
  });


  it('检查数据是否渲染正确', async () => {
    
    /*
    num
    addNum
    subNum
    oldNum
    changeIndex
    */

    
    let num = await getText('#num')
    expect(num/1).toEqual(0);
    
    let changeIndex = await getText('#changeIndex')
    expect(changeIndex/1).toEqual(0);
    
    
    page.callMethod('addNum')
    num = await getText('#num')
    expect(num/1).toEqual(1);
    
    let oldNum = await getText('#oldNum')
    expect(oldNum/1).toEqual(0);
    changeIndex = await getText('#changeIndex')
    expect(changeIndex/1).toEqual(1);
    
    page.callMethod('addNum')
    num = await getText('#num')
    expect(num/1).toEqual(2);
    
    oldNum = await getText('#oldNum')
    expect(oldNum/1).toEqual(1);
    changeIndex = await getText('#changeIndex')
    expect(changeIndex/1).toEqual(2);
    

  });
});


async function getText(param) {
  return await (await page.$(param)).text();
}