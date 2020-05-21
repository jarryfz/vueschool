<template >
  <div>
    <div class="sc_forum" v-for="(item,index) in froumList" :key="index" @click="onScForm(item.id)">
      <div class="sc_forum_avatar">
        <img :src="item.avatar" alt="">
      </div>
      <div class="sc_forum_content">
        <div class="sc_forum_content_title">{{ item.name }}</div>
        <div class="sc_forum_content_row">
          {{ item.content }}
        </div>
        <div class="sc_forum_content_img">
          <van-image fit="cover" v-for="(o,i) in item.img" :key="i" :src="o" />
        </div>
        <div class="sc_forum_content_footer">
          <div>{{ item.time }}</div>
          <div>{{ item.totalComment }}评论</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Image } from 'vant';
export default {
  name: "ScFroum",
    components: {
    [Image.name]: Image,
  },
  props: {
    froumList: {
      type: Array,
      default: () => {}
    }
  },
  methods: {
    onScForm(id) {
      this.$emit('onScForm',id)
    }
  }
}
</script>

<style lang="scss" scoped>
.sc_forum {
  display: flex;
  overflow: hidden;
  padding: 3px 16px;
  background: #fff;
  .sc_forum_avatar {
    width: 32px;
    height: 32px;
    margin-right: 16px;
    flex-shrink: 0;
    img {
      width: 100%;
      height: 100%;
      border-radius: 50%;
    }
  }
  .sc_forum_content {
    .sc_forum_content_title {
      width: 50%;
      font-size: 14px;
      margin: 5px 0;
    }
    .sc_forum_content_row {
      color: gray;
      font-size: 13px;
    }
    .sc_forum_content_img {
      display: flex;
      .van-image {
        padding: 5px 2px;
      }
      // .van-image__img {
      //   width: 30%;
      // }
    }
    .sc_forum_content_footer{
      font-size: 12px;
      color: gray;
      display: flex;
      margin: 5px 0;
      justify-content: space-between;
    }
  }
}
</style>