<template>
  <div class="">
    <van-pull-refresh v-model="refresh" @refresh="onRefresh">
      <template v-if="!hasData">
        <van-list
          v-model="loading"
          :finished="finished"
          finished-text="没有更多了"
          @load="onLoad"
        >
          <slot :list="list"></slot>
        </van-list>
      </template>
      <van-empty
        v-if="hasData"
        class="custom-image"
        :image="emptyImage"
        description="描述文字"
      />
    </van-pull-refresh>
  </div>
</template>

<script>
import { List, PullRefresh, Empty } from "vant";
export default {
  name: "TabRefreshList",
  components: {
    [List.name]: List,
    [PullRefresh.name]: PullRefresh,
    [Empty.name]: Empty
  },
  props: {
    requestUrl: {
      type: String,
      default: () => {}
    },
    tabindex: {
      type: Number,
      default: null
    }
  },
  data() {
    return {
      list: [],
      hasData: false,
      refresh: false,
      loading: false,
      finished: false,
      emptyImage: require("@/assets/image/empty.png")
    }
  },
  methods: {
    async getData() {
      try {
        const params = {
          id: this.tabindex
        }
        const result = await this.$http.post(this.requestUrl, params);
        // console.log(result)
        if (result) {
          this.hasData = result.data.data.length > 0 ? false : true;
          if (!this.hasData) {
            for (const item of result.data.data) {
              this.list.push(item);
            }
          }
          this.finished = this.list.length >= 40 ? true : false;
        }
      } catch (e) {
        console.log(e);
      } finally {
        this.refresh = false;
        this.loading = false;
      }
    },
    onLoad() {
      setTimeout(() => {
        this.getData();
      }, 1000);
    },
    onRefresh() {
      // 清空列表数据
      this.finished = false;
      // 重新加载数据
      // 将 loading 设置为 true，表示处于加载状态
      this.loading = true;
      this.onLoad();
    }
  }
};
</script>

<style lang="scss" scoped>

</style>
