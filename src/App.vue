<template>
  <div id="app">
    <transition :name="direction">
      <router-view v-if="!$route.meta.keepAlive" class="appView"></router-view>
      <keep-alive>
        <router-view v-if="$route.meta.keepAlive" class="appView"></router-view>
      </keep-alive>
    </transition>
  </div>
</template>

<script>
import { Tabbar, TabbarItem } from "vant";
export default {
  components: {
    [Tabbar.name]: Tabbar,
    [TabbarItem.name]: TabbarItem
  },
  data() {
    return {
      active: 0,
      direction: 'slide-right'
    };
  },
  watch: {
    $route(to, from) {
      const toDepth = to.path.split("/").length;
      const fromDepth = from.path.split("/").length;
      if (to.path == "/") {
        this.direction = "slide-right";
      } else if (from.path == "/") {
        this.direction = "slide-left";
      }else{
        this.direction = toDepth < fromDepth ? "slide-right" : "slide-left";
      }
    }
  }
}
</script>
<style lang="scss">
html,body {
  height: 100%;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  height: 100%;
  background: #f4f4f4;
}
.appView {
  position: absolute;
  width:100%;
  // transition: transform 0.3s ease;
  transition: all 300ms;
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
.slide-right-leave-active{
  transform: translate(100%, 0);
  opacity: 1;
}
</style>
