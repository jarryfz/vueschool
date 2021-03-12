import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import Mock from './mock/index' // 刚刚手写的mock.js文件
import axios from "axios"// axios http请求库
import "./style/icon.css";
import "./style/common.scss";
import "./directive/index.js";

import navbarBack from './mixins/navbar.js';
import * as filters from './filters/index'
Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key])
})
import './js/appback'
axios.defaults.baseURL = "http://mockjs.com/api"; // 设置默认请求的url
Vue.prototype.$http = axios;
Vue.config.productionTip = false;

import { 
  Lazyload,
  Toast,
  Image,
  NavBar,
  Tag,
  Empty,
  PullRefresh,
  List,
  Icon,
  Cell,
  GoodsAction,
  GoodsActionIcon,
  GoodsActionButton,
  DropdownMenu,
  DropdownItem,
  Grid,
  GridItem,
  Popup
} from "vant";

Vue.use(Lazyload, {
  preLoad: 1.3,
  attempt: 3
});
Vue.use(Image)
.use(Toast)
.use(NavBar)
.use(Tag)
.use(Empty)
.use(PullRefresh)
.use(List)
.use(Icon)
.use(Cell)
.use(GoodsAction)
.use(GoodsActionIcon)
.use(GoodsActionButton)
.use(DropdownMenu)
.use(DropdownItem)
.use(Grid)
.use(GridItem)
.use(Popup);

Vue.mixin(navbarBack);
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
