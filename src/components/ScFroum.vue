<template >
  <div class="j-forum-body">
    <div class="j-forum"
      v-for="(item,index) in froumList"
      :key="index"
      @click="onScForm(item.id)"
    >
      <div class="header">
        <img :src="item.avatar" alt="">
        <span>{{item.name}}</span>
      </div>
      <div class="main">
        <div class="content">{{item.content}}</div>
        <div
          class="content-img-box"
          :class="{[item.img.length < 5 ? `col-${item.img.length}` : 'col-4']: true}"
        >
          <van-image
            :src="o"
            v-for="(o,i) in item.img"
            :key="i"
          />
        </div>
        <div class="tag">
          <van-tag plain round type="primary">{{item.tag}}</van-tag>
        </div>
      </div>
      <div class="footer">
        <van-row>
          <van-col :span="12">
            <div class="">
              <van-icon name="good-job-o" />
              <span>2</span>
            </div>
          </van-col>
          <van-col :span="12">
            <div>
              <van-icon name="comment-o" />
              <span>5</span>
            </div>
          </van-col>
        </van-row>
      </div>
    </div>
  </div>
</template>

<script>
import { Image, Col, Row, Icon } from 'vant';
export default {
  name: "ScFroum",
  components: {
    [Image.name]: Image,
    [Col.name]: Col,
    [Row.name]: Row,
    [Icon.name]: Icon
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
.j-forum-body {
  .j-forum {
    margin: 10px 0px;
    padding: 15px 15px 0;
    // height: 100px;
    background: #ffffff;
    border-radius: 2px;
    .header {
      display: flex;
      align-items: center;
      color: #ccc;
      img {
        width: 30px;
        height: 30px;
        border-radius: 50%;
      }
      span {
        padding-left: 10px;
        font-size: 14px;
      }
    }
    .main {
      padding: 8px 0;
      font-size: 14px;
      line-height: 24px;
      .content-img-box {
        display: flex;
        flex-wrap: wrap;
        max-width: 100%;
        &.col-1 {
          .van-image {
            width: calc(60% - 10px);
          }
        }
        &.col-2 {
          .van-image {
            width: calc(45% - 10px);
          }
        }
        &.col-3 {
          .van-image {
            width: calc(40% - 10px);
          }
        }
        &.col-4 {
          .van-image {
            width: calc(40% - 10px);
          }
        }
        .van-image {
          padding: 5px;
          img {
            flex: 0 1 auto;
            margin-top: 4px;
            max-width: 100%;
            min-width: 110px;
            cursor: zoom-in;
            min-height: 110px;
            max-height: 230px;
            -o-object-fit: cover;
            object-fit: cover;
            padding: 5px 2px;
          }
        }
      }
      .tag {
        padding: 5px 0;
      }
    }
  }
}

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