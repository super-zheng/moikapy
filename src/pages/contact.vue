<template>
<div class="container">
  <div id="about" class=" row float-left">
    <h4>
    <img alt="about me picture" src='http://via.placeholder.com/186x250'/>
    About</h4>
    <h4>Warren Gates</h4>
    <div class="info">
      <p>
        Hello, I'm a Front-End Developer, Gamer, and Streamer from Louisville, Ky. I mainly code using HTML, CSS, Python, and JS(MEVN Stack, Jquery).
        When gaming, I can normally be found on Rust, Black Desert Online, Sea of Thieves, or Fortnite.
       </p>
      <!-- <ul>
        <li>Twitter<i class="fa fa-twitter" aria-hidden="true"></i></li>
        <li>Twitch</li>
        <li>Github</li>
      </ul> -->
    </div>
  </div>

  <div id="contact" class="row float-right d-flex justify-content-around">
    <div class="justify-content-center">
      <form name="contact" method="POST" data-netlify="true" netlify>
        <div class="form-group row">

          <div>
            <label for="inputEmail3">
            <input type="email" placeholder="YourEmail@email.com" name='email'></label>
          </div>
        </div>
        <div class="form-group row">
          <label><input type="text" name="name" placeholder="Your Name"></label>
        </div>
        <div class="form-group row">
          <label><textarea placeholder="Message" name="message"></textarea></label>
        </div>

        <div class="form-group row">
          <div>
            <button type="submit" class="btn btn-primary">Submit</button>
          </div>
        </div>
      </form>

    </div>


  </div>


  <!-- <h1>{{ msg }}</h1>
 -->
</div>
</template>

<script>
import 'vue-awesome/icons'
export default {
  name: 'contact',
  data() {
    return {
      msg: 'Contact Us'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#about {
  margin: 7% auto 4%;
  padding: 1%;
  width: 50%;
  height: 100%;
  background-color: indigo;
}

.info {
  padding: 1.5%;
  margin-top: 2%;
  height: 150px;
  width:100%;
  overflow-y: scroll;
  border: 3px solid #000;
}
.info p {
  font-size: small;
}
#contact{
  margin: 8% auto 5%;
  width:40%;
  height: 100%;
}
#contact form{
  padding: 10% 15% 8%;
  background-color: indigo;
}
#contact input{
  width: 200px;

}
#contact textarea {
  resize: none;
  width: 200px;
  height: 200px;
}

@media screen and (max-width: 767.98px) {

 }
/* Screen Sizes 960 and below */
@media screen and (max-width: 960.98px) {
  #about{
    margin: 3% auto;
  }
  #contact{
    margin: 5% auto;
  }
 }
</style>
