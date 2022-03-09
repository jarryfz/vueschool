<template>
  <div class="">
    <div class="person_center">
      <div class="person_info">
        <img src="../../assets/image/avatar_boy.png">
        <div>
          风一样的鸭子
        </div>
      </div>
    </div>
    <div class="m-t-n40 sc_card">
      <div class="sc_card_cell">
        <span>西10-407</span>
      </div>
      <div class="sc_card_item">
        <div class="sc_card_item_content item_bg">电费</div>
        <div class="sc_card_item_content item_bg1">饭卡</div>
      </div>
    </div>
    <div class="sc_card" v-for="item in mineCenterCard" :key="item">
      <div class="sc_card_cell">
        <span>{{ item.title }}</span>
      </div>
      <van-grid :border="false">
        <van-grid-item
          v-for="o in item.gridItems"
          :key="o.text"
          :icon="o.icon"
          :text="o.text"
          :to="o.path"
        ></van-grid-item>
      </van-grid>
    </div>
  </div>
</template>

<script>
export default {
  name: "mine",
  components: {},
  data() {
    return {
      mineCenterCard: [
        {
          title: "应用中心",
          gridItems: [
            { icon: "photo-o", text: "缴费中心", path: "" },
            { icon: "photo-o", text: "我的课表", path: "" },
            { icon: "photo-o", text: "我的社团", path: "" },
            { icon: "photo-o", text: "购物车", path: "" }
          ]
        },
        {
          title: "收藏中心",
          gridItems: [
            { icon: "photo-o", text: "叽喳校园", path: "" },
            { icon: "photo-o", text: "淘市场", path: "" },
            { icon: "photo-o", text: "小卖铺", path: "" },
            { icon: "photo-o", text: "资讯", path: "" }
          ]
        },
        {
          title: "发布中心",
          gridItems: [
            { icon: "photo-o", text: "叽喳校园", path: "" },
            { icon: "photo-o", text: "淘市场", path: "" },
            { icon: "photo-o", text: "小卖铺", path: "" },
            { icon: "photo-o", text: "失物招领", path: "" }
          ]
        }
      ],
    }
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
.item_bg {
  background-image: url("../../assets/image/item_bg.png");
  background-size: 100% 100%;
}
.item_bg1 {
  background-image: url("../../assets/image/item_bg1.png");
  background-size: 100% 100%;
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
    margin: 10px 11px;
    .sc_card_item_content {
      margin: 0px 5px;
      padding: 10px 0;
      flex: 1;
      color: #fff;
      border-right: 1px solid #ccc;
      &:last-child {
        border: none;
      }
    }
  }
}
</style>
