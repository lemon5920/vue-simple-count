// 在 getters 中，
// 可以在把資料送回 component 前，
// 將 state 格式化完善後後，再送到 component。
export const recentHistory = state => {
  const end = state.count.history.length
  const begin = end - 5 < 0 ? 0 : end - 5
  return state.count.history
    .slice(begin, end)
    .toString()
    .replace(/,/g, ', ')
}

export const countStatus = state => {
  return state.count.countStatus
}

export const countNum = state => {
  return state.count.countNum
}
