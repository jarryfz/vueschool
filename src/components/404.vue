<template>
  <div>
    <van-nav-bar title="404" left-arrow @click-left="onClickLeft" />
    <van-empty class="custom-image" :image="img" description="404 Not found">
    </van-empty>
  </div>
</template>

<script>
export default {
  name: "404",
  components: {},
  data() {
    return {
      img: require("@/assets/image/404.png")
    };
  },
  methods: {
    onClickLeft() {
      this.$router.go(-1);
    }
  }
};
</script>
