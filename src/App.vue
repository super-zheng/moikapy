<template>
<div id="app">
  <navbar />
  <router-view />
</div>
</template>

<script>
import $ from "jquery"
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.js'

import navbar from './components/navbar'
export default {
  name: 'App',
  components: {
    navbar
  }
}
</script>

<style>
html,
body,
#app {
  height: 100%;
}

#app,
#body {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #eee;
  /* background-image: url('./assets/fox.jpg'); */
  background-color: #222;
  background-position: center;
  background-size: cover;
}
</style>
