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
       $('[data-toggle="tooltip"]').tooltip({
         trigger:'hover'
       }) 

  },
  watch: {
    $route(){
      $('[data-toggle="tooltip"]').tooltip({
         trigger:'hover'
       }) 
    },
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
  font-family: "GilroyB";
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
.cont-caracteres{ /* Estilo para mostrar el contador de caracteres de los input */
  font-family: "Gilroy";
  font-size: 11px;
  color: #6b6b72;
  padding: 0px 0px 0px 10px;
}
.msg_error { /*  Estilo para mostrar los mensajes de error tanto del front como del back */
  color: #ff0000;
  font-size: 12px;
  text-align: left;
  margin-left: 20px;
  font-family: "Rubik";
  width: 100%;
  margin-bottom: 0;
  margin-top: 8px;
}

/* Estilos para el calendario */
/* .calendario {
  text-align: center;
  width: 100%;
}
.control {
  color: white;
  font-weight: bold;
  background-color: transparent;
  border: none;
  cursor: pointer;
  padding: 0 5px;
}
.meses {
  background: #7358fa;
  padding: auto;
  width: 100%;
  color: white;
  display: flex;
  justify-content: space-between;
  text-transform: uppercase;
}

.mes-nombre {
  font-family: Arial;
  font-size: 27px;
  margin: 0em;
  color: #ebebeb;
}
.grid__header,
.grid__body {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  width: 100%;
  height: 50px;

  justify-content: center;
  align-items: center;
  font-family: Arial;

  font-size: 18px;
}
.grid__header {
  background: #ebebeb;
  font-weight: bold;
}

.grid__cell,
.grid__cell--disabled {
  width: 100%;
  height: 50px;
  background: #f2f2f2;
  font-family: Arial;
  font-weight: bold;
  font-size: 18px;
}

.grid__cell {
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}
.grid__cell--disabled {
  color: #aaaaaa;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: not-allowed;
}
.grid__cell--selected {
    color: white;
    background-color: #7358fa;
    border-radius: 50%;
    border: 2px solid #7358fa;
    box-shadow: 0 0 0 2px var(--color-bg-calendar) inset;
} */
</style>
