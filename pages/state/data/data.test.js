// uni-app自动化测试教程: https://uniapp.dcloud.net.cn/worktile/auto/hbuilderx-extension/
const PAGE_PATH = '/pages/state/data/data'
let page;
describe('/pages/state/state', () => {
  beforeAll(async () => {
    page = await program.reLaunch(PAGE_PATH)
    page = await program.currentPage();
    console.log('page', page);
    // await page.waitFor(3000);
  });

  const data = {
    num: 2023,
    str: '我是字符串',
    obj: {
      name: 'John',
      age: 30
    },
    arr: [1, 2, 3, 4, 5, 6, 7]
  }

  it('检查“data”是否渲染正确', async () => {
    const num = await getText('#num')
    expect(parseInt(num)).toEqual(data.num);
    
    const str = await getText('#str')
    expect(str).toEqual(data.str);
    
    const obj_name = await getText('#obj_name')
    expect(obj_name).toEqual(data.obj.name);
    
    const obj_age = await getText('#obj_age')
    expect(parseInt(obj_age)).toEqual(data.obj.age);
    
    const arr = await getText('#arr')
    expect(JSON.parse(arr)).toEqual(data.arr);
    
    for (var i = 0; i < data.arr.length; i++) {
      let arr_item = await getText('#arr_'+i)
      expect(parseInt(arr_item)).toEqual(data.arr[i]);
    }
    
  });
});


async function getText(param){
  return await (await page.$(param)).text();
}