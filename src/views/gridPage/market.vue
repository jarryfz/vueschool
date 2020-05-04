<template>
  <div>
    <van-nav-bar
      title="淘市场"
      left-arrow
      @click-left="onClickLeft"
    />
    <tab-refresh-list>
      <van-grid clickable :column-num="4">
        <van-grid-item icon="icon iconfont icon-ershou" text="淘市场" to="market" />
        <van-grid-item icon="icon iconfont icon-ershoushichang" text="小卖部" to="shop" />
        <van-grid-item icon="icon iconfont icon-baoxiu" text="报修服务" to="repairService" />
        <van-grid-item icon="icon iconfont icon-fengjing" text="校园风光" to="campusScenery" />
        <van-grid-item icon="icon iconfont icon-iconcard" text="缴费中心" to="paymentCenter" />
        <van-grid-item icon="icon iconfont icon-kebiao" text="我的课表" to="myClassSchedule" />
        <van-grid-item icon="icon iconfont icon-dibudaohanglan-" text="失物招领" to="vanTMobileHtml" />
        <van-grid-item icon="icon iconfont icon-gonggao" text="通知公告" to="announcement" />
      </van-grid>
    </tab-refresh-list>
  </div>
</template>

<script>
import { NavBar, Grid, GridItem } from 'vant';
import TabRefreshList from "@/components/TabRefreshList.vue";
export default {
  name: "market",
  components: {
    TabRefreshList,
    [NavBar.name]: NavBar,
    [Grid.name]: Grid,
    [GridItem.name]: GridItem,
  },
  data() {
    return {
      value1: 0,
      value2: 'a',
      option1: [
        { text: '全部商品', value: 0 },
        { text: '新款商品', value: 1 },
        { text: '活动商品', value: 2 },
      ],
      option2: [
        { text: '默认排序', value: 'a' },
        { text: '好评排序', value: 'b' },
        { text: '销量排序', value: 'c' },
      ],
    }
  },
  created() {
    let arr1 = [12,34,65,345,4];
    let arr2 = [...arr1];
    arr1.push(99);
    console.log('arr1',arr1,'arr2',arr2)//arr1 (6) [12, 34, 65, 345, 4, 99] arr2 (5) [12, 34, 65, 345, 4];

    /** 
     * 函数
    */
    function f(x=10,y=20) {
      console.log(x,y)
    }
    f(100);
    /** 
     * 递归
    */
    function getsum(n) {
      if(n === 1) {
        return 1
      } else {
        return getsum(n - 1) + n;
      }
    }
    console.log(getsum(5))
    const hs = (n) => {
      if(n == 1) {
        return 1
      }else {
        return hs(n - 1) + n
      }
    }
    console.log(hs(6))
  },
  methods: {
    onClickLeft() {
      this.$router.push({path: "/"})
    }
  }
}
</script>

<style lang="scss" scoped>
  
</style>