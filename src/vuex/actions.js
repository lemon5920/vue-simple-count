// actions 供 components 使用，
// 用於 dispatching mutations 來改變 state。

// 引入需要的 mutation types
import { INCREMENT, DECREMENT } from './mutation-types'

export const increment = ({ dispatch }) => dispatch(INCREMENT)

export const decrement = ({ dispatch }) => dispatch(DECREMENT)

export const incrementIfOdd = ({ dispatch, state }) => {
  if ((state.countRoot.count + 1) % 2 === 0) {
    dispatch(INCREMENT)
  }
}

export const incrementAsync = ({ dispatch }) => {
  setTimeout(() => {
    dispatch(INCREMENT)
  }, 1000)
}
