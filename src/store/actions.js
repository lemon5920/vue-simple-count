// actions 供 components 使用，
// 用於 dispatching mutations 來改變 state。

// 引入需要的 mutation types
import * as types from './mutation-types'

export const increment = ({ commit }) => commit(types.INCREMENT)

export const decrement = ({ commit }) => commit(types.DECREMENT)

export const incrementIfOdd = ({ commit, state }) => {
  if ((state.count.countNum + 1) % 2 === 0) {
    commit(types.INCREMENT)
  }
}

export const incrementAsync = ({ commit }) => {
  setTimeout(() => {
    commit(types.INCREMENT)
  }, 1000)
}

export const incrementNum = ({ commit }, val) => {
  commit({
    type: types.INCREMENT_NUM,
    payload: parseInt(val)
  })
}
