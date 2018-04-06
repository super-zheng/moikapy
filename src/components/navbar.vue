<template>
  <nav class="navbar navbar-expand-md fixed-top navbar-dark bg-222 d-flex">
    <!-- Navbar content -->
    <a class="navbar-brand" href="/"><span title="Home">MOIKApy</span></a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarText">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item">
          <a class="nav-link disabled" href="#/resume"><span title="Resume - Coming Soon">Resume</span></a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="https://www.twitch.tv/moikapy" target="_blank"><span title="Twitch - Moikapy">Twitch</span></a>
        </li>
      </ul>
    </div>
  </nav>
</template>
<script>
import $ from "jquery"
import 'vue-awesome/icons'
export default {
  name: 'navbar'
}
</script>
<style scoped>
  nav{
    z-index: 2;
  }
  .bg-222{
    background-color: #222;
    border-bottom: 1px solid #eee;
  }
  .nav-link{
    color: indigo;
  }
  .disabled{

  }
</style>
