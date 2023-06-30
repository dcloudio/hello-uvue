// uni-app自动化测试教程: https://uniapp.dcloud.net.cn/worktile/auto/hbuilderx-extension/
const PAGE_PATH = '/pages/state/methods/methods'
let page;
describe('/pages/state/methods/methods', () => {
  beforeAll(async () => {
    page = await program.reLaunch(PAGE_PATH)
    page = await program.currentPage();
    console.log('page', page);
    // await page.waitFor(3000);
  });


  it('检查“通过方法返回的数据”是否正确（从视图中拿）', async () => {

    page.callMethod('addNum')
    page.callMethod('getMultiply100Num')
    
    //显示在界面上的 num乘于100的数
    let multiply100Num = await getText('#multiply100Num')
    console.log('multiply100Num', multiply100Num);
    let num = await getText('#num')
    console.log('num', num);
    console.log('multiply100Num', multiply100Num);
    expect(num*100).toEqual(multiply100Num*1);
    
    
    
    page.callMethod('addNum')
    page.callMethod('getMultiply100Num')
    
    //显示在界面上的 num乘于100的数
    multiply100Num = await getText('#multiply100Num')
    console.log('multiply100Num', multiply100Num);
    num = await getText('#num')
    
    console.log('num', num);
    console.log('multiply100Num', multiply100Num);
    
    expect(num*100).toEqual(multiply100Num*1);
    

  });
});


async function getText(param) {
  return await (await page.$(param)).text();
}