<template>
  <div class="">
    <van-search
      v-model="value"
      shape="round"
      background="#4fc08d"
      placeholder="请输入搜索关键词"
    ></van-search>
    <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
      <van-notice-bar color="#1989fa" background="#ecf9ff" left-icon="volume-o">
        通知内容
      </van-notice-bar>
      <van-grid clickable :column-num="4">
        <van-grid-item icon="icon iconfont icon-ershou" text="淘市场" to="market" />
        <van-grid-item icon="icon iconfont icon-ershoushichang" text="小卖部" to="shop" />
        <van-grid-item icon="icon iconfont icon-baoxiu" text="报修服务" to="repairService" />
        <van-grid-item icon="icon iconfont icon-fengjing" text="叽喳校园" to="twitter-school" />
        <van-grid-item icon="icon iconfont icon-iconcard" text="缴费中心" to="paymentCenter" />
        <van-grid-item icon="icon iconfont icon-kebiao" text="我的课表" to="myClassSchedule" />
        <van-grid-item icon="icon iconfont icon-dibudaohanglan-" text="失物招领" to="vanTMobileHtml" />
        <van-grid-item icon="icon iconfont icon-gonggao" text="通知公告" to="announcement" />
      </van-grid>
      <van-swipe :autoplay="5000" class="my-swipe" indicator-color="white">
        <!-- <van-swipe-item v-for="(image, index) in images" :key="index">
          <img v-lazy="image" />
        </van-swipe-item> -->
        <van-swipe-item v-bgColor>1</van-swipe-item>
        <van-swipe-item>2</van-swipe-item>
        <van-swipe-item>3</van-swipe-item>
        <van-swipe-item>4</van-swipe-item>
      </van-swipe>
      <van-cell title="叽喳叽喳" icon="location-o" />
      <sc-froum :froumList="froumList"></sc-froum>
      <van-cell title="校内资讯" icon="location-o" />
      <sc-news-list :newsList="newsList"></sc-news-list>
    </van-pull-refresh>
  </div>
</template>

<script>
import { Icon } from 'vant';
import { Search } from 'vant';
import { PullRefresh } from 'vant';
import { Toast } from 'vant';
import { Grid, GridItem } from 'vant';
import { Swipe, SwipeItem } from 'vant';
import { NoticeBar } from 'vant';
import { Cell } from 'vant';
import { Tab, Tabs } from 'vant';
import ScNewsList from '@/components/ScNewsList.vue';
import scrollTop from "@/mixins/scrollTop.js";
import ScFroum from "@/components/ScFroum.vue";
export default {
  name: 'home',
  components: {
    ScNewsList,
    ScFroum,
    [PullRefresh.name]: PullRefresh,
    [Toast.name]: Toast,
    [Grid.name]: Grid,
    [GridItem.name]: GridItem,
    [Search.name]: Search,
    [Swipe.name]: Swipe,
    [SwipeItem.name]: SwipeItem,
    [NoticeBar.name]: NoticeBar,
    [Cell.name]: Cell,
    [Icon.name]: Icon,
    [Tab.name]: Tab,
    [Tabs.name]: Tabs
  },
  mixins: [scrollTop],
  data() {
    return {
      count: 0,
      isLoading: false,
      value: '',
      images: [
        'https://img.yzcdn.cn/vant/apple-1.jpg',
        'https://img.yzcdn.cn/vant/apple-2.jpg',
      ],
      newsList: [],
      froumList: [],
      active: 0,
      scroll: '',
    }
  },
  created() {
    this.queryList();
  },
  methods: {
    onRefresh() {
      setTimeout(() => {
        Toast('刷新成功');
        this.queryList();
        this.count++;
        this.isLoading = false;
      }, 1000);
    },
    queryList() {
      this.$http.post("/home/newsList").then(res => {
        console.log(res.data)
        this.newsList = res.data.data;
      })
      this.$http.post("/home/froum").then(res => {
        console.log(res.data)
        this.froumList = res.data.data;
      })
    }
  },
};
</script>

<style lang="scss" scoped>
.my-swipe .van-swipe-item {
  color: #fff;
  font-size: 20px;
  line-height: 150px;
  text-align: center;
  background-color: #39a9ed;
}

</style>