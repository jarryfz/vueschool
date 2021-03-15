<template>
  <div style="height: 100%">
    <van-nav-bar
      title="叽喳校园"
      left-arrow
      fixed
      :border="false"
      @click-left="onClickLeft"
    />
    <div class="main-content">
      <van-tabs v-model="active" background="#FFFFFF" animated title-active-color="#07c160" color="#07c160" @click="tabClick">
        <van-tab
          v-for="(item,index) in tabList"
          :key="index"
          :title="item.title"
        >
          <tab-refresh-list requestUrl="/twitter" :tabindex="active">
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
import { Tab, Tabs, NavBar } from 'vant';
import tabRefreshList from "@/components/TabRefreshList.vue";
import ScFroum from "@/components/ScFroum.vue";
import navbar from "@/mixins/navbar.js";
export default {
  name: "twitterSchool",
  components: {
    tabRefreshList,
    ScFroum,
    [Tab.name]: Tab,
    [Tabs.name]: Tabs,
    [NavBar.name]: NavBar
  },
  mixins: [navbar],
  data() {
    return {
      active: 0,
      tabList: [
        { title: "吐槽大会" },
        { title: "暗恋" },
        { title: "趣事分享" },
        { title: "学海无涯" }
      ]
    }
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