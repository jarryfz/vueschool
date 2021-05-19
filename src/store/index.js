import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    direction: 'slide-right'
  },
  getters:{
    // 参数列表state指的是state数据
    getTransionFn(state){
        return state.direction;
    }
},
  mutations: {
    setTransion(state, name){
      state.direction = name;
    }
  },
  actions: {
    setTransionName({commit,state}, name){
      // 跟后台打交道
      // 调用mutaions里面的方法
      commit("setTransion", name);
    }
  },
  modules: {}
});
