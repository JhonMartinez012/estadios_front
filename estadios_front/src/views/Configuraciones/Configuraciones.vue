<template>
  <div class="container-fluid">
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb">
        <li class="breadcrumb-item">
          <router-link :to="{ name: 'Configuraciones' }" id="mini_title">
            Configuraciones</router-link
          >
        </li>
      </ol>
    </nav>

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

  <router-view/>
      
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
