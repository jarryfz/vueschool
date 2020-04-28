import request from '@/router/axios'

export function getList(data) {
  return request({
    url: '/home/index',
    method: 'post',
    data
  })
}