<template>
  <div id="app">
    <transition :name="direction">
      <router-view v-if="!$route.meta.keepAlive" class="appView"></router-view>
      <div>
        <keep-alive>
          <router-view
            v-if="$route.meta.keepAlive"
            class="appView"
          ></router-view>
        </keep-alive>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      active: 0,
      loading: true,
      // direction: 'slide-right'
    };
  },
  mounted() {
    //打包hbuildx
    // document.addEventListener('plusready',function(s) {
    //   plus.navigator.setStatusBarBackground("transparent")
    // })
    this.loading = false;
  },
  computed: {
    direction: function() {
      // 通过vuex的getters方法来获取state里面的数据
      return this.$store.getters.getTransionFn;
    }
  }
  // watch: {
  //   $route(to, from) {
  //     const toDepth = to.path.split("/").length;
  //     const fromDepth = from.path.split("/").length;
  //     if (to.path == "/home") {
  //       this.direction = "slide-right";
  //     } else if (from.path == "/home") {
  //       this.direction = "slide-left"; 
  //     }else{
  //       this.direction = toDepth < fromDepth ? "slide-right" : "slide-left";
  //     }
  //   }
  // },
};
</script>
<style lang="scss">
html,
body {
  height: 100%;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  height: 100%;
  background: #f4f4f4;
  color: #333333;
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
  // position: absolute;
  // width:100%;
  // transition: transform 0.3s ease;
  // transition: all 500ms;
}
// .slide-right-enter-active,
// .slide-right-leave-active,
// .slide-left-enter-active,
// .slide-left-leave-active {
//   height: 100%;
//   will-change: transform;
//   transition: all 300ms;
//   position: absolute;
//   backface-visibility: hidden;
//   perspective: 1000;
// }
.slide-left-enter {
  opacity: 0;
  transform: translate3d(100%, 0, 0);
}
.slide-left-enter{
  transform: translate(100%, 0);
  opacity: 1;
}
.slide-left-leave-active{
  transform: translate(-50%, 0);
  opacity: 0;
}
.slide-right-enter {
  transform: translate(-50%, 0);
  opacity: 0;
}
.slide-right-leave-active {
  transform: translate(100%, 0);
  opacity: 1;
}
</style>
