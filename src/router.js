import Vue from 'vue'
import Router from 'vue-router'

import helloPage from './components/hello'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'index',
      component: helloPage
    }
  ]
})
