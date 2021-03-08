<template>
  <div class="j-home">
    <div class="j-home-header">
      <navigation-bar :isShowBack="false" :navBarStyle="navBarStyle">
        <template v-slot:nav-center>
          <van-search
            v-model="value"
            shape="round"
            show-action
            :background="searchBackground"
            placeholder="请输入搜索关键词"
          >
          <template #action>
            <div @click="onSearch">搜索</div>
          </template>
          </van-search>
        </template>
      </navigation-bar>
    </div>
    <van-swipe class="my-swipe" indicator-color="#39a9ed">
      <van-swipe-item v-for="(item,index) in images" :key="index">
        <van-image
          fit="cover"
          :src="item"
        />
      </van-swipe-item>
    </van-swipe>
    <van-grid>
      <van-grid-item
        v-for="(item,index) in gridItems"
        :key="index"
        :icon="item.icon" 
        :text="item.text"
        :to="item.path" 
      />
    </van-grid>
    <van-cell title="叽喳叽喳" icon="location-o" />
    <sc-froum :froumList="froumList"></sc-froum>
    <van-cell title="校内资讯" icon="location-o" />
    <sc-news-list :newsList="newsList"></sc-news-list>
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
import NavigationBar from '@/components/NavigationBar/index'
import scrollTop from "@/mixins/scrollTop.js";
import ScFroum from "@/components/ScFroum.vue";
export default {
  name: 'home',
  components: {
    ScNewsList,
    ScFroum,
    NavigationBar,
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
      style: {background: `rgba(26, 212, 115,1`},
      opacity: 0,
      offsetTop: 0,
      images: [
        require('../../assets/image/home1.jpg'),
        require('../../assets/image/home2.jpg'),
        require('../../assets/image/home5.jpg'),
        require('../../assets/image/home3.jpg')
      ],
      newsList: [],
      froumList: [],
      active: 0,
      scroll: '',
      naBarSlotStyle: {
        normal: {
          search: {
            bgColor: '#ffffff',
            hintColor: '#999999',
          },
        },
        highlight: {
            search: {
                bgColor: '#d7d7d7',
                hintColor: '#eee',
            },
        }
      },
      navBarCurrentSlotStyle: {},
      navBarStyle: {
          backgroundColor: '',
          position: 'fixed',
      },
      scrollTopValue: -1,
      ANCHOR_SCROLL_TOP: 160,
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
    this.navBarCurrentSlotStyle = this.naBarSlotStyle.normal
    window.addEventListener("scroll", this.onScrollChange);
  },
	beforeDestroy() {
			window.removeEventListener("scroll", this.onScrollChange)
	},
  methods: {
    onSearch() {
      console.log(this.value)
    },
		onScrollChange($event) {
      this.scrollTopValue = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
      let opacity = this.scrollTopValue / this.ANCHOR_SCROLL_TOP
      if (opacity >= 1) {
        this.navBarCurrentSlotStyle = this.naBarSlotStyle.highlight
      } else {
        this.navBarCurrentSlotStyle = this.naBarSlotStyle.normal
      }

      this.navBarStyle.backgroundColor = "rgba(255, 255, 255, " + opacity + ")"
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
.j-home {
  .j-home-header {
    height: 50px;
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 11;
  }
  & .van-search {
    width: 100%;
  }
  .my-swipe .van-swipe-item {
    color: #fff;
    font-size: 20px;
    height: 200px;
    text-align: center;
    background-color: #39a9ed;
    .van-image {
      width: 100%;
      height: 100%;
    }
  }
  .my-swipe:after {
    content: '';
    position: absolute;
    left: 0;
    right: 0;
    bottom: -11px;
    z-index: 1;
    height: 20px;
    width:100%; 
    border-radius:100%;
     background:#ffffff;
  }
}

</style>