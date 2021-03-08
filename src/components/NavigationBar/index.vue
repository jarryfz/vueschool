<template>
  <div
    class="nav-bar z-index-max"
    :class="{'bottom-line': pageName}"
    :style="navBarStyle"
  >
    <!-- <div class="left">
      <img v-if="isShowBack" src="" alt="">
      <slot name="nav-left"></slot>
    </div> -->
    <div class="center">
      <span class="page-title" v-if="pageName">{{pageName}}</span>
      <slot name="nav-center"></slot>
    </div>
    <!-- <div class="right">
      <slot name="nav-right"></slot>
    </div> -->
  </div>
</template>

<script>
export default {
  props: {
    pageName: {
      type: String,
      default: ''
    },
    isShowBack: {
      type: Boolean,
      default: true
    },
    navBarStyle: {
      type: Object,
      default: function () {
        return {
          background: '#ffffff'
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.nav-bar {
  width: 100%;
  height: 44px;
  line-height: 44px;
  display: flex;
  justify-content: space-between;

  .left, .right {
    display: flex;
    height: 100%;
    width: 26px;
    padding: 0 8px;

    img {
      width: 100%;
      align-self: center;
    }
  }

  .center {
    display: flex;
    height: 100%;
    flex-grow: 1;

    .page-title {
      font-size: 14px;
      align-self: center;
    }
  }
}

.bottom-line {
  border-bottom: 1px solid #f5f5f5;
}
</style>