/*
 * @Author: jarryfz
 * @Date: 2021-03-12 14:31:45
 * @Last Modified by: mikey.zhaopeng
 * @Last Modified time: 2022-03-09 12:41:14
 */
<template>
  <div class="j-collapse">
    <transition :name="collapseName">
      <div
        class="j-collapse-box"
        :class="{ active: active }"
        :style="{ height: `${height}px` }"
      >
        <slot name="content"></slot>
      </div>
    </transition>
  </div>
</template>
<script>
export default {
  name: "Collapse",
  props: {
    height: {
      type: String | Number,
      default: "200"
    },
    active: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      collapseName: "collapse"
    };
  },
  created() {},
  methods: {}
}
</script>
<style lang="scss" scoped>
.j-collapse {
  width: 100%;
  .collapse-enter-active, .collapse-leave-active {
    transition: all 1s ease;
  }
  .collapse-enter, .collapse-leave-to {
    height: 0;
  }
  .j-collapse-box {
    width: 100%;
    background: #ccc;
    display: none;
    &.active {
      display: block;
    }
  }
}
</style>