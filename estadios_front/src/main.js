import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import { store } from "./store";

import './slim/slim/slim/slim.css';
import slimCropper from './slim/slim/slim/slim.vue';
Vue.component('slimCropper', slimCropper);

//import Estadios from "./components/HelloWorld.vue"

// Import Bootstrap an BootstrapVue CSS files (order is important)
import "bootstrap/dist/css/bootstrap.css";



Vue.config.productionTip = false;

new Vue({
  el: "#app",
  router,
  store,
  components: { App },
  template: "<App></App>",
  render: (h) => h(App),
});
