<template>
  <van-tabs v-model="active" sticky background="#FFFFFF" animated title-active-color="#07c160" color="#07c160" @click="tabClick">
    <van-tab
      v-for="(item,index) in tabList"
      :key="index" 
      :title="item.title"
    >
      <tab-refresh-list requestUrl="/twitter" :tabindex="active">
        <template v-slot="{ list }">
          <sc-froum :froumList="list"></sc-froum>
        </template>
      </tab-refresh-list>
    </van-tab>
  </van-tabs>
</template>

<script>
import { Tab, Tabs } from 'vant';
import tabRefreshList from "@/components/TabRefreshList.vue";
import ScFroum from "@/components/ScFroum.vue";
export default {
  name: "twitterSchool",
  components: {
    tabRefreshList,
    ScFroum,
    [Tab.name]: Tab,
    [Tabs.name]: Tabs
  },
  mixins: [],
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
    }
  }
}
</script>