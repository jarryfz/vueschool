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
        <div class="header-time">{{item.time | diffTime}}</div>
      </div>
      <div class="main">
        <div class="content" :class="isShowAll ? 'expansion' : item.content.length > 150 ? 'fold' : ''">{{item.content}}</div>
        <div class="expansion-text" v-if="item.content.length > 150" @click="changeText(item.content)">{{isShowAll ? '折叠' : '展开'}}</div>
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
          <van-col :span="8">
            <div class="footer-content">
              <van-icon name="ellipsis" @click="showSharebox"/>
            </div>
          </van-col>
          <van-col :span="8">
            <div class="footer-content">
              <van-icon name="good-job-o" />
              <span class="footer-text">2</span>
            </div>
          </van-col>
          <van-col :span="8">
            <div class="footer-content">
              <van-icon name="comment-o" @click="showCollapse(index)"/>
              <span class="footer-text">5</span>
            </div>
          </van-col>
        </van-row>
      </div>
      <collapse :active="currentIndex === index ? true : false">

      </collapse>
    </div>
    <van-share-sheet
      v-model="showShare"
      title="立即分享给好友"
      :options="options"
    />
  </div>
</template>

<script>
import { Image, Col, Row, Icon, ShareSheet } from 'vant';
import collapse from '@/components/Collapse/index'
export default {
  name: "ScFroum",
  components: {
    collapse,
    [Image.name]: Image,
    [Col.name]: Col,
    [Row.name]: Row,
    [Icon.name]: Icon,
    [ShareSheet.name]: ShareSheet
  },
  props: {
    froumList: {
      type: Array,
      default: () => {}
    }
  },
  data() {
    return {
      isShowAll: false,
      showShare: false,
      boxshow: false,
      currentIndex: null,
      options: [
        [
          { name: '微信', icon: 'wechat' },
          { name: '朋友圈', icon: 'wechat-moments' },
          { name: '微博', icon: 'weibo' },
          { name: 'QQ', icon: 'qq' },
        ],
        [
          { name: '复制链接', icon: 'link' },
          { name: '分享海报', icon: 'poster' },
          { name: '二维码', icon: 'qrcode' },
          { name: '小程序码', icon: 'weapp-qrcode' },
        ],
      ],
    }
  },
  methods: {
    showCollapse(index) {
      if (this.currentIndex == index) {
          this.currentIndex = null;
      } else {
          this.currentIndex = index;
      }
      // let _el = event.currentTarget
      // if (_el.getAttribute('class') === 'active') {
      //   _el.setAttribute('class', '')
      // } else {
      //   _el.setAttribute('class', 'active')
      // }
    },
    onScForm(id) {
      this.$emit('onScForm',id)
    },
    changeText(item) {
      this.isShowAll === true ? this.isShowAll = false : this.isShowAll = true
    },
    showSharebox() {
      this.showShare = true
    }
  }
}
</script>

<style lang="scss" scoped>
.box{
    height:200px;
    width: 100%;
    background-color:#ffffff;
    border-top: 1px solid #ebebeb;
}
.box::before {
  content: '';
  width:0;
  height:0;
  border-left:5px solid transparent;
  border-right:5px solid transparent;
  border-bottom:5px solid #ebebeb;
  position: relative;
  display: flex;
  left: 50%;
  top: -5px;
}
.draw-enter-active, .draw-leave-active {
    transition: all 1s ease;
}
.draw-enter, .draw-leave-to {
    height: 0;
}
.j-forum-body {
  .j-forum {
    margin: 10px 0px;
    padding: 15px 15px 0;
    background: #ffffff;
    border-radius: 2px;
    .header {
      display: flex;
      align-items: center;
      color: #ccc;
      font-size: 14px;
      img {
        width: 30px;
        height: 30px;
        border-radius: 50%;
      }
      span {
        padding: 0 10px;
        width: 210px;
        overflow: hidden;
        -webkit-box-orient: vertical;
        text-overflow: ellipsis;
      }
      .header-time {
        width: 85px;
        text-align: end;
      }
    }
    .main {
      padding: 8px 0;
      font-size: 14px;
      line-height: 24px;
      .content{
        &.fold {
          overflow: hidden;
          -webkit-line-clamp: 5;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-box-orient: vertical;
        }
        &.expansion {

        }
      }
      .expansion-text {
        color: #007fff;
        margin-top: 5px;
      }
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
        padding: 5px 0 0;
      }
    }
    .footer {
      .footer-content {
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 5px 0;
        .footer-text {
          font-size: 14px;
          margin-left: 5px;
        }
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