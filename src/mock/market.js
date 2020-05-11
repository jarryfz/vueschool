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
    let image = [
      'http://gw.alicdn.com/bao/uploaded/i1/268066261/TB2.INvcH1YBuNjSszhXXcUsFXa_!!268066261.jpg_500x500q90.jpg_.webp',
      'http://gw.alicdn.com/bao/uploaded/i1/1108572202/O1CN01wffSLO1S8YhVX30kz_!!0-item_pic.jpg_500x500q90.jpg_.webp',
      'http://gw.alicdn.com/bao/uploaded/i1/2989623149/TB1C.QcRpXXXXXIaFXXXXXXXXXX_!!0-item_pic.jpg_500x500q90.jpg_.webp',
      'http://gw.alicdn.com/bao/uploaded/i4/2593879590/O1CN01Km9YiE2KiGntmRstx_!!2593879590.jpg_500x500q90.jpg_.webp',
      'http://gw.alicdn.com/bao/uploaded/i4/2002302006/O1CN01URbGMI1Qgn6glT2jU_!!2002302006.jpg_500x500q90.jpg_.webp',
      'http://gw.alicdn.com/bao/uploaded/i1/2900593873/O1CN01mK289X1eTsW5fmMGq_!!2900593873.jpg_500x500q90.jpg_.webp',
      'http://gw.alicdn.com/bao/uploaded/i4/1076519861/O1CN01kfaJAJ2MiOCVaqDRm_!!1076519861.jpg_500x500q90.jpg_.webp',
      'http://gw.alicdn.com/bao/uploaded/i1/2215302589/O1CN01JDv16h1UznyuyC4lQ_!!2215302589.jpg_500x500q90.jpg_.webp',
      'http://gw.alicdn.com/bao/uploaded/i1/50454948/O1CN01F97q8B1mQEISSNC6s_!!50454948.jpg_500x500q90.jpg_.webp',
      'http://img.alicdn.com/bao/uploaded/TB1y06HFbj1gK0jSZFuXXcrHpXa.png_292x292Q50s50.jpg_.webp',
      'http://img.alicdn.com/bao/uploaded/i1/TB1i0kICYr1gK0jSZR0SuvP8XXa.jpg_440x440Q50s50.jpg_.webp'
    ];
    let res = {
      id: Random.natural(0, 100),
      goodsImg: image[Random.natural(0,10)],
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

const marketIndex = req => {
  let list = ['../../../static/banner1.jpg','../../../static/banner2.jpg','../../../static/banner3.jpg','../../../static/banner4.jpg'];
  let data = {
    list: list
  }
  return {
    code,
    data
  }
}
Mock.mock(`${domain}/market/list`, 'post', list);
Mock.mock(`${domain}/market/index`,'post', marketIndex);