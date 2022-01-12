<template>
  <component :is="layout"></component>
</template>

<script>



import LoginLayout from "./layouts/Login";
import PrincipalLayout from "./layouts/Principal";
import { mapState } from "vuex";

export default {
  components: { LoginLayout, PrincipalLayout },
  computed: mapState(["layout"]),
  updated(){
       $('[data-toggle="tooltip"]').tooltip() 
  },
  watch: {
    $route(){
      $('[data-toggle="tooltip"]').tooltip()
    }
  }
  /* methods: {
    ...mapActions([
      'fetchAccessToken'
    ]),
  },
  created() {
    this.fetchAccessToken();
  } */
};
</script>

<style>
body {
  height: 100%;
  font-family: "Gilroy";
  background-color: #f6f9fb !important;
}
body .tooltip-inner {
  background: #ffffff 0% 0% no-repeat padding-box;
  box-shadow: 0px 3px 6px #5d5d5d14;
  border: 1px solid #f5f5f5;
  border-radius: 16px;

  text-align: center;
  font: normal normal 300 12px/14px Rubik;
  letter-spacing: 0px;
  color: #707070;
}
body .tooltip .arrow::before {
  background: #ffffff 0% 0% no-repeat padding-box;
  box-shadow: 0px 3px 6px #5d5d5d14;
  border: 1px solid #f5f5f5;
  border-radius: 16px;
  text-align: center;
  font: normal normal 300 12px/14px Rubik;
  letter-spacing: 0px;
  color: #707070;
}
.breadcrumb {
  background-color: transparent !important;
  font-family: "Gilroy" !important;
}
.breadcrumb-item + .breadcrumb-item::before {
  float: left;
  padding-right: 0.5rem;
  color: #637381;
  content: ">" !important;
}
.estilo_page {
  font-family: "Gilroy";
  font-weight: normal;
  font-size: 20px;
  text-align: left;
  text-decoration: none;
  letter-spacing: 0px;
}
#app {
  background-color: transparent !important;
  font-family: "Gilroy";
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  color: #000000;
}

@font-face {
  font-family: "Gilroy";
  src: local("Gilroy"), url("./fonts/Gilroy-FREE/Gilroy-Light.otf");
  font-weight: normal;
  font-style: normal;
}

@font-face {
  font-family: "Gilroy";
  src: local("Gilroy"), url("./fonts/Gilroy-FREE/Gilroy-ExtraBold.otf");
  font-weight: bold;
  font-style: normal;
}

@font-face {
  font-family: "Rubik";
  src: local("Rubik"), url("./fonts/Rubik/Rubik-VariableFont_wght.ttf");
  font-weight: normal;
  font-style: normal;
}
</style>
