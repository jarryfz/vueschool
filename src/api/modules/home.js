import { get, post } from '../axios'

export default {
  posts: function(params) {
    return get(params, '/posts')
  },
  newsList: function(params) {
    return post(params, '/home/newsList')
  },
  froumList: function(params) {
    return post(params, '/home/froum')
  }
}