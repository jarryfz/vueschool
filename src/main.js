import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store/index";
import Mock from './mock/index' // 刚刚手写的mock.js文件
// import axios from "axios"// axios http请求库
import "./style/icon.css";
import "./style/common.scss";
import "./directive/index.js";
import config from './config/index'
import api from './api/index'
import './permission.js'

import './vant/index.js'

import navbarBack from './mixins/navbar.js';
import * as filters from './filters/index'
Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key])
})
import './js/appback'
// axios.defaults.baseURL = "http://mockjs.com/api"; // 设置默认请求的url
Vue.prototype.$api = api;
Vue.prototype.$config = config;
Vue.config.productionTip = false;


Vue.mixin(navbarBack);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
