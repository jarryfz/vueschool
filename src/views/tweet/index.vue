<template>
  <div class="j-tweet">
    <div class="j-tweet-header">
      <navigation-bar
        :isShowBack="true"
        :isNavRight="false"
        pageClassName="j-tweet"
        :isImmersion="false"
      >
      </navigation-bar>
    </div>
    <div class="main-content">
      <van-tabs v-model="active" background="#FFFFFF" animated title-active-color="#07c160" color="#07c160" @click="tabClick">
        <van-tab
          v-for="(item,index) in tabList"
          :key="index"
          :title="item.title"
        >
          <tab-refresh-list request="list" modules="tweet" :tabindex="active" height="calc(100% - 44px)">
            <template v-slot="{ list }">
              <sc-froum :froumList="list" @onScForm="onScForm"></sc-froum>
            </template>
          </tab-refresh-list>
        </van-tab>
      </van-tabs>
    </div>
  </div>
</template>

<script>
import { Tab, Tabs, NavBar, Loading } from 'vant';
import tabRefreshList from "@/components/TabRefreshList.vue";
import ScFroum from "@/components/ScFroum.vue";
import navbar from "@/mixins/navbar.js";
import navigationBar from '@/components/NavigationBar/index'
export default {
  name: "twitterSchool",
  components: {
    tabRefreshList,
    navigationBar,
    ScFroum,
    [Tab.name]: Tab,
    [Tabs.name]: Tabs,
    [NavBar.name]: NavBar,
    [Loading.name]: Loading
  },
  mixins: [navbar],
  data() {
    return {
      active: 0,
      tabList: [
        { title: "吐槽一下" },
        { title: "我在阳光暗恋你" },
        { title: "今天学到了" },
        { title: "读书角" }
      ]
    }
  },
  watch: {

  },
  methods: {
    tabClick(index) {
      console.log(index)
    },
    onScForm(id) {
      this.$router.push({path: `/twitterDetail/${id}`})
    }
  }
}
</script>

<style lang="scss" scoped>
 .j-tweet {
    height: 100%;
    overflow-y: scroll;
    .j-tweet-header {
      height: 50px;
      position: fixed;
      top: 0;
      width: 100%;
      z-index: 11;
    }
  }
.main-content {
  // background: #f6f6f6;
  height: 100%;
  &::before {
    content: '';
    height: 44px;
    background: #fff;
    display: block;
  }
  ::v-deep .van-tabs {
    height: calc(100% - 46px);
  }
  ::v-deep .van-tabs__wrap {
    position: fixed;
    z-index: 10;
    width: 100%;
  }
  ::v-deep .van-tabs__content {
    height: 100%;
    &::before {
      content: '';
      height: 45px;
      display: block;
    }
  }
  ::v-deep .van-tab__pane {
    height: 100%;
  }
}
.van-nav-bar {
  z-index: 11;
}
</style>