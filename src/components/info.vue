<template>
  <h1>Info</h1>
  <h3>count:
    <span v-show="countStatus" transition="staggered">{{ count.count }}</span>
  </h3>
  <h3>History:</h3>
  <p>{{ recentHistory }}</p>
</template>

<script>
// 此 component 用來顯示 count 的結果

// 取得 state 需透過 getters
import { recentHistory } from '../vuex/getters'
export default {
  vuex: {
    getters: {
      recentHistory,
      // 名稱為 countRoot ，是因為在 store 中定義好的
      countStatus: state => state.countRoot.countStatus,
      count: state => state.countRoot
    }
  }
}
</script>

<style>
  /* 淡入淡出 */
  .staggered-transition {
    transition: all .2s ease;
  }
  .staggered-enter, .staggered-leave {
    opacity: 0;
  }
</style>
