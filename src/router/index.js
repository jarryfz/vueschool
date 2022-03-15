import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('../views/HomeView.vue'),
    meta: {
      index: 1
    }
  },
  {
    path: '/mineView',
    name: 'mineView',
    component: () => import('../views/Home/mineView.vue'),
    meta: {
      index: 2
    }
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
