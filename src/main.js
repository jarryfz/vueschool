import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import Mock from './mock/index' // 刚刚手写的mock.js文件
import axios from "axios"// axios http请求库
import "./style/icon.css";
import "./style/common.scss";
import "./directive/index.js";

axios.defaults.baseURL = "http://mockjs.com/api"; // 设置默认请求的url
Vue.prototype.$http = axios;
Vue.config.productionTip = false;

import { 
  Lazyload,
  Image,
  NavBar,
  Empty,
  PullRefresh,
  List,
  Icon,
  GoodsAction,
  GoodsActionIcon,
  GoodsActionButton
} from "vant";

Vue.use(Lazyload, {
  preLoad: 1.3,
  attempt: 3
});
Vue.use(Image)
.use(NavBar)
.use(Empty)
.use(PullRefresh)
.use(List)
.use(Icon)
.use(GoodsAction)
.use(GoodsActionIcon)
.use(GoodsActionButton);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");