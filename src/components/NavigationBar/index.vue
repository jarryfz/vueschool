<template>
  <div
    class="nav-bar z-index-max"
    :class="{ 'bottom-line': pageName }"
    :style="isImmersion === true ? navBarStyle : {backgroundColor: '#673ab7',position: 'fixed',}"
  >
    <div class="left" v-show="isShowBack">
      <van-icon name="arrow-left" color="#ffffff" @click="back"/>
      <slot name="nav-left"></slot>
    </div>
    <div class="center">
      <span class="page-title" v-show="pageName">{{ pageName }}</span>
      <slot name="nav-center"></slot>
      <van-search
        v-model="searchValue"
        shape="round"
        :background="searchBackground"
        placeholder="请输入搜索关键词"
      >
        <!-- <div @click="onSearch" style="color:#ffffff">搜索</div> -->
      </van-search>
    </div>
    <div class="right" v-show="isNavRight">
      <slot name="nav-right"></slot>
    </div>
  </div>
</template>

<script>
import { Search, Icon } from "vant";

export default {
  components: {
    [Search.name]: Search,
    [Icon.name]: Icon
  },
  props: {
    isImmersion: {
      type: Boolean,
      default: true
    },
    pageName: {
      type: String,
      default: "",
    },
    isShowBack: {
      type: Boolean,
      default: false,
    },
    isNavRight: {
      type: Boolean,
      default: false
    },
    pageClassName: {
      tye: String,
      default: ''
    }
  },
  data() {
    return {
      searchValue: "",
      searchBackground: "transparent",
      scrollTopValue: -1,
      opacity: '',
      ANCHOR_SCROLL_TOP: 160,
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
        backgroundColor: "transparent",
        position: "fixed",
      },
    };
  },
  mounted() {
    // if(window.plus) {
    //   // plusReady();
    // } else {
    //   if(!this.isImmersion) {
    //     document.addEventListener('plusready',function(s) {
    //       plus.navigator.setStatusBarBackground("rgba(103, 58, 183, 1)")
    //     })
    //   }else {
    //     document.addEventListener("plusready", this.onScrollChange(), false);
    //   }
    // } 
    //监听页面滚动
    document.querySelector(`.${this.pageClassName}`).addEventListener('scroll',this.onScrollChange)
  },
  beforeDestroy() {
    document.querySelector(`.${this.pageClassName}`).removeEventListener("scroll", this.onScrollChange)
	},
  methods: {
    onSearch() {},
    onScrollChange($event) {
      this.scrollTopValue = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || document.querySelector(`.${this.pageClassName}`).scrollTop;
      let opacity = this.scrollTopValue / this.ANCHOR_SCROLL_TOP
      opacity >= 1 ? this.searchBackground = '#673ab7' : this.searchBackground = 'transparent'
      this.navBarStyle.backgroundColor = "rgba(103, 58, 183, " + opacity + ")"
      // if(this.isImmersion){
      //   opacity >= 1 ? plus.navigator.setStatusBarBackground("rgba(103, 58, 183, 1)") : opacity == 0 ? plus.navigator.setStatusBarBackground("transparent") : plus.navigator.setStatusBarBackground("rgba(103, 58, 183, " + opacity + ")")
      // }else {
      //   plus.navigator.setStatusBarBackground("rgba(103, 58, 183, 1)")
      // }
    },
    back() {
      this.$router.go(-1)
    }
  },
};
</script>

<style lang="scss" scoped>
.nav-bar {
  width: 100%;
  height: 44px;
  line-height: 44px;
  display: flex;
  justify-content: space-between;

  .left,
  .right {
    display: flex;
    height: 100%;
    width: 26px;
    padding: 0 8px;
    justify-content: center;
    align-items: center;
  }

  .center {
    display: flex;
    height: 100%;
    flex-grow: 1;
    .van-search {
      width: 100%;
    }
    .page-title {
      font-size: 14px;
      align-self: center;
    }
  }
}

.bottom-line {
  border-bottom: 1px solid #f5f5f5;
}
</style>