<template>
  <div class="container-fluid">
     <nav aria-label="breadcrumb">
      <ol class="breadcrumb">
        <li class="breadcrumb-item">
          <router-link :to="{ name: 'Administradores'}" id="mini_title">
            Administradores</router-link
          >
        </li>
      </ol>
    </nav>

    <div class="container-fluid ml-0">
      <label class="parrafo font-weight-bold ml-0">Administradores CX</label>
      <!-- <router-link :to="{name:'EstadiosCrear'}" class="btn btn-crear pr-2"> Crear estadio </router-link> -->
      <button class="btn btn-crear pr-2" @click="crearAdministrador">
        Crear administrador
      </button>
      <button class="btn btn-crear pr-2" @click="verAdministrador">
        ver administrador
      </button>
    </div>
    <administradores></administradores>
  </div>
</template>
<script>
import Administradores from "./componentes/AdministradoresCom.vue";
export default {
  created() {
    this.$store.commit("SET_LAYOUT", "principal-layout");
  },
  components: {
    administradores: Administradores,
  },
  methods: {
    crearAdministrador() {
      this.$router.push({ name: "AdministradoresCrear" });
    },
    verAdministrador() {
      this.$router.push({ name: "AdministradorVer" });
    },
  },
};
</script>

<style scoped>


h1 {
  font-size: 35px;
  margin-top: 25px;
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
.parrafo {
  margin-top: 30px;
  text-align: left;
  margin-inline-end: 30px;
  font-weight: bold;
  font-size: 35px;
  color: #000000;
  margin-right: 792px;
}
.btn-crear {
  width: 180px;
  height: 40px;
  font-weight: normal;
  font-size: 16px;
  background: #7358fa linear-gradient(90deg, #7358fa 0%, #866ff7 100%) 0% 0%
    no-repeat padding-box;
  border-radius: 12px;
  color: #ffff;
  align-content: flex-end;
  align-items: flex-end;
}

.btn-crear:hover {
  box-shadow: 0 2px 8px 0 rgba(115, 88, 250, 0.4),
    0 10px 30px 0 rgba(134, 111, 247, 0.19);
  color: #fff;
  text-decoration-line: none;
}
</style>
