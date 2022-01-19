<template>
  <div class="container-fluid">
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb">
        <li class="breadcrumb-item">
          <router-link :to="{ name: 'Administradores' }" id="mini_title">
            Administradores</router-link
          >
        </li>
      </ol>
    </nav>

    <div class="container-fluid ml-0 mb-4">
      <div class="row align-items-center">
        <div class="col-md-6">
          <label class="parrafo font-weight-bold ml-0"
            >Administradores CX</label
          >
          <!-- <router-link :to="{name:'EstadiosCrear'}" class="btn btn-crear pr-2"> Crear estadio </router-link> -->
        </div>
        <div class="col-md-6">
          <svg
            class="icon-input"
            xmlns="http://www.w3.org/2000/svg"
            width="18.26"
            height="18.4"
            viewBox="0 0 18.26 18.4"
          >
            <g
              id="Icon_buscar"
              data-name="Icon / buscar"
              transform="translate(0.75 0.75)"
              fill="#DFE4E8"
            >
              <path
                id="Elipse_12"
                data-name="Elipse 12"
                d="M7-.75A7.75,7.75,0,1,1-.75,7,7.759,7.759,0,0,1,7-.75Zm0,14A6.25,6.25,0,1,0,.75,7,6.257,6.257,0,0,0,7,13.25Z"
                transform="translate(0 0)"
              />
              <path
                id="Línea_50"
                data-name="Línea 50"
                d="M4.88,5.63a.748.748,0,0,1-.53-.22L-.53.53A.75.75,0,0,1-.53-.53.75.75,0,0,1,.53-.53L5.41,4.35a.75.75,0,0,1-.53,1.28Z"
                transform="translate(11.88 12.02)"
              />
            </g>
          </svg>

          <input
            type="text"
            class="buscador"
            
            placeholder="Buscar"
          />

          <button class="btn btn-crear pr-2" @click="crearAdministrador">
            Crear administrador
          </button>
        </div>
      </div>
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
  updated() {
    $('[data-toggle="tooltip"]').tooltip({
      trigger: "hover",
    });
  },
  components: {
    administradores: Administradores,
  },
  methods: {
    crearAdministrador() {
      this.$router.push({ name: "AdministradoresCrear" });
    },
  },
};
</script>

<style scoped>
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
.icon-input {
  position: relative;
  left: 28px;
}
.buscador {
  width: 18em;
  height: 2em;
  background-image: "/assets/1. Estadios/Iconos/Icon - buscar.svg";
  background: #ffffff 0% 0% no-repeat padding-box;
  border: 1px solid #dfe4e8;
  border-radius: 20px;
  padding: 15px 15px 15px 35px;
  color: #777a7c;
}
.buscador::placeholder {
  color: #dfe4e8;
  text-align: left;
}

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
  
  text-align: left;
  margin-inline-end: 30px;
  font-weight: bold;
  font-size: 35px;
  color: #000000;
  
}
.btn-crear {
  width: 180px;
  height: 40px;
  margin-left: 20px;
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
