const Mock = require('mockjs') // 获取mock对象
const Random = Mock.Random // 获取random对象，随机生成各种数据，具体请翻阅文档
const domain = 'http://mockjs.com/api' // 定义默认域名，随便写
const code = 200 // 返回的状态码

/** 
 * 列表
*/
const list = req => {
  let data = [];
  for(let i=0;i<10;i++) {
    let image = [];
    for (let i=0;i<10;i++) {
      let arrimg = Random.dataImage('300x300')
      image.push(arrimg)
    }
    let res = {
      id: Random.natural(0, 100),
      goodsImg: Random.dataImage('300x300'),
      avatar: Random.dataImage('300x300'),
      title: Random.ctitle(10, 30),
      time: Random.date() + ' ' + Random.time(),// 随机生成年月日 + 时间
      name: Random.ctitle(2, 10),
      price: Random.natural(0, 10000),
      total: Random.natural(0,1000),
    }
    data.push(res)
  }
  return {
    code,
    data
  }
}
Mock.mock(`${domain}/market/list`, 'post', list);