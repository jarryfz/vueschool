const Mock = require('mockjs') // 获取mock对象
const Random = Mock.Random // 获取random对象，随机生成各种数据，具体请翻阅文档
const domain = 'http://mockjs.com/api' // 定义默认域名，随便写
const code = 200 // 返回的状态码
const list = req => {
  let data = [];
  if(req.body){
    for (let i = 0; i < 10; i++) {
      let image = [];
      for (let i=0;i<Random.natural(0,5);i++) {
        let arrimg = Random.dataImage('300x200')
        image.push(arrimg)
      }
      let tags = ['吐槽一下', '今天学到了', '我在阳光暗恋你', '读书角']
      let res = {
        id: Random.natural(0, 100),
        img: image,
        tag: tags[Random.natural(0, 2)],
        name: Random.ctitle(2, 8),
        time: Random.date() + ' ' + Random.time(), // 随机生成年月日 + 时间
        avatar: Random.dataImage('300x300'),
        content: Random.csentence(15, 400),
        totalComment: Random.natural(0, 1000),
      }
      data.push(res);
    }
    // console.log(data)
  }
  return {
    data,
    code
  }
}
Mock.mock(`${ domain }/tweet/list`, 'post', list)