<template>
  <div id='home'>
    <twitch />
  </div>
</template>

<script>
import twitch from '../components/twitch'
  export default {
    name: 'home',
    components:{twitch},
    data() {
      return {
        msg: 'Welcome to Your Vue.js App'
      }
    }
  }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
