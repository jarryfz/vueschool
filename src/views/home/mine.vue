<template>
  <div class="">
    <div class="person_center">
      <div class="person_info">
        <img src="../../assets/image/avatar_boy.png" alt="">
      </div>
    </div>
    <div class="m-t-n40 sc_card">
      <div class="sc_card_cell">
        <span>西10-407</span>
      </div>
      <div class="sc_card_item">
        <div class="sc_card_item_content">电费</div>
        <div class="sc_card_item_content">饭卡</div>
      </div>
    </div>
    <div class="sc_card">
      <div class="sc_card_cell">
        <span>我的收藏</span>
      </div>
      <van-grid :border="false">
        <van-grid-item
          v-for="value in 4"
          :key="value"
          icon="photo-o"
          text="文字"
        />
      </van-grid>
    </div>
    <div class="sc_card">
      <div class="sc_card_cell">
        <span>我的发布</span>
      </div>
      <van-grid :border="false">
        <van-grid-item
          v-for="value in 4"
          :key="value"
          icon="photo-o"
          text="文字"
        />
      </van-grid>
    </div>
  </div>
</template>

<script>
import { Grid, GridItem, Icon } from "vant";
export default {
  name: "mine",
  components: {
    [Grid.name]: Grid,
    [GridItem.name]: GridItem,
    [Icon.name]: Icon
  },
  data() {
    return {}
  },
  created() {},
  methods: {}
};
</script>

<style lang="scss" scoped>
.person_center {
  height: 150px;
  background-image: url("../../assets/image/mine_bg.png");
  background-size: 100% 100%;
  color: #FFFFFF;
  padding: 0px 16px;
  display: flex;
  align-items: center;
  .person_info {
    flex: 1;
    padding: 0px 0 20px;
    display: flex;
    align-items: center;
    z-index: 40;
    img {
      width: 44px;
      height: 44px;
      border-radius: 50%;
    }
  }
}
.sc_card {
  margin: 15px 16px;
  z-index: 50;
  border: 1px solid #ebebeb;
  border-radius: 4px;
  box-sizing: border-box;
  box-shadow: 0 0 5px #CCCCCC;
  background: #FFFFFF;
  .sc_card_cell {
    line-height: 44px;
    height: 44px;
    margin: 0 16px;
    font-size: 16px;
    border-bottom: 1px solid #EEEEEE;
  }
  .sc_card_item {
    display: flex;
    align-items: center;
    .sc_card_item_content {
      margin: 10px 16px;
      flex: 1;
      border-right: 1px solid #ccc;
      &:last-child {
        border: none;
      }
    }
  }
}
</style>
