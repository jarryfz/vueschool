<template>
  <div class="home">
    <div class="views">
      <keep-alive>
        <router-view v-if="$route.meta.keepAlive"></router-view>
      </keep-alive>
      <router-view v-if="!$route.meta.keepAlive"></router-view>
    </div>
    <van-tabbar
      v-model="active"
      active-color="#673ab7"
      inactive-color="#000"
      route
    >
      <van-tabbar-item replace to="/home" class="iconfont icon-shouye"
        >首页</van-tabbar-item
      >
      <van-tabbar-item
        replace
        to="/school-news"
        class="iconfont icon-xuexiaoxiaoyuanwangxinwenzixunfabushenpibiao"
      >
        校园资讯
      </van-tabbar-item>
      <!-- <van-tabbar-item replace to="/message" class="iconfont icon-14">消息</van-tabbar-item> -->
      <van-tabbar-item
        replace
        to="/mine"
        class="iconfont icon-iconfontgerenzhongxin"
        >个人中心</van-tabbar-item
      >
    </van-tabbar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: 0
    };
  },
  created() {},
  methods: {}
};
</script>

<style>
.home,.views {
  height: 100%;
}
.van-tabbar-item__text {
  font-size: 12px !important;
}
.views {
  height: calc(100% - 50px);
}
</style>
