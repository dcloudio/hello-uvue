// uni-app自动化测试教程: https://uniapp.dcloud.net.cn/worktile/auto/hbuilderx-extension/
const PAGE_PATH = '/pages/state/props/props'
let page;
describe('/pages/state/props/props', () => {
  beforeAll(async () => {
    page = await program.reLaunch(PAGE_PATH)
    page = await program.currentPage();
    // console.log('page', page);
    await page.waitFor(1000);
  });

  it('检查往组件传递参数状态', async () => {
    let str = await getMyComponentText("#str")
    console.log('str-*--*-',str);
    expect(str).toEqual("你好我是props.uvue组件传进的数据");
    let num = await getMyComponentText("#num")
    // console.log('num-*--*-',num);
    expect(parseInt(num)).toEqual(1);
    page.callMethod('addNum')
    num = await getMyComponentText("#num")
    // console.log('num-*--*-',num);
    expect(parseInt(num)).toEqual(2);
  });
});
async function getMyComponentText(param){
  return await(await(await page.$('.my-component')).$(param)).text();
}