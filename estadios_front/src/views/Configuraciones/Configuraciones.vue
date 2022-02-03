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

    <div class="container ml-0 d-flex">
      <router-link
        class="nav-link active"
        v-for="(tab, index) in tabs"
        :key="tab.id"
        v-bind:class="tab.marka ? 'activar-menu' : 'menu-config'"
        :to="{ name: tab.ruta }"
      >
        <label
          class="h-100 w-100 centrar"
          v-on:click="markMenuConfig($event, index)"
          >{{ tab.label }}</label
        ></router-link
      >

      <!-- <ul class="nav nav-tabs">
        <li class="nav-item">
          <router-link class="nav-link active" :to="{name:'ConfiguracionTerrenos'}"
            >Tipos de terrenos</router-link
          >
        </li> -->

      <!-- <li class="nav-item">
          <router-link class="nav-link" :to="{name:'ConfiguracionInactividad'}"
            >Motivos de inactividad</router-link
          >
        </li> -->
      <!-- </ul> -->
    </div>

    <router-view :key="$route.name" />
  </div>
</template>

<script scoped>
export default {
  created() {
    this.$store.commit("SET_LAYOUT", "principal-layout");
  },
  data() {
    return {
      tabs: [
        {
          id: 1,
          ruta:"ConfiguracionTerrenos",
          label: "Tipos de terrenos",
          marka: true,
        },
        {
          id: 2,
          ruta:"ConfiguracionInactividad",
          label: "Motivos de inactividad",
          marka: false,
        },
      ],
    };
  },
  methods: {
    markMenuConfig($event, index) {
      this.tabs.forEach((tab) => (tab.marka = false));
      this.tabs[index].marka = !this.tabs[index].marka;
    },
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

.menu-config {
  color: #637381;
  border: none;
  font-family: "Gilroy";
  font-size: 20px;
}
.cont-menu-cat {
  height: 45px;
  width: 130px;
}
.activar-menu {
  border-bottom: #7358fa solid 5px;
  color: #7358fa;
  font-family: "Gilroy";
  font-size: 20px;
}
</style>
