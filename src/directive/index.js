import Vue from "vue";
Vue.directive('bgColor', {
  // 当被绑定的元素插入到 DOM 中时……
  inserted: function (el) {
    el.style.backgroundColor = "#e66000"
  },
})
/** 
 * 钩子函数
 * bind 只调用一次，指令第一次绑定到元素时调用。在这里可以进行一次性的初始化设置。
 * inserted 被绑定元素插入父节点时调用（仅保证父节点存在，但不一定已被插入文档中）
    update 所在组件VNode更新时调用，但是可能发生在其子VNode更新之前。
    componentUpdated 指令所在组件的VNode及其子VNode全部更新后调用。
    unbind 只调用一次，指令与元素解绑时调用。
*/
