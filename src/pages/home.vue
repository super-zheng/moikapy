<template>
  <div id='home'>
    <twitch />

  </div>
</template>

<script>
import $ from "jquery"
import twitch from '../components/twitch'
  export default {
    name: 'home',
    components:{twitch},
    data() {
      return {
        msg: 'Welcome to Your Vue.js App'
      }
    },
    created() { // adds CDN to the component
        let ckeditor = document.createElement('script');
        ckeditor.setAttribute('src', "https://embed.twitch.tv/embed/v1.js");
        document.head.appendChild(ckeditor);
    }
  }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
