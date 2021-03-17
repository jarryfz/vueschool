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
    <van-grid :border="false" :icon-size="50">
      <van-grid-item
        v-for="(item,index) in gridItems"
        :key="index"
        :icon="item.icon"
        :text="item.text"
        :to="item.path" 
      />
    </van-grid>
    <van-cell title="通知公告" icon="location-o" />
    <van-cell-group>
      <van-cell title="福州大学作为合作单位申报2020年度福建省科学技术奖项目公示">
        <template v-slot:default>
          name
        </template>
      </van-cell>
      <van-cell title="电气工程与自动化学院2020年度研究生优秀新生奖学金申请汇总表" value="2021-2-18" />
      <van-cell title="电气工程与自动化学院2020年度研究生优秀新生奖学金申请汇总表" value="2021-2-18" />
      <van-cell title="电气工程与自动化学院2020年度研究生优秀新生奖学金申请汇总表" value="2021-2-18" />
      <van-cell title="电气工程与自动化学院2020年度研究生优秀新生奖学金申请汇总表" value="2021-2-18" />
      <van-cell title="电气工程与自动化学院2020年度研究生优秀新生奖学金申请汇总表" value="2021-2-18" />
    </van-cell-group>
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
import { Cell, CellGroup  } from 'vant';
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
    [VanImage.name]: VanImage,
    [CellGroup.name]: CellGroup
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
        { icon: require('../../assets/image/home/item1.svg'), text: '淘市场', path: 'market' },
        { icon: require('../../assets/image/home/item2.svg'), text: '小卖部', path: 'shop' },
        { icon: require('../../assets/image/home/item3.svg'), text: '叽喳校园', path: 'twitter-school' },
        { icon: require('../../assets/image/home/item4.svg'), text: '失物招领', path: 'vanTMobileHtml' },
        { icon: require('../../assets/image/home/item5.svg'), text: '社团活动', path: 'club-activite' },
        { icon: require('../../assets/image/home/item6.svg'), text: '通知公告', path: 'announcement' },
        { icon: require('../../assets/image/home/item7.svg'), text: '报修服务', path: 'repairService' },
        { icon: require('../../assets/image/home/item2.svg'), text: '校园风光', path: 'campusScenery' }
      ]
    }
  },
  mounted() {
    this.queryList();
    this.getFroumList()
    this.navBarCurrentSlotStyle = this.naBarSlotStyle.normal
    let ql = document.querySelector('.j-home')
    ql.addEventListener('scroll',this.onScrollChange)
    var shares=null;
    document.addEventListener('plusready', function() {
      var shares = null;
      plus.share.getServices(function(s){
        shares = s;
      }, function(e){
        alert("获取分享服务列表失败： "+JSON.stringify(e));
      });
    },false)
  },
	beforeDestroy() {
    let ql = document.querySelector('.j-home')
		ql.removeEventListener("scroll", this.onScrollChange)
	},
  methods: {
    onSearch() {
      console.log(this.value)
    },
		onScrollChange($event) {
      this.scrollTopValue = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || document.querySelector('.j-home').scrollTop;
      let opacity = this.scrollTopValue / this.ANCHOR_SCROLL_TOP
      if (opacity >= 1) {
        this.navBarCurrentSlotStyle = this.naBarSlotStyle.highlight
        this.searchBackground = '#ffffff'
      } else {
        this.searchBackground = 'transparent'
        this.navBarCurrentSlotStyle = this.naBarSlotStyle.normal
      }
      this.navBarStyle.backgroundColor = "rgba(255, 255, 255, " + opacity + ")"
    },
    async getFroumList() {
      const res = await this.$api.home.froumList({})
      if(res) {
        this.froumList = res.data;
      }
    },
    async queryList() {
      const res = await this.$api.home.newsList({})
      if(res) {
        this.newsList = res.data;
      }
    }
  },
};
</script>

<style lang="scss" scoped>
.j-home {
  height: 100%;
  overflow-y: auto;
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
.j-home ::v-deep .van-cell__title {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  width: 270px;
}
.j-home ::v-deep .van-cell__value {
  flex: inherit;
  width: 70px;
}
</style>