<template>
  <div class="pull-refresh-box">
    <van-pull-refresh v-model="refreshing" @refresh="onRefresh">
      <van-list
        v-model="loading"
        :finished="finished"
        finished-text="没有更多了"
        @load="onLoad"
      >
        <sc-news-list :newsList="list"></sc-news-list>
      </van-list>
    </van-pull-refresh>
  </div>
</template>
<script>
import ScNewsList from "@/components/ScNewsList.vue";
import scrollTop from "@/mixins/scrollTop.js";
export default {
  name: "schoolNews",
  components: {
    ScNewsList
  },
  mixins: [scrollTop],
  data() {
    return {
      list: [],
      loading: false,
      finished: false,
      refreshing: false,
      newsList: [],
    };
  },
  methods: {
    async onLoad() {
      if (this.refreshing) {
        this.list = [];
        this.refreshing = false;
      }
      const res = await this.$api.school.newsList();
      setTimeout(() => { // setTimeout模拟请求的过程
        this.newsList = res.data;
        this.newsList.forEach(val => {
          this.list.push(val);
        });
        this.loading = false;
      }, 1000);
      if (this.list.length >= 30) {
        this.finished = true;
      }
    },
    onRefresh() {
      // 清空列表数据
      this.finished = false;
      // 重新加载数据
      // 将 loading 设置为 true，表示处于加载状态
      this.loading = true;
      this.list = [];
      this.onLoad();
    },
  },
};
</script>
