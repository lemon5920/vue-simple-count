import Vue from 'vue'
import Router from 'vue-router'

// 路由表
import routerMap from './router'

// root component
import App from './App'

// install Router & 使用路由表
Vue.use(Router)
const router = new Router()
routerMap(router)

router.start(App, '#root')
