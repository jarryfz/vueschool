<template>
  <div class="j-market">
    <div class="j-market-header">
      <navigation-bar
        :isShowBack="true"
        :isNavRight="false"
        pageClassName="van-pull-refresh"
        :isImmersion="false"
      >
      </navigation-bar>
    </div>
    
    <div class="main-content">
      <van-dropdown-menu active-color="#673ab7">
        <van-dropdown-item v-model="value1" :options="option1" @change="itemChange" />
        <van-dropdown-item title="筛选" ref="item">
          <van-cell center title="包邮">
            <!-- <template #right-icon>
              <van-switch v-model="switch1" size="24" active-color="#ee0a24" />
            </template> -->
          </van-cell>
          <van-cell center title="团购">
            <!-- <template #right-icon>
              <van-switch v-model="switch2" size="24" active-color="#ee0a24" />
            </template> -->
          </van-cell>
        </van-dropdown-item>
      </van-dropdown-menu>
      <tab-refresh-list request="list" modules="market" :tabindex="value1" height="calc(100% - 90px)">
        <template v-slot="{ list }">
          <van-swipe class="my-swipe" :autoplay="5000" indicator-color="#39a9ed">
            <van-swipe-item v-for="(item,index) in bannerList" :key="index">
              <img :src="item" alt="">
            </van-swipe-item>
          </van-swipe>
          <div class="list">
            <goods :goodsList="list" @goodsDetailBtn="detail"></goods>
          </div>
        </template>
      </tab-refresh-list>
    </div>
    
  </div>
</template>

<script>
import { 
  NavBar,
  Tab,
  Tabs,
  Swipe,
  SwipeItem,
  DropdownMenu,
  DropdownItem
} from 'vant';
import TabRefreshList from "@/components/TabRefreshList.vue";
import goods from "@/components/goods.vue";
import NavigationBar from '@/components/NavigationBar/index'
export default {
  name: "market",
  components: {
    goods,
    TabRefreshList,
    NavigationBar,
    [NavBar.name]: NavBar,
    [Tab.name]: Tab,
    [Tabs.name]: Tabs,
    [Swipe.name]: Swipe,
    [SwipeItem.name]: SwipeItem,
    [DropdownMenu.name]: DropdownMenu,
    [DropdownItem.name]: DropdownItem
  },
  data() {
    return {
      value1: 0,
      value2: 'a',
      goodsList: [],
      bannerList: [
        require('../../../static/banner1.jpg'),
        require('../../../static/banner2.jpg'),
        require('../../../static/banner3.jpg'),
        require('../../../static/banner4.jpg')
      ], 
      option1: [
        { text: '全部商品', value: 0 },
        { text: '新款商品', value: 1 },
        { text: '活动商品', value: 2 },
      ],
      option2: [
        { text: '默认排序', value: 'a' },
        { text: '好评排序', value: 'b' },
        { text: '销量排序', value: 'c' },
      ],
    }
  },
  methods: {
    itemChange(value) {
      
    },
    onClickLeft() {
      this.$router.push({path: "/"})
    },
    detail(params) {
      this.$router.push({path: `/market/${params}`})
    },
  }
}
</script>

<style lang="scss" scoped>
  .j-market {
    height: 100%;
    overflow-y: scroll;
    .j-market-header {
      height: 50px;
      position: fixed;
      top: 0;
      width: 100%;
      z-index: 11;
    }
  }
  .my-swipe .van-swipe-item {
    color: #fff;
    font-size: 20px;
    // line-height: 200px;
    height: 200px;
    text-align: center;
    // background-color: #e03500;
    outline: none;
    border-radius: 6px;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .body{
    margin: 0 16px;
  }
  .card {
    flex: 1;
    margin-top: 8px;
    border: 1px solid #CCCCCC;
    border-radius: 5px;
    box-sizing: border-box;
    // box-shadow: 0 0 3px #000000;
    // line-height: 120px;
  }
  .m-r-2 {
    margin-right: 5px;
  }
  .m-l-2 {
    margin-left: 5px;
  }
  .flex1 {
    flex: 1;
  }
  .list {
    width: 100%;
    font-size: 0;
  }
  
</style>