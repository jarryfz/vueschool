<template>
  <div class="">
    <van-nav-bar
      title="淘市场"
      left-arrow
      fixed
      @click-left="onClickLeft"
    />
    <div class="main-content">
      <tab-refresh-list requestUrl="/market/list">
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
export default {
  name: "market",
  components: {
    goods,
    TabRefreshList,
    [NavBar.name]: NavBar,
    [Tab.name]: Tab,
    [Tabs.name]: Tabs,
    [Swipe.name]: Swipe,
    [SwipeItem.name]: SwipeItem
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
  created() {
    // console.log(this.$router,this.$route)
    // let arr1 = [12,34,65,345,4];
    // let arr2 = [...arr1];
    // arr1.push(99);
    // console.log('arr1',arr1,'arr2',arr2)//arr1 (6) [12, 34, 65, 345, 4, 99] arr2 (5) [12, 34, 65, 345, 4];

    // /** 
    //  * 函数
    // */
    // function f(x=10,y=20) {
    //   console.log(x,y)
    // }
    // f(100);
    // /** 
    //  * 递归
    // */
    // function getsum(n) {
    //   if(n === 1) {
    //     return 1
    //   } else {
    //     return getsum(n - 1) + n;
    //   }
    // }
    // console.log(getsum(5))
    // const hs = (n) => {
    //   if(n == 1) {
    //     return 1
    //   }else {
    //     return hs(n - 1) + n
    //   }
    // }
    // console.log(hs(6))
  },
  methods: {
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