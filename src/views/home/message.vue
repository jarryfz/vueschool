<template>
  <div class="j-home">
    <div class="j-header">
      <Navigation-bar :isShowBack="false" :navBarStyle="navBarStyle">
        <template v-slot:nav-left>
          <!-- <img :src="navBarCurrentSlotStyle.leftIcon" alt=""> -->
        </template>
        <template v-slot:nav-center>
          <search-1
            :bgColor="navBarCurrentSlotStyle.search.bgColor"
            :hintColor="navBarCurrentSlotStyle.search.hintColor"
          ></search-1>
        </template>
        <template v-slot:nav-right>
          <!-- <img :src="navBarCurrentSlotStyle.rightIcon" alt=""> -->
        </template>
      </Navigation-bar>
    </div>
    <div style="height: 1080px"></div>
  </div>
</template>

<script>
import NavigationBar from '@/components/NavigationBar/index'
import search1 from '@/components/search1';
import Search1 from '../../components/search1.vue';
export default {
  name: 'message',
  components: {
    NavigationBar,
    search1,
  },
  data() {
    return {
      value: '',
      searchBackground: '',
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
      ANCHOR_SCROLL_TOP: 160
    }
  },
  created() {
    this.navBarCurrentSlotStyle = this.naBarSlotStyle.normal
  },
  mounted() {
    this.navBarCurrentSlotStyle = this.naBarSlotStyle.normal
    window.addEventListener("scroll", this.onScrollChange);
  },
  beforeDestroy() {
		window.removeEventListener("scroll", this.onScrollChange);
	},
  methods: {
    onScrollChange($event) {
      this.scrollTopValue = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
      let opacity = this.scrollTopValue / this.ANCHOR_SCROLL_TOP
      if (opacity >= 1) {
        this.navBarCurrentSlotStyle = this.naBarSlotStyle.highlight
      } else {
        this.navBarCurrentSlotStyle = this.naBarSlotStyle.normal
      }

      this.navBarStyle.backgroundColor = "rgba(255, 255, 255, " + opacity + ")"
    }
  }
}
</script>

<style lang="scss" scoped>
.j-home{
  height: 100%;
  .j-header {
    height: 150px;
    background: #f5222d;
  }
}
</style>