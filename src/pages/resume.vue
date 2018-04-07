<template>
<div class="container">
  <div id="resume" class="row">
    <pdf class="pdf" ref="myPdfComponent"
      style="width:100%; border: 0 3px 3px #222222 solid;" src="../static/Resume.pdf"></pdf>
  </div>
</div>
</template>

<script>
import pdf from 'vue-pdf'

export default {
  name:'resume',
  components: {
    pdf
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  #resume {
    margin-top: 10vh;
    height: inherit;
    background-color: #222;
  }
</style>
