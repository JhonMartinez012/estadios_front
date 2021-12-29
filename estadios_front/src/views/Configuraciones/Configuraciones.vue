<template>
  <div class="container-fluid">
    <p>
      <router-link :to="{ name: 'Configuraciones' }" id="mini_title">
        Configuraciones
      </router-link>
      >
    </p>

    <div class="container ml-0">
      <ul class="nav nav-tabs">
        <li class="nav-item">
          <router-link class="nav-link active" :to="{name:'ConfiguracionTerrenos'}"
            >Tipos de terrenos</router-link
          >
        </li>
        <li class="nav-item">
          <router-link class="nav-link" :to="{name:'ConfiguracionInactividad'}"
            >Motivos de inactividad</router-link
          >
        </li>
      </ul>
    </div>

  <router-view></router-view>
      
  </div>
</template>

<script scoped>
export default {
  created() {
    this.$store.commit("SET_LAYOUT", "principal-layout");
  },
  
};
</script>

<style>

#mini_title {
  top: 140px;
  left: 109px;
  width: 80px;
  height: 30px;

  font-weight: normal;
  font-size: 20px;
  text-align: left;
  text-decoration: none;
  letter-spacing: 0px;
  color: #7358fa;
}
.nav-tabs .nav-link.active,
.nav-tabs .nav-item.show .nav-link {
  color: #7358fa;
  background-color: #fff0;
  border-color: #1c72c900 #1f6fbf00 #7358fa;
  font-family: "Gilroy";
  font-size: 17px;
  border-radius: 4px 4px 0px 0px;
}


</style>
