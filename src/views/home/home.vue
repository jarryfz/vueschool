<template>
  <div class="">
    <div id="search-box">
      <van-search
        v-model="value"
        shape="round"
        :background="searchBackground"
        placeholder="请输入搜索关键词"
      ></van-search>
    </div>
    <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
      <van-notice-bar color="#1989fa" background="#ecf9ff" left-icon="volume-o">
        通知内容
      </van-notice-bar>
      <van-grid clickable :column-num="4" :border="false">
        <van-grid-item
          v-for="item in gridItems"
          :key="item.text"
          :icon="item.icon"
          :text="item.text"
          :to="item.path"
        >
        </van-grid-item>
      </van-grid>
      <van-swipe :autoplay="5000" class="my-swipe" indicator-color="#39a9ed">
        <van-swipe-item v-for="(item,index) in images" :key="index">
          <van-image
            fit="cover"
            :src="item"
          />
        </van-swipe-item>
      </van-swipe>
      <van-cell title="叽喳叽喳" icon="location-o" />
      <sc-froum :froumList="froumList"></sc-froum>
      <van-cell title="校内资讯" icon="location-o" />
      <sc-news-list :newsList="newsList"></sc-news-list>
    </van-pull-refresh>
  </div>
</template>

<script>
import { Icon,Image as VanImage } from 'vant';
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
    [Tabs.name]: Tabs,
    [Image.name]: Image,
    [VanImage.name]: VanImage
  },
  mixins: [scrollTop],
  data() {
    return {
      searchBackground: 'transparent',
      count: 0,
      isLoading: false,
      value: '',
      images: [
        require('../../assets/image/home4.jpg'),
        require('../../assets/image/home1.jpg'),
        require('../../assets/image/home2.jpg'),
        require('../../assets/image/home3.jpg')
      ],
      newsList: [],
      froumList: [],
      active: 0,
      scroll: '',
      gridItems: [
        { icon: 'icon iconfont icon-ershou', text: '淘市场', path: 'market' },
        { icon: 'icon iconfont icon-ershoushichang', text: '小卖部', path: 'shop' },
        { icon: 'icon iconfont icon-fengjing', text: '叽喳校园', path: 'twitter-school' },
        { icon: 'icon iconfont icon-dibudaohanglan-', text: '失物招领', path: 'vanTMobileHtml' },
        { icon: 'icon iconfont icon-kebiao', text: '社团活动', path: 'club-activite' },
        { icon: 'icon iconfont icon-gonggao', text: '通知公告', path: 'announcement' },
        { icon: 'icon iconfont icon-baoxiu', text: '报修服务', path: 'repairService' },
        { icon: 'icon iconfont icon-iconcard', text: '新闻中心', path: '' }
      ]
    }
  },
  mounted() {
    this.queryList();
		window.addEventListener("scroll", this.handleScroll);
  },
	beforeDestroy() {
		window.removeEventListener("scroll", this.handleScroll);
	},
  methods: {
		handleScroll() {
			let scrollTop =
				window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
			let offsetTop = document.querySelector("#search-box").offsetTop;
			//设置背景颜色的透明读
			if (offsetTop && scrollTop) {
				this.searchBackground = `rgba(255, 255, 255,${scrollTop / (scrollTop + 40)})`;
			} else if (scrollTop == 0) {
				this.searchBackground = "transparent";
			}
		},
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
  height: 200px;
  text-align: center;
  background-color: #39a9ed;
}

</style>