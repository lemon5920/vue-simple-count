<template>
  <div>
    <p>Hello world!</p>
    <hr>
    <info></info>
    <hr>
    <buttons></buttons>
  </div>
</template>

<script>
  import info from './info'
  import buttons from './buttons'

  export default {
    components: {
      info,
      buttons
    }
  }
</script>
