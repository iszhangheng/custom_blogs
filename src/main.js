/*
 * @Author: iszhangheng
 * @Date: 2019-07-18 13:52:51
 * @LastEditors: iszhangheng
 * @LastEditTime: 2019-09-27 13:53:55
 * @Description: file content
 */
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: {
    App
  },
  template: '<App/>'
})
