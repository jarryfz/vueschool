<template>
  <div>
    <van-nav-bar title="失物招领" left-arrow fixed @click-left="onClickLeft" />
    <div class="main-content">
      <div class="user_info_wrap">
        <div class="user_info_avatar">
          <img src="../../../assets/image/avatar_girl.png" alt="">
        </div>
        <div class="user_info_name">
          xinxi
        </div>
      </div>
      <div class="content">
        说的话付款记录和合适的付款计划就会看到是关于饿哦五日考虑u与防护和可交互的费用很高i到丽江了是个很开朗的时间
        山东化工覅多少积分离开教室广佛iu江苏高考临近的考虑iu工业文化如果看见
      </div>
      <div class="imgs">
        <img src="../../../assets/image/home.jpg" alt="">
        <img src="../../../assets/image/home1.jpg" alt="">
        <img src="../../../assets/image/home2.jpg" alt="">
        <img src="../../../assets/image/home3.jpg" alt="">
      </div>
      <div class="mk_leaveAMessage">
        <div>留言</div>
        <van-empty
          :image="emptyImg"
          description="还未有人来留言，还不快来抢沙发"
        />
      </div>
    </div>
    <van-goods-action>
      <van-goods-action-icon icon="chat-o" text="留言" />
      <van-goods-action-button type="warning" text="联系他(她)" />
    </van-goods-action>
  </div>
</template>

<script>
import navbar from "@/mixins/navbar.js";
export default {
  name: "vanTMobileHtmlDetail",
  mixins: [navbar],
  data() {
    return {};
  }
}
</script>

<style lang="scss" scoped>
.main-content {
  &::after {
    content: '';
    height: 50px;
    display: block;
  }
}
.user_info_wrap {
  padding: 0 16px;
  background: #fff;
  display: -webkit-flex;
  display: flex;
  align-items: center;
  .user_info_avatar {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .user_info_name {
    font-size: 16px;
    font-weight: 500;
    flex: 1;
  }
}
.content {
  background: #fff;
  padding: 8px 16px;

}
.imgs {
  width: 100%;
  background: #fff;
  overflow: hidden;
  display: -webkit-flex;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  img {
    width: calc(100% - 32px);
    padding-bottom: 8px;
  }
}
.mk_leaveAMessage {
  padding: 0px 16px;
  background: #fff;
  margin-top: 10px;
  margin-bottom: 10px;
}
</style>