<template>
  <component :is="layout"></component>
</template>

<script>
import LoginLayout from "./layouts/Login";
import PrincipalLayout from "./layouts/Principal";
import {mapState} from 'vuex'

export default {
  components: { LoginLayout, PrincipalLayout },
  computed: mapState(['layout'])
  
}
</script>

<style>
@font-face {
  font-family: "Gilroy";
  src: local("Gilroy"),
      url('./fonts/Gilroy-FREE/Gilroy-Light.otf');
  font-weight: normal;
  font-style: normal;
 
}

@font-face {
  font-family: "Gilroy";
  src: local("Gilroy"),
      url('./fonts/Gilroy-FREE/Gilroy-ExtraBold.otf');
  font-weight: bold;
  font-style: normal;
}

@font-face {
  font-family: "Rubik";
  src: local("Rubik"),
  url('./fonts/Rubik/Rubik-VariableFont_wght.ttf');
  font-weight: normal;
  font-style: normal;
}

body{
  font-family: "Gilroy";
}

</style>
