import Vue from 'vue'
import Router from 'vue-router'

// 解决两次访问相同路由地址报错
const originalPush = Router.prototype.push
Router.prototype.push = function push (location) {
  return originalPush.call(this, location).catch(err => err)
}
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      redirect: '/home',
      component: () => import('@/views/Home.vue'),
      children: [
        {
          path: '/home',
          name: 'index',
          component: () => import('@/views/home/home.vue')
        },
        {
          path: '/school-news',
          name: 'schoolNews',
          component: () => import('@/views/home/schoolNews.vue')
        },
        {
          path: '/twitter-school',
          name: 'twitterSchool',
          component: () => import('@/views/home/twitterSchool.vue')
        },
        {
          path: '/mine',
          name: 'mine',
          component: () => import('@/views/home/mine.vue')
        }
      ]
    }
  ]
})