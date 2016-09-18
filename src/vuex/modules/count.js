// 中大型 App 會需要透過 module 分離 state、mutations，
// state 僅能透過 dispatching mutation 來做修改，勿透過其他方式更改，
// mutations 由 actions 觸發。

// 引入需要的 mutation types
import {
  INCREMENT,
  DECREMENT,
  INCREMENT_NUM
} from '../mutation-types'

const state = {
  count: 0,
  history: []
}

// mutaions type 名稱以全大寫命名為原則，
// 來與 actions 作區別
const mutations = {
  [INCREMENT] (state) {
    state.count++
    state.history.push('increment')
  },
  [DECREMENT] (state) {
    state.count--
    state.history.push('decrement')
  },
  [INCREMENT_NUM] (state, mutation) {
    state.count += mutation.payload
  }
}

// 將 module 中的 state、mutations 傳回 store
export default {
  state,
  mutations
}
