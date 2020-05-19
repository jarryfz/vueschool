<template>
  <div>
    <van-nav-bar
      title="宿舍小卖铺"
      left-arrow
      @click-left="onClickLeft"
    />
    
  </div>
</template>

<script>
import { NavBar, } from 'vant';
export default {
  name: "shop",
  components: {
    [NavBar.name]: NavBar,
  },
  data() {
    return {
      activeKey: 0,
    }
  },
  created() {
   
  },
  methods: {
    onClickLeft() {
      this.$router.push({path: "/"})
    },
    add() {
      this.$store.commit('add')
    },
    reduction() {
      this.$store.commit('reduction')
    },
    addFun() {
      this.$store.dispatch('addFun')
    },
    reductionFun() {
      this.$store.dispatch('reductionFun')
    }
  }
}
</script>

<style lang="scss" scoped>
  
</style>