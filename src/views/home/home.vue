<template>
  <div class="j-home">
    <div class="j-home-header">
      <navigation-bar
        :isShowBack="false"
        :isNavRight="false"
        pageClassName="j-home"
      >
      </navigation-bar>
    </div>
    <van-swipe class="my-swipe" indicator-color="#673ab7">
      <van-swipe-item v-for="item in images" :key="item">
        <van-image fit="cover" :src="item" />
      </van-swipe-item>
    </van-swipe>
    <van-grid :border="false" :icon-size="50">
      <van-grid-item
        v-for="item in gridItems"
        :key="item.path"
        :icon="item.icon"
        :text="item.text"
        :to="item.path"
      />
    </van-grid>
    <van-cell title="通知公告" icon="location-o" />
    <van-cell-group>
      <van-cell
        title="福州大学作为合作单位申报2020年度福建省科学技术奖项目公示"
      >
        <template v-slot:default>
          name
        </template>
      </van-cell>
      <van-cell
        title="电气工程与自动化学院2020年度研究生优秀新生奖学金申请汇总表"
        value="2021-2-18"
      />
      <van-cell
        title="电气工程与自动化学院2020年度研究生优秀新生奖学金申请汇总表"
        value="2021-2-18"
      />
      <van-cell
        title="电气工程与自动化学院2020年度研究生优秀新生奖学金申请汇总表"
        value="2021-2-18"
      />
      <van-cell
        title="电气工程与自动化学院2020年度研究生优秀新生奖学金申请汇总表"
        value="2021-2-18"
      />
      <van-cell
        title="电气工程与自动化学院2020年度研究生优秀新生奖学金申请汇总表"
        value="2021-2-18"
      />
    </van-cell-group>
    <van-cell title="叽喳叽喳" icon="location-o" />
    <!-- <sc-froum :froumList="froumList"></sc-froum> -->
    <van-cell title="校内资讯" icon="location-o" />
    <!-- <sc-news-list :newsList="newsList"></sc-news-list> -->
  </div>
</template>

<script>
import ScNewsList from "@/components/ScNewsList.vue";
import NavigationBar from "@/components/NavigationBar/index";
import scrollTop from "@/mixins/scrollTop.js";
import ScFroum from "@/components/ScFroum.vue";
export default {
  name: "home",
  components: {
    ScNewsList,
    ScFroum,
    NavigationBar
  },
  mixins: [scrollTop],
  data() {
    return {
      count: 0,
      isLoading: false,
      value: "",
      style: { background: `rgba(26, 212, 115,1` },
      opacity: 0,
      offsetTop: 0,
      images: [
        require("../../assets/image/home2.jpg"),
        require("../../assets/image/home1.jpg"),
        require("../../assets/image/home5.jpg"),
        require("../../assets/image/home3.jpg")
      ],
      newsList: [],
      froumList: [],
      active: 0,
      scroll: "",
      gridItems: [
        {
          icon: require("../../assets/image/home/item1.svg"),
          text: "淘市场",
          path: "market"
        },
        {
          icon: require("../../assets/image/home/item2.svg"),
          text: "小卖部",
          path: "shop"
        },
        {
          icon: require("../../assets/image/home/item3.svg"),
          text: "叽喳校园",
          path: "twitter-school"
        },
        {
          icon: require("../../assets/image/home/item4.svg"),
          text: "失物招领",
          path: "lostAndFound"
        },
        {
          icon: require("../../assets/image/home/item5.svg"),
          text: "社团活动",
          path: "club-activite"
        },
        {
          icon: require("../../assets/image/home/item6.svg"),
          text: "通知公告",
          path: "announcement"
        },
        {
          icon: require("../../assets/image/home/item7.svg"),
          text: "报修服务",
          path: "repairService"
        },
        {
          icon: require("../../assets/image/home/item2.svg"),
          text: "校园风光",
          path: "campusScenery"
        }
      ]
    };
  },
  created() {},
  mounted() {
    setTimeout(() => {
      // this.queryList();
      // this.getFroumList()
    }, 0);
    // document.addEventListener('plusready', function() {
    //   var shares = null;
    // },false)
  },
  methods: {
    async getFroumList() {
      const res = await this.$api.home.froumList({});
      if (res) {
        this.froumList = res.data;
      }
    },
    async queryList() {
      const res = await this.$api.home.newsList({});
      if (res) {
        this.newsList = res.data;
      }
    }
  }
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
    content: "";
    position: absolute;
    left: 0;
    right: 0;
    bottom: -11px;
    z-index: 1;
    height: 20px;
    width: 100%;
    border-radius: 100%;
    background: #ffffff;
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