<template>
  <div class="container-fluid vh-100" id="bg_login">
    <!-- As a heading -->
    <div class="container d-flex h-100 justify-content-center align-items-center">
      <router-view></router-view>
    </div>
  </div>
</template>

<script></script>

<style scoped>

#bg_login{
   background-image: url("/assets/1. Estadios/Background/gb-login.svg") !important;
  background-repeat: no-repeat;
  background-size: cover;
}
</style>
