const Mock = require('mockjs') // 获取mock对象
const Random = Mock.Random // 获取random对象，随机生成各种数据，具体请翻阅文档
const domain = 'http://mockjs.com/api' // 定义默认域名，随便写
const code = 200 // 返回的状态码
const list = req => {
  let data = [];
  if(req.body){
    let image = [];
    for (let i=0;i<Random.natural(0,3);i++) {
      let arrimg = Random.dataImage('300x150')
      image.push(arrimg)
    }
    for (let i = 0; i < 10; i++) {
      let res = {
        id: Random.natural(0, 100),
        img: image,
        name: Random.ctitle(2, 8),
        time: Random.date() + ' ' + Random.time(), // 随机生成年月日 + 时间
        avatar: Random.dataImage('300x300'),
        content: Random.csentence(15, 40),
        totalComment: Random.natural(0, 1000),
      }
      data.push(res);
    }
    console.log(data)
  }
  return {
    data,
    code
  }
}
Mock.mock(`${ domain }/twitter`, 'post', list)