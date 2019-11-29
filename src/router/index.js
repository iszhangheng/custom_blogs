import Vue from 'vue'
import Router from 'vue-router'
import layout from '@/views/layout'
import markdownEditor from '@/views/markdownEditor';

Vue.use(Router)

export default new Router({
  routes: [{
      path: '',
      name: 'index',
      component: layout,
      redirect: 'blogList',
      children: [{
        path: 'blogList',
        name: 'blogList',
        component: () => import('@/views/blogList/index')
      }]
    },
    {
      path: '/editor',
      name: 'TinyMce',
      component: layout,
      redirect: 'editor',
      children: [{
        path: 'editor',
        name: 'editor',
        component: () => import('@/views/markdownEditor/index')
      }]
    }
  ]
})
