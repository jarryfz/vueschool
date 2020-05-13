<template>
  <div> 
    <div class="sc_news_list" v-for="(item, index) in newsList" :key="index">
      <div class="sc_news_left">
        <van-image fit="cover" :src="item.img" />
      </div>
      <div class="sc_news_right">
        <div class="sc_news_right_title">{{ item.title }}</div>
        <div class="sc_news_right_content">{{ item.content }}</div>
        <div class="sc_news_right_footer">
          <div>{{ item.author }}</div>
          <div>{{ item.time }}</div>
          <div>{{ item.totalComments }}评论</div>
        </div>
      </div>
    </div>
  </div>
  
</template>

<script>
import { Image } from 'vant';
export default {
  name: 'ScNewsList',
  components: {
    [Image.name]: Image
  },
  data () {
    return {}
  },
  props: {
    newsList: {
      type: Array,
      default: () => {},
    }
  },
  computed: {},
  methods: {}
}
</script>

<style lang="scss" scoped>
.sc_news_list {
  display: flex;
  align-items: center;
  justify-items: center;
  padding: 10px 15px;
  background: #fff;
  &::after {
    position: absolute;
    box-sizing: border-box;
    content: ' ';
    pointer-events: none;
    right: 0;
    bottom: 0;
    left: 16px;
    border-bottom: 1px solid #ebedf0;
    -webkit-transform: scaleY(.5);
    transform: scaleY(.5);
  }
  .sc_news_left {
    width: 100px;
    height: 100px;
    overflow: hidden;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .sc_news_right {
    padding-left: 10px;
    overflow: hidden;
    flex: 1;
    .sc_news_right_title {
      font-size: 16px;
      font-weight: 500;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
    .sc_news_right_content{
      margin-top: 5px;
      font-size: 14px;
      color: gray;
    }
  }
  .sc_news_right_footer {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    line-height: 12px;
    -webkit-box-pack: justify;
    -webkit-justify-content: space-between;
    -ms-flex-pack: justify;
    justify-content: space-between;
    color: gray;
    font-size: 12px;
    margin-top: 8px;
  }
}
</style>