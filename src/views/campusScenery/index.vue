<template>
  <div>
    <van-nav-bar title="校园风光" left-arrow @click-left="onClickLeft" />
  </div>
</template>

<script>
export default {
  name: "campusScenery",
  components: {},
  data() {
    return {};
  },
  methods: {
    onClickLeft() {
      this.$router.push({ path: "/" });
    }
  }
}
</script>

<style lang="scss" scoped>
  
</style>