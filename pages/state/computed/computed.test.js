// uni-app自动化测试教程: https://uniapp.dcloud.net.cn/worktile/auto/hbuilderx-extension/
const PAGE_PATH = '/pages/state/computed/computed'
let page;
describe('/pages/state/computed/computed', () => {
  beforeAll(async () => {
    page = await program.reLaunch(PAGE_PATH)
    page = await program.currentPage();
    console.log('page', page);
    // await page.waitFor(3000);
  });


  it('检查“计算属性”的数据是否渲染正确', async () => {
    let num = 3
    let computedNum = await getText('#computedNum')
    console.log('computedNum',computedNum);
    expect(parseInt(computedNum)).toEqual(num);
    
    page.callMethod('addB')
    num ++
    
    computedNum = await getText('#computedNum')
    expect(parseInt(computedNum)).toEqual(num);
    
  });
});


async function getText(param){
  return await (await page.$(param)).text();
}