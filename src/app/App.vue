<template>
  <div id="app">
    <md-app md-waterfall md-mode="fixed">
      <md-app-toolbar class="md-dense">
        <md-button class="md-icon-button" @click="showNavigation = true">
          <md-icon>menu</md-icon>
        </md-button>
        <span class="md-title">{{ title }}</span>
      </md-app-toolbar>

      <md-app-drawer :md-active.sync="showNavigation">
        <md-toolbar class="md-dense" >
          <md-button class="md-icon-button" @click="showNavigation = false">
            <md-icon>menu</md-icon>
          </md-button>
          <span>Navigation</span>
        </md-toolbar>

        <md-list>
          <md-list-item to="/" title="Home">
            <md-icon>home</md-icon>
            <span class="md-list-item-text" >Home</span>
          </md-list-item>

          <md-list-item to="/resume" title="Resume">
            <md-icon>find_in_page</md-icon>
            <span class="md-list-item-text">Resume</span>
          </md-list-item>

          <md-list-item href="https://www.twitch.tv/moikapy" target="_blank"  title="Twitch - Moikapy">
            <md-icon>videogame_asset</md-icon>
            <span class="md-list-item-text">Twitch</span>
          </md-list-item>

          <md-list-item href="https://www.github.com/moikapy" target="_blank"  title="GitHub - Moikapy">
            <md-icon>code</md-icon>
            <span class="md-list-item-text">GitHub</span>
          </md-list-item>
        </md-list>
      </md-app-drawer>
      <!-- Main Content -->
      <md-app-content>
        <!-- Where Content is Rendered -->
        <router-view />
      </md-app-content>
    </md-app>
  </div>
</template>

<script src="./js/index.js"></script>

<style src="./css/style.css"></style>
