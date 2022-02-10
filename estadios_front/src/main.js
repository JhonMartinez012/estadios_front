import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import { store } from "./store";
import api from "./api";


import "./slim/slim/slim/slim.css";
import slimCropper from "./slim/slim/slim/slim.vue";
Vue.component("slimCropper", slimCropper);


import  cropper  from 'vue-advanced-cropper'
import 'vue-advanced-cropper/dist/style.css';
Vue.component("cropper",cropper)


//import Estadios from "./components/HelloWorld.vue"

// Import Bootstrap an BootstrapVue CSS files (order is important)
import "bootstrap/dist/js/bootstrap.js";
import "bootstrap/dist/css/bootstrap.css";

Vue.config.productionTip = false;


new Vue({
  el: "#app",
  router,
  store,
  api,
  components: { App },
  template: "<App></App>",
  render: (h) => h(App),
});
