<template>
  <div class="search" :style="{ background: bgColor }">
    <!-- <img class="search-icon" :src="icon" alt=""> -->
    <span class="search-hint" :style="{ color: hintColor }">商城系统</span>
  </div>
</template>

<script>
export default {
  props: {
    // icon: {
    //   default: require('@img/search.svg'),
    //   type: String
    // },
    hintColor: {
      type: String,
      default: "#999"
    },
    bgColor: {
      default: "#ffffff",
      type: String
    }
  }
}
</script>

<style lang="scss" scoped>
// @import '@css/style.scss';
.search {
  background-color: white;
  width: 100%;
  margin: 6px;
  border-radius: 22px;
  display: flex;
  align-items: center;

  &-icon {
    margin-left: 8px;
    width: 16px;
  }

  &-hint {
    margin-left: 8px;
    font-size: 14px;
    color: #999999;
  }
}
</style>