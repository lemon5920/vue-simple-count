<template>
  <div>
    <h1>buton</h1>
    <button @click="increment">+</button>
    <button @click="decrement">-</button>
    <button @click="incrementIfOdd">Increment if odd</button>
    <button @click="incrementAsync">Increment async</button>
    <br>
    <input type="text" v-model="val">
    <button @click="incrementNum(val)">Increment Number</button>
  </div>
</template>

<script>
// 此 component 用於更改 count

// 在 component 中，透過 actions 來 dispatching mutations 來更改 state
import { mapActions } from 'vuex'
export default {
  methods: {
    ...mapActions([
      'increment',
      'decrement',
      'incrementIfOdd',
      'incrementAsync',
      'incrementNum'
    ])
  },
  data () {
    return {
      val: 0
    }
  }
}
</script>
