// 中大型 App 會需要透過 module 分離 state、mutations，
// state 僅能透過 dispatching mutation 來做修改，勿透過其他方式更改，
// mutations 由 actions 觸發。

// 引入需要的 mutation types
import * as types from '../mutation-types'

const state = {
  countNum: 0,
  history: [],
  countStatus: true
}

// mutaions type 名稱以全大寫命名為原則，
// 來與 actions 作區別
const mutations = {
  [types.INCREMENT] (state) {
    state.countStatus = false
    setTimeout(function () {
      state.countNum++
      state.history.push('increment')
    }, 200)
    setTimeout(function () {
      state.countStatus = true
    }, 400)
  },
  [types.DECREMENT] (state) {
    state.countStatus = false
    setTimeout(function () {
      state.countNum--
      state.history.push('decrement')
    }, 200)
    setTimeout(function () {
      state.countStatus = true
    }, 400)
  },
  [types.INCREMENT_NUM] (state, mutation) {
    state.countStatus = false
    setTimeout(function () {
      state.countNum += mutation.payload
      state.history.push('increment')
    }, 200)
    setTimeout(function () {
      state.countStatus = true
    }, 400)
  }
}

// 將 module 中的 state、mutations 傳回 store
export default {
  state,
  mutations
}
