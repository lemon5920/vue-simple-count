<template>
  <div>
    <h1>Info</h1>
    <h3>count:
      <transition name="staggered">
        <span v-show="countStatus">{{ countNum }}</span>
      </transition>
    </h3>
    <h3>History:</h3>
    <p>{{ recentHistory }}</p>
  </div>
</template>

<script>
// 此 component 用來顯示 count 的結果

// 取得 state 需透過 getters
import { mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters([
      'recentHistory',
      'countStatus',
      'countNum'
    ])
  }
}
</script>

<style>
  /* 淡入淡出 */
  .staggered-enter-active, .staggered-leave-active {
    transition: all .2s ease;
  }
  .staggered-enter, .staggered-leave-active {
    opacity: 0;
  }
</style>
