import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import { store } from "./store";

//import Estadios from "./components/HelloWorld.vue"

// Import Bootstrap an BootstrapVue CSS files (order is important)
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";


Vue.config.productionTip = false;

new Vue({
  el: "#app",
  router,
  store,
  components: { App },
  template: "<App></App>",
  render: (h) => h(App),
});
