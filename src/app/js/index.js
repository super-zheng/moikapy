import 'bootstrap/dist/css/bootstrap.min.css';
import VueMaterial from 'vue-material';
import 'vue-material/dist/vue-material.min.css';

import navbar from '@/components/navbar/navbar';
export default {
  name: 'App',
  components: {
    navbar
  },
  data: ()=> ({
    showNavigation:false,
    title: "Moikapy"
  })
}
