export default {
  data() {
    return {
      count: 1,
    }
  },
  computed: {},
  watch: {},
  created() {},
  methods: {},
  beforeRouteEnter(to, from, next) {
    next(vm => {
      // 记录滚动高度
      document.documentElement.scrollTop = vm.scroll;
    });
  },
  beforeRouteLeave(to, from, next) {
    this.scroll = document.documentElement.scrollTop; //data中记得定义变量scroll
    next();
  }
};
