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
      <p>刷新次数: {{ count }}</p>
      <van-grid clickable :column-num="4">
        <van-grid-item icon="home-o" text="淘市场" to="/" />
        <van-grid-item icon="search" text="小卖部" url="/vant/mobile.html" />
        <van-grid-item icon="search" text="报修服务" url="/vant/mobile.html" />
        <van-grid-item icon="search" text="校园风光" url="/vant/mobile.html" />
        <van-grid-item icon="search" text="缴费中心" url="/vant/mobile.html" />
        <van-grid-item icon="search" text="我的课表" url="/vant/mobile.html" />
        <van-grid-item icon="search" text="失物招领" url="/vant/mobile.html" />
        <van-grid-item icon="search" text="通知公告" url="/vant/mobile.html" />
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
      <van-cell title="单元格" icon="location-o" />
      <sc-news-list :newsList="newsList"></sc-news-list>
      <van-cell title="单元格" icon="location-o" />
      <!-- <div class="sc_forum">
        <div class="sc_forum_avatar">
          <img src="../../assets/image/avatar_boy4.png" alt="">
        </div>
        <div class="sc_forum_content">
          <div class="sc_forum_content_title">nickname</div>
          <div class="sc_forum_content_row">
            省根连化低低养周计又龙条先构口总作四统基图他党也此适常格命由约成据一海将系节,次活机看选百难术劳力社给满例会快进非活改团色力制民量几给体石说由型
          </div>
          <div class="sc_forum_content_img">
            <van-image fit="cover" width="80px" height="80px" src="../../assets/image/avatar_boy4.png"/>
          </div>
          <div class="sc_forum_content_footer">
            <div>2020.04.28 14:21:56</div>
            <div>66评论</div>
          </div>
        </div>
      </div> -->
      <sc-froum :froumList="froumList"></sc-froum>
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