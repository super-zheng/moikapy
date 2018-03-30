<template>
  <nav class="navbar navbar-expand-md navbar-dark bg-222 d-flex">
    <!-- Navbar content -->
    <a class="navbar-brand" href="/">MOIKApy</a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarText">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item active">
          <a class="nav-link" href="/">Home <span class="sr-only">(current)</span></a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/#/contact">Contacts</a>
        </li>
      </ul>
    </div>
  </nav>
</template>
<script>
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
</style>
