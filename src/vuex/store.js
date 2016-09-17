// store 的根，所有 state、mutation 都會匯集到這裡

import Vue from 'vue'
import Vuex from 'vuex'
import countRoot from './modules/count'

// 使用 Vuex
Vue.use(Vuex)
Vue.config.debug = true

// 模組化 state、mutations。
// 每個 module 中含有 state、mutations，
// module export 回來，由 store 管理
export default new Vuex.Store({
  modules: {
    countRoot
    // ...其他 module
  }
})
