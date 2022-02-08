<template>
  <div class="container-fluid cont-principal">
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb">
        <li class="breadcrumb-item">
          <router-link :to="{ name: 'Estadios' }" id="mini_title">
            Estadios</router-link
          >
        </li>
        <li class="breadcrumb-item active estilo_page" aria-current="page">
          {{ nombre_estadio }}
        </li>
      </ol>
    </nav>

    <verEstadio v-on:resultado="resultados"></verEstadio>
    <tribunas></tribunas>
    <calendarioInactividad></calendarioInactividad>
  </div>
</template>

<script>
import VerEstadio from "./componentes/EstadioVerCom.vue";
import TribunasEstadio from "./componentes/EstadioTribunas.vue";
import InactividadEstadio from "./componentes/EstadioCalendar.vue";
export default {
  created() {
    this.$store.commit("SET_LAYOUT", "principal-layout");
  },
  data: () => ({
    nombre_estadio: "",
    success: false,
  }),
  components: {
    verEstadio: VerEstadio,
    tribunas: TribunasEstadio,
    calendarioInactividad: InactividadEstadio,
  },
  methods: {
    async resultados(datos) {
      if (datos.nombre_estadio != "") {
        this.nombre_estadio = datos.nombre_estadio;
      }
      if (datos.success == false) {
        console.log(datos.success);        
        this.$router.push({ name: "Estadios" });
      }
    },
  },
};
</script>

<style scoped>
.cont-principal {
  margin-top: 90px;
}

#mini_title {
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
</style>
