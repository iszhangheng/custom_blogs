import Vue from 'vue'
import Router from 'vue-router'
import layout from '@/views/layout'
import markdownEditor from '@/views/markdownEditor';

Vue.use(Router)

export default new Router({
  routes: [{
      path: '/',
      name: 'TinyMce',
      component: layout,
      children: [{
        path: 'editor',
        name: 'editor',
        component: () => import('@/views/markdownEditor/index')
      }]
    },
    {
      path: '/editor',
      name: 'TinyMce',
      component: markdownEditor
    }
  ]
})
