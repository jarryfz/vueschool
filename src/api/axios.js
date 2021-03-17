import request from './request'
import qs from 'qs'
function get(params, url, headersType, responseType) {
  return request({
    url: url,
    method: 'get',
    params,
    responseType: responseType
  })
}

function post(params, url, headersType) {
  return request({
    url: url,
    method: 'post',
    data: params,
    headers: {
      'Content-Type': headersType || 'application/x-www-form-urlencoded'
    }
  })
}

function put(params, url, headersType) {
  console.log(headersType)
  return request({
    url: filterUrl(url),
    method: 'put',
    data: params,
    headers: {
      'Content-Type': headersType || 'application/x-www-form-urlencoded'
    }
  })
}

function del(params, url) {
  return request({
    url: filterUrl(url),
    method: 'delete',
    params,
    // 使用 qs插件对参数做序列化
    paramsSerializer: params => {
      return qs.stringify(params, { indices: false })
    }
  })
}

function filterUrl(url) {
  return url.indexOf('?') !== -1 ? `${url}&time=${new Date().getTime()}` : `${url}?time=${new Date().getTime()}`
}

export { get, post, put, del }