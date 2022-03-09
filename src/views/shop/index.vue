<template>
  <div class="j-shop">
    <div class="j-shop-header">
      <navigation-bar
        :isShowBack="true"
        :isNavRight="false"
        pageClassName="j-shop"
        :isImmersion="false"
      >
      </navigation-bar>
    </div>
    <!-- <van-nav-bar title="宿舍小卖铺" left-arrow @click-left="onClickLeft" /> -->
    <div class="main-content">
      <van-dropdown-menu>
        <van-dropdown-item v-model="value1" :options="option" />
        <van-dropdown-item title="筛选" ref="item">
          <van-cell center title="包邮">
            <template #right-icon>
              2
            </template>
          </van-cell>
          <van-cell center title="团购">
            <template #right-icon>
              3
            </template>
          </van-cell>
          <div style="padding: 5px 16px">
            <!-- <van-button type="danger" block round @click="onConfirm">
              确认
            </van-button> -->
          </div>
        </van-dropdown-item>
      </van-dropdown-menu>
    </div>
  </div>
</template>

<script>
import navigationBar from '@/components/NavigationBar/index'
export default {
  name: "shop",
  components: {
    navigationBar
  },
  data() {
    return {
      scroll: "",
      value1: 0,
      activeKey: 0,
      value: "",
      switch1: false,
      switch2: false,
      option: [
        { text: "全部商品", value: 0 },
        { text: "新款商品", value: 1 },
        { text: "活动商品", value: 2 }
      ],
    };
  },
  created() {},
  mounted() {},
  methods: {
    onSearch() {
      console.log(this.value);
    },
    onConfirm() {
      this.$refs.item.toggle();
    }
  }
};
</script>

<style lang="scss" scoped>
.j-shop {
  height: 100%;
  overflow-y: auto;
  .j-shop-header {
    height: 50px;
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 11;
  }
  & .van-search {
    width: 100%;
  }
}
</style>
