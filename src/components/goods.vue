<template>
  <div>
    <div class="goods_card" v-for="item in goodsList" :key="item.id">
      <div class="goods_img">
        <img :src="item.goodsImg" alt="">
      </div>
      <div class="goods_card_title">{{item.title}}</div>
      <div class="flex goods_msg">
        <div class="flex1">￥{{item.price}}</div>
        <div>{{item.total}}</div>
      </div>
      <div class="flex goods_footer">
        <img :src="item.avatar" alt="">
        <div class="flex1 p-l-8 text-over-nowrap goods_footer_name">{{item.name}}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'goods',
  data() {
    return {}
  },
  props: {
    goodsList: {
      type: Array,
      default: () => {}
    }
  }
}
</script>

<style lang="scss" scoped>
.goods_card {
  display: inline-block;
  // border: 1px solid #ffffff;
  box-shadow: 0 0 3px #ccc;
  border-radius: 5px;
  width: calc(50% - 7px);
  overflow: hidden;
  background: #ffffff;
  &:nth-of-type(odd) {
    margin: 6px 5px 0 2px;
  }
  &:nth-of-type(even) {
    margin: 6px 0 0 5px;
  }
  .goods_img {
    img {
      width: 100%;
      height: 150px;
    }
  }
  .goods_msg {
    align-items: center;
    line-height: 20px;
    padding: 0 10px;
    font-size: 16px;
  }
  .goods_card_title {
    font-size: 12px;
    margin: 5px 10px;
    font-weight: 600;
    overflow: hidden;
    text-overflow: ellipsis;
    display:-webkit-box; //作为弹性伸缩盒子模型显示。
    -webkit-box-orient:vertical; //设置伸缩盒子的子元素排列方式--从上到下垂直排列
    -webkit-line-clamp:2; //显示的行
  }
  .goods_footer {
    padding: 5px 10px;
    align-items: center;
    .goods_footer_name {
      font-size: 12px;
    }
    img {
      width: 20px;
      height: 20px;
      border-radius: 50%;
    }
  }
}
</style>