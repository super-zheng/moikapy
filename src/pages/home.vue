<template>
  <div id='home'>
    <div class="d-flex title justify-content-center row">
      <div class="title">
        <div class="bg-color">
          <img class="profilePicture" src="../assets/profilePicture.jpg" alt="profile picture"/>
          <h5 class="display-4">@_Moikapy</h5>
          <div>
            <p class="lead">Warren Gates</p>
          </div>
        </div>

      </div>

    </div>
  </div>
</template>
<script>
export default {
  name: 'Home'
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  #home{
    overflow:hidden;
    height: inherit;
    /* background-image: url('../../static/homecover.png'); */
    background-position: center;
    background-size: cover;
  }
  .title{

    padding-top: 10vh;
  }
  .bg-color{
    padding: 10% 10% 5%;
    background-color: indigo;
  }
  .profilePicture{
    height: 25vh;
  }
  p{
    padding-bottom: 0;
  }
</style>
