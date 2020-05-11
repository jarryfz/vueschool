<template>
  <div>
     <div class="goods_list" v-if="goodsList.length>0">
      <div class="goods_card" v-for="item in goodsList" @click="btnEvent(item.id)" :key="item.price">
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
    <van-empty v-else description=""></van-empty>
  </div>
</template>

<script>
import { Empty } from 'vant';
export default {
  name: 'goods',
  components: {
    [Empty.name]: Empty
  },
  data() {
    return {}
  },
  props: {
    goodsList: {
      type: Array,
      default: () => {}
    }
  },
  methods: {
    btnEvent(id) {
      this.$emit('goodsDetailBtn',id)
    }
  }
}
</script>

<style lang="scss" scoped>
.goods_list {
  display: flex;
  display: -webkit-flex;
  flex-wrap: wrap;
  -moz-box-pack: justify;
  justify-content: space-between;
  padding: 6px;
}
.goods_card {
  display: flex;
  position: relative;
  flex-direction: column;
  align-content: flex-start;
  flex-shrink: 0;
  box-sizing: border-box;
  box-shadow: 0 0 3px #ccc;
  border-radius: 5px;
  width: 171.5px;
  overflow: hidden;
  background: #ffffff;
  margin-left: 5px;
  margin-right: 5px;
  margin-top: 8px;
  flex-direction: column;
  align-content: flex-start;
  // &:nth-of-type(odd) {
  //   margin: 6px 5px 0 0px;
  // }
  // &:nth-of-type(even) {
  //   margin: 6px 0 0 5px;
  // }
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