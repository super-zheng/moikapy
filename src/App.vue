<template>
  <div id="app">
    <md-app>
    <md-app-toolbar class="md-primary">
      <md-button class="md-icon-button" @click="menuVisible = !menuVisible">
        <md-icon>menu</md-icon>
      </md-button>
      <span class="md-title">{{ title }}</span>
    </md-app-toolbar>

    <md-app-drawer :md-active.sync="menuVisible">
      <md-toolbar class="md-transparent" md-elevation="0">Navigation</md-toolbar>

      <md-list>
        <md-list-item>
          <md-icon>move_to_inbox</md-icon>
          <span class="md-list-item-text">Inbox</span>
        </md-list-item>

        <md-list-item>
          <md-icon>send</md-icon>
          <span class="md-list-item-text">Sent Mail</span>
        </md-list-item>

        <md-list-item>
          <md-icon>delete</md-icon>
          <span class="md-list-item-text">Trash</span>
        </md-list-item>

        <md-list-item>
          <md-icon>error</md-icon>
          <span class="md-list-item-text">Spam</span>
        </md-list-item>
      </md-list>
    </md-app-drawer>


    <md-app-content>
      <router-view />
    </md-app-content>
    </md-app>
  </div>
</template>

<script>
import $ from "jquery"
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.js'

import navbar from './components/navbar/navbar'
export default {
  name: 'App',
  components: {
    navbar
  },
  data() {
    menuVisible: false;
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
  background-position: center;
  background-size: cover;
}

#home {
  /* background-image: url('../static/homecover.png'); */
}
</style>
