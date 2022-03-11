<!-- 使用方法 传入请求参数 请求URL即可-->
<!--  
  <tab-refresh-list requestUrl="/market/list">
    <template v-slot="{ list }">
      .....
    </template>
  </tab-refresh-list>

  [!必填] [?非必填]
  requestUrl: 请求api [!]
  tabindex: tabs导航 [?]
-->
<template>
  <div class="pull-refresh-box">
    <van-pull-refresh v-model="refresh" @refresh="onRefresh">
      <template v-if="!hasData">
        <van-list
          v-model="loading"
          :finished="finished"
          :immediate-check="false"
          :offset="50"
          finished-text="没有更多了"
          @load="onLoad"
        >
          <slot name="content"></slot>
          <slot :list="list"></slot>
        </van-list>
        <!-- <van-loading type="spinner" color="#1989fa" /> -->
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
export default {
  name: "TabRefreshList",
  components: {},
  props: {
    height: {
      type: String || Number,
      default: () => {}
    },
    modules: {
      type: String,
      default: () => {}
    },
    request: {
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
  mounted() {
    console.log(this)
    // setTimeout(() =>{
      // this.getData()
    // },300)
    this.getData();
  },
  methods: {
    async getData() {
      try {
        const params = {
          id: this.tabindex
        };
        const result = await this.$api[this.modules][this.request](params);
        if (result) {
          this.hasData = result.data.length > 0 ? false : true;
          if (!this.hasData) {
            this.list = this.list.concat(result.data);
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
      if (this.request) {
        setTimeout(() => {
          this.getData();
        }, 1000)
        // setTimeout(() => {
        //   this.getData();
        // }, 1000);
      } else {
        this.finished = true;
        this.refresh = false;
        this.loading = false;
      }
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

