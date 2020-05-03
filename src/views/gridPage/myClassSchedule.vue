<template>
  <div>
    <van-nav-bar
      title="我的课表"
      left-arrow
      @click-left="onClickLeft"
    />
  </div>
</template>

<script>
import { NavBar } from 'vant';
export default {
  // name: "market",
  components: {
    [NavBar.name]: NavBar
  },
  data() {
    return {}
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