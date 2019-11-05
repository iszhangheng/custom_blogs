/*
 * @Author: iszhangheng
 * @Date: 2019-07-18 13:52:51
 * @LastEditors: iszhangheng
 * @LastEditTime: 2019-09-27 15:23:05
 * @Description: file content
 */
import Vue from 'vue'
import Router from 'vue-router'
import HelloMarkdown from '@/views/HelloMarkdown'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    name: 'TinyMce',
    component: HelloMarkdown
  }]
})
