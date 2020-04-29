const Mock = require('mockjs') // 获取mock对象
const Random = Mock.Random // 获取random对象，随机生成各种数据，具体请翻阅文档
const domain = 'http://mockjs.com/api' // 定义默认域名，随便写
const code = 200 // 返回的状态码
// 随机生成文章数据
const postData = req => {
  // console.log(req) // 请求体，用于获取参数
  let data = [] // 用于存放文章数据的数组
  for (let i = 0; i < 10; i++) {
    let post = {
      title: Random.ctitle(10, 50), // 随机生成长度为10-25的标题
      icon: Random.dataImage('250x250', '文章icon'), // 随机生成大小为250x250的图片链接
      author: Random.cname(), // 随机生成名字
      date: Random.date() + ' ' + Random.time() // 随机生成年月日 + 时间
    }

    data.push(post)
  }
  // 返回状态码和文章数据posts
  return {
    code,
    data
  }
}

const mockdata = req => {
  let data = [];
  for(let i=0;i<10;i++) {
    let resdata = {
      name: Random.cname(),
      icon: Random.image('500x500', '#00405d', '#FFF', 'Mock.js'),
      type: Random.pick(['用户1', '用户2', '用户3', '用户4', '用户5']),
    }
    data.push(resdata)
  }
  return {
    code,
    data
  }
}
/** 
 * 首页资讯mock数据
*/
const newsList = req => {
  let data = [];
  let image = [];
  for (let i=0;i<10;i++) {
    let arrimg = Random.dataImage('300x300')
    image.push(arrimg)
  }
  for(let i=0;i<10;i++) {
    let res = {
      id: Random.natural(0, 100),
      img: Random.dataImage('300x300'),
      title: Random.ctitle(10, 50),
      time: Random.date() + ' ' + Random.time(), // 随机生成年月日 + 时间
      author: Random.ctitle(2, 10),
      content: Random.csentence(20, 50),
      totalComments: Random.natural(0,1000000),
    }
    data.push(res)
  }
  return {
    code,
    data
  }
}
/** 
 * 首页论坛mock数据
*/
const froumList = req => {
  let data = [];
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
    data.push(res)
  }
  return {
    code,
    data
  }
}

// 定义请求链接，类型，还有返回数据
Mock.mock(`${domain}/posts`, 'get', postData);
Mock.mock(`${domain}/userinfo`, 'post', mockdata);
Mock.mock(`${domain}/home/newsList`, 'post', newsList);
Mock.mock(`${domain}/home/froum`, 'post', froumList);