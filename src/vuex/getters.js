// 在 getters 中，
// 可以在把資料送回 component 前，
// 將 state 格式化完善後後，再送到 component。
export function recentHistory (state) {
  const end = state.countRoot.history.length
  const begin = end - 5 < 0 ? 0 : end - 5
  return state.countRoot.history
    .slice(begin, end)
    .toString()
    .replace(/,/g, ', ')
}
