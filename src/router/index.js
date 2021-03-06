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
      meta: { keepAlive: false },
      component: () => import('@/views/Home.vue'),
      children: [
        {
          path: '/home',
          name: 'index',
          meta: { keepAlive: true },
          component: () => import('@/views/home/home.vue')
        },
        {
          path: '/school-news',
          name: 'schoolNews',
          meta: { keepAlive: true },
          component: () => import('@/views/home/schoolNews.vue')
        },
        {
          path: '/message',
          name: 'message',
          meta: { keepAlive: true },
          component: () => import('@/views/home/message.vue')
        },
        {
          path: '/mine',
          name: 'mine',
          meta: { keepAlive: true },
          component: () => import('@/views/home/mine.vue')
        }
      ]
    },
    {
      path: "/market",
      name: "market",
      meta: { keepAlive: true },
      component: () => import("@/views/market/index.vue")
    },
    {
      path: '/twitter-school',
      name: 'twitterSchool',
      meta: { keepAlive: true },
      component: () => import('@/views/tweet/index.vue')
    },
    {
      path: "/shop",
      name: "shop",
      meta: { keepAlive: true },
      component: () => import("@/views/shop/index.vue")
    },
    {
      path: "/repairService",
      name: "repairService",
      meta: { keepAlive: true },
      component: () => import("@/views/repairService/index.vue")
    },
    {
      path: "/campusScenery",
      name: "campusScenery",
      meta: { keepAlive: true },
      component: () => import("@/views/campusScenery/index.vue")
    },
    {
      path: "/club-activite",
      name: "clubActivite",
      meta: { keepAlive: true },
      component: () => import("@/views/clubActive/index.vue")
    },
    {
      path: "/paymentCenter",
      name: "paymentCenter",
      meta: { keepAlive: true },
      component: () => import("@/views/gridPage/paymentCenter.vue")
    },
    {
      path: "/myClassSchedule",
      name: "myClassSchedule",
      meta: { keepAlive: true },
      component: () => import("@/views/gridPage/myClassSchedule.vue")
    },
    {
      path: "/lostAndFound",
      name: "lostAndFound",
      meta: { keepAlive: true },
      component: () => import("@/views/lostAndFound/index.vue")
    },
    {
      path: "/announcement",
      name: "announcement",
      meta: { keepAlive: true },
      component: () => import("@/views/announcement/index.vue")
    },
    {
      path: "/market/:id",
      name: "marketDetail",
      meta: { keepAlive: false },
      component: () => import("@/views/gridPage/detail.vue")
    },
    {
      path: "/vanTMobileHtml/:id",
      name: "vanTMobileHtmlDetail",
      meta: { keepAlive: false },
      component: () => import("@/views/gridPage/details/vanTMobileHtmlDetail.vue")
    },
    {
      path: '/twitterDetail/:id',
      name: 'twitterDetail',
      meta: { keepAlive: false },
      component: () => import('@/views/gridPage/details/twitterDetail.vue')
    },
    {
      path: '*',
      name: '404',
      meta: { keepAlive: true },
      component: () => import("@/components/404.vue")
    }
  ],
  scrollBehavior: () => ({y: 0}),
})