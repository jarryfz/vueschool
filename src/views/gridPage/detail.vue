<template>
  <div>
    <van-nav-bar title="detail" left-arrow fixed @click-left="onClickLeft" />
    <div class="main-content">
      <div class="mk_detail">
        <div class="flex mk_detail_top">
          <img src="../../assets/image/avatar_boy.png" alt="">
          <div class="m-l-8">
            <div class="mk_detail_top_name">天涯海角</div>
            <div class="mk_detail_top_time">1小时前来过</div>
          </div>
          <div class="mk_detail_top_price">￥212</div>
        </div>
        <div class="mk_detail_info">
          的健身房跨境电商精神抖擞接口返回绝对是反光衣开始的付款时间的数据库返回空
          收到货覅UI胡椒粉和会计师就开始挂号费会计师可怜见覅及
        </div>
        <div class="mk_detail_imgs">
          <img src="../../../static/img1.png" alt="">
          <img src="../../../static/img2.png" alt="">
        </div>
      </div>
      <div class="mk_leaveAMessage">
        <div>留言</div>
        <van-empty
          :image="emptyImg"
          description="还未有人来留言，还不快来抢沙发"
        />
      </div>

      <van-divider>猜你喜欢</van-divider>
      <div class="list">
        <!-- <goods :goodsList="[]"></goods> -->
      </div>
    </div>
    <van-goods-action>
      <van-goods-action-icon icon="chat-o" text="留言" />
      <van-goods-action-icon icon="star" text="收藏" />
      <van-goods-action-button color="#7232dd" type="danger" text="我想要" />
    </van-goods-action>
  </div>
</template>

<script>
import goods from "@/components/goods.vue";
export default {
  name: "detail",
  components: {
    goods
  },
  data() {
    return {
      emptyImg: require("../../assets/image/yu.png")
    }
  },
  created() {
    let f = () => {
      console.log(arguments);
    };
    f(23);
  },
  methods: {
    onClickLeft() {
      this.$router.go(-1);
    },
  }
}
</script>

<style lang="scss" scoped>
.flex {
  flex-flow: row wrap;
  align-items: center;
}
.main-content {
  &::after {
    content: "";
    height: 44px;
    display: block;
  }
}
.mk_detail {
  padding: 8px 16px;
  background: #fff;
  .mk_detail_top {
    img {
      width: 50px;
      height: 50px;
      border-radius: 50%;
    }
    .mk_detail_top_price {
      flex: 1;
      text-align: end;
      color: crimson;
    }
    &:nth-child(1) {
      .mk_detail_top_name {
        font-size: 18px;
      }
      .mk_detail_top_time {
        font-size: 12px;
        color: #777;
      }
    }
  }
  .mk_detail_info {
    padding: 10px 0;
    font-size: 16px;
    line-height: 20px;
    font-weight: 500;
  }
  .mk_detail_imgs {
    // padding-bottom: 40px;
    img {
      width: 100%;
    }
  }
}
.mk_leaveAMessage {
  padding: 0px 16px;
  background: #fff;
  margin-top: 10px;
  margin-bottom: 10px;
}
</style>