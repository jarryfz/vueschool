<template>
  <div id="app">
    <router-view></router-view>
    <!-- <van-tabbar v-model="active" active-color="#07c160" inactive-color="#000" route>
      <van-tabbar-item replace to="/home" icon="home-o">首页</van-tabbar-item>
      <van-tabbar-item replace to="/school-news" icon="search">校园资讯</van-tabbar-item>
      <van-tabbar-item replace to="/twitter-school" icon="freinds-o">叽喳校园</van-tabbar-item>
      <van-tabbar-item replace to="/mine" icon="setting-o">个人中心</van-tabbar-item>
    </van-tabbar> -->
  </div>
</template>

<script>
  import { Tabbar, TabbarItem } from 'vant';
  export default {
    components:{
      [Tabbar.name]: Tabbar,
      [TabbarItem.name]: TabbarItem
    },
    data () {
      return {
        active: 0,
      }
    }
  }
</script>
<style lang="scss">
html,body{
  height: calc(100% - 50px);

}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  height: 100%;
}
</style>
