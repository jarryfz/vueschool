<template>
  <router-view v-slot="{ Component }">
    <transition :name="transitionName">
      <component :is="Component" />
    </transition>
  </router-view>
  <van-tabbar v-model="active" route>
    <van-tabbar-item icon="home-o" to="/">首页</van-tabbar-item>
    <van-tabbar-item icon="friends-o" to="/mineView">嘀嗒</van-tabbar-item>
    <van-tabbar-item icon="setting-o">个人中心</van-tabbar-item>
  </van-tabbar>
</template>

<script setup>
import { ref } from 'vue'
// import { useRouter } from 'vue-router'
const active = ref(0)
const transitionName = ref('slide_left')
// const router = useRouter()
// router.beforeEach((to, from) => {
//   if (to.meta.index > from.meta.index) {
//     transitionName.value = 'slide-left' // 向左滑动
//   } else if (to.meta.index < from.meta.index) {
//     // 由次级到主级
//     transitionName.value = 'slide-right'
//   } else {
//     transitionName.value = ''   // 同级无过渡效果
//   }
// })
</script>
<style>
#app {
  height: 100%;
}
.appView {
  width: 100%;
  height: 100%;
  will-change: transform;
  transition: all 300ms;
  position: absolute;
  backface-visibility: hidden;
  perspective: 1000;
  -webkit-overflow-scrolling: touch;
}
.slide_left-enter-active, .slide_left-leave-active, .slide_right-enter-active, .slide_right-leave-active {
  transition: all 0.3s;
  position: absolute !important;
  background-color: white;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  z-index: 1;
}
.slide_left-enter-from, .slide_right-leave-to {
  opacity: 1;
  transform: translateX(100%);
}

.slide_right-enter-from, .slide_left-leave-to {
  opacity: 1;
  transform: translateX(-100%);
}

.slide_left-leave-to, .slide_right-leave-to {
  opacity: 0;
}
/* // 进入前 */
.fade-enter-from {

width: 100%;
height: 100%;
opacity: 0;
}
/* // 进入的这个阶段 */
.fade-enter-active {

transition: all 2s;
}
/* // 进入后 */
.fade-enter-to {

width: 100px;
height: 100px;
opacity: 1;
}
/* // 离开前 */
.fade-leave-from {

width: 100px;
height: 100px;
opacity: 1;
}
/* // 进入的这个阶段 */
.fade-leave-active {

transition: all 2s ease;
}
/* // 离开后 */
.fade-leave-to {

width: 100%;
height: 100%;
opacity: 0;
}
</style>
