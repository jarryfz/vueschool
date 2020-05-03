<template>
  <div>
    <van-nav-bar
      title="失物招领"
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