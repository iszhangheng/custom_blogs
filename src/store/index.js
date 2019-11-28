import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

// 创建一个小仓库存这些数据及方法
const store = new Vuex.Store({
  modules: {},
  getters
});
// 暴露仓库
export default store;
