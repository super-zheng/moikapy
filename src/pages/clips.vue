<template>
<div class="container">
  <div id="clip" class="row">
      <clips />
  </div>
</div>
</template>

<script>
import $ from "jquery"
import 'vue-awesome/icons'
import clips from '../components/clips'
export default {
  name: 'clips',

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#clip {
  margin: 7% auto 4%;
  padding: 1%;
  width: 50%;
  height: 100%;
  background-color: indigo;
}

</style>
