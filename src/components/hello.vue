<template>
  <p>Hello world!</p>
  <hr>
  <info></info>
  <hr>
  <buttons></buttons>
</template>

<script>
  import info from './info'
  import buttons from './buttons'
  import store from '../vuex/store'

  export default {
    store,
    components: {
      info,
      buttons
    }
  }
</script>
