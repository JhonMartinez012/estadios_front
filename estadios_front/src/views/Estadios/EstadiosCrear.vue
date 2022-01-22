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
          Crear Estadio
        </li>
      </ol>
    </nav>

    <div class="container-fluid ml-0">
      <label class="parrafo font-weight-bold ml-0">Crear Estadio </label>
      <button
        type="button"
        class="btn btn-crear-estadio pr-2"
        @click="crearEstadio"
      >
        Guardar
      </button>
    </div>

    <div class="container-fluid mt-4 ml-0">
      <div class="row">
        <div class="col-7 inner">
          <label class="titulo">Informacion general</label>
          <div class="form-row mt-2 contenido">
            <div class="form-group col-md-6 col-sm-12 inner">
              <p for="inputEmail4" class="p-titulo">Nombre del estadio</p>
              <input
                type="text"
                v-model="nombre_estadio"
                class="form-control texto-nombre"
                id=""
                placeholder="Nombre"
              />
              <p for="inputEmail4" class="p-titulo">Acerca del estadio</p>
              <textarea
                v-model="acerca_estadio"
                cols="30"
                rows="10"
                placeholder="Acerca"
                class="acercaEstadio"
              ></textarea>
            </div>
            <div class="form-group col-md-6 inner">
              <p for="inputPassword4" class="p-titulo">pais</p>
              <select
                v-model="pais"
                @change="listarCiudades()"
                class="texto-select"
              >
                <option value="0">seleccione pais</option>
                <option v-for="data in paises" :key="data.id" :value="data.id">
                  {{ data.nombre }}
                </option>
              </select>
              <p for="" class="p-titulo">ciudad</p>
              <select class="texto-select" v-model="ciudad">
                <option value="0">seleccione ciudad</option>
                <option
                  v-for="data in ciudades"
                  :key="data.id"
                  :value="data.id"
                >
                  {{ data.nombre }}
                </option>
              </select>
              <p for="" class="p-titulo">Tipo de terreno</p>
              <select v-model="terreno_id" class="texto-select">
                <option value="0">seleccionar</option>
                <option
                  v-for="terreno in terrenos"
                  :key="terreno.id"
                  :value="terreno.id"
                >
                  {{ terreno.nombre_terreno }}
                </option>
              </select>
            </div>
          </div>
        </div>

        <div class="col-5 inner mr-5">
          <div class="agregar-imagen">
            <label class="titulo w-100">Imagenes</label>
            <slim-cropper
              :options="slimOptions"
              ref="img_principal"
              class="img-principal"
            >
              <input type="file" name="slim" />
            </slim-cropper>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
const ENDPOINT_PATH = "http://127.0.0.1:8000/api/estadio/";
const ENDPOINT_PATH1 = "http://127.0.0.1:8000/api/terreno/";
export default {
  /*  created() {
    this.$store.commit("SET_LAYOUT", "principal-layout");
  }, */
  /* mounted(){
    this.listarPaises()
  }, */

  created: function () {
    this.$store.commit("SET_LAYOUT", "principal-layout");
    this.listarPaises();
    this.listarTerrenos();
  },

  data() {
    return {
      nombre_estadio: "",
      acerca_estadio: "",
      terreno_id: 0,
      slimOptions: {
        label: "Subir imagen principal del estadio",
      },
      pais: 0,
      paises: [],
      ciudad: 0,
      ciudades: [],
      terrenos: [],
    };
  },
  methods: {
    async listarPaises() {
      try {
        const { data } = await axios.get(ENDPOINT_PATH + "paises");
        this.paises = data;
      } catch (error) {
        console.log(error);
      }
    },

    async listarCiudades() {
      try {
        const { data } = await axios.get(ENDPOINT_PATH + "ciudades", {
          params: {
            pais_id: this.pais,
          },
        });
        this.ciudades = data;
      } catch (error) {
        console.log(error);
      }
    },
    async listarTerrenos() {
      try {
        const { data } = await axios.get(ENDPOINT_PATH1 + "terrenos");
        this.terrenos = data;
      } catch (error) {
        console.log(error);
      }
    },

    async crearEstadio() {
      let payload = {
        nombre_estadio: this.nombre_estadio,
        acerca_estadio: this.acerca_estadio,
        img_principal:
          this.$refs.img_principal.instanciaCrop.dataBase64.output.image,
        ciudad_id: this.ciudad,
        terreno_id: this.terreno_id,
      };
      try {
        /* console.log(payload); */
        const { data } = await axios.post(
          ENDPOINT_PATH + "crear_estadio",
          payload,
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: "Bearer " + localStorage.getItem("access_token"),
            },
          }
        );
        this.estadio = data;
        
        if (this.estadio) {
          console.log(this.estadio.id);
          this.$router.push({name:"EstadiosEditar",params:{id:this.estadio.id}})
        }
      } catch (error) {
        console.log(error);
      }
    },
  },

  components: {},
};
</script>
<style>
.cont-principal {
  margin-top: 90px;
}
.about {
  margin-left: 100px;
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
  margin-top: 30px;
  text-align: left;
  margin-inline-end: 30px;
  font-weight: bold;
  font-size: 35px;
  color: #000000;
  margin-right: 880px;
}
.btn-crear-estadio {
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

.btn-crear-estadio:hover {
  box-shadow: 0 2px 8px 0 rgba(115, 88, 250, 0.4),
    0 10px 30px 0 rgba(134, 111, 247, 0.19);
  color: #fff;
  text-decoration-line: none;
}
.boton-agregar-img-estadio {
  height: 40px;
  font-weight: normal;
  font-size: 16px;
  background: #7358fa linear-gradient(90deg, #7358fa 0%, #866ff7 100%) 0% 0%
    no-repeat padding-box;
  border-radius: 10px;
  color: #ffff;
  align-content: flex-end;
  align-items: flex-end;
}
.boton-agregar-img-estadio:hover {
  box-shadow: 0 2px 8px 0 rgba(115, 88, 250, 0.4),
    0 10px 30px 0 rgba(134, 111, 247, 0.19);
  color: #fff;
  text-decoration-line: none;
}

.bton-agregar-img {
  width: 40px;
  height: 40px;
  font-weight: normal;
  font-size: 16px;
  background: #7358fa linear-gradient(90deg, #7358fa 0%, #866ff7 100%) 0% 0%
    no-repeat padding-box;
  border-radius: 15px;
  color: #ffff;
  display: flex;
  align-content: center;
  align-items: center;
}

/* ESTILOS PARA LOS FORMULARIOS */
.titulo {
  height: 35px;
  text-align: left;
  font-weight: bold;
  font-size: 30px;
  letter-spacing: 0px;
  color: #000000;
  display: flex;
  justify-content: space-between;
}

.agregar-imagen {
  position: relative;
}
.img-principal {
  border-radius: 30px;
  height: 100%;
  width: 100%;
}

.posicion {
  position: absolute;
  width: 40px;
  height: 40px;
  padding: 0;
  background-color: #755bfa;
  border-radius: 13px;

  z-index: 2;
  right: 50%;
  bottom: 0px;
}
.icon-anadir {
  width: 16px;
  height: 16px;
}
/* estilo de la caja del nombre del estadio */
.p-titulo {
  width: 117px;
  height: 15px;
  margin-top: 22px;
  margin-bottom: 3px;
  margin-left: 12px;
  font-family: "Rubik";
  font-size: 13px;
  letter-spacing: 0px;
  color: #637381;
}
.acercaEstadio {
  width: 345px;
  height: 171px;
  background: #ffffff 0% 0% no-repeat padding-box;
  border: 1px solid #dfe4e8;
  border-radius: 8px;

  padding: 1px 10px;
  font-size: 15px;
  font-family: "Rubik";
  text-align: left;
  letter-spacing: 0px;
  color: #000000;
}

.acercaEstadio::placeholder {
  font-size: 15px;
  font-family: "Rubik";
  text-align: left;
  letter-spacing: 0px;
  color: #dfe4e8;
}

.texto-nombre {
  width: 345px;
  height: 40px;
  background: #ffffff 0% 0% no-repeat padding-box;
  border: 1px solid #dfe4e8;
  border-radius: 8px;
  opacity: 1;
}
.texto-nombre::placeholder {
  font-size: 15px;
  font-family: "Rubik";
  text-align: left;
  letter-spacing: 0px;
  color: #dfe4e8;
}

.texto-select {
  width: 230px;
  height: 40px;
  background: #ffffff 0% 0% no-repeat padding-box;
  border: 1px solid #dfe4e8;
  border-radius: 8px;
  opacity: 1;
}

.contenido {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
}
.inner {
  margin: 5px;
  flex: 1;
  min-width: 360px;
  padding: 15px;
}

.styles_img_pre {
  position: relative;
}

.styles_img_pre img {
  border-radius: 20px;
}

.btn_accion_eliminar {
  width: 36px;
  height: 36px;
  background-color: black;
  border-radius: 40px;
  opacity: 0.6;
  margin-right: 10px;
}

.btn_accion_editar {
  width: 36px;
  height: 36px;
  background-color: black;
  border-radius: 40px;
  opacity: 0.4;
  padding: 0;
}
.boton_accion {
  position: absolute;
  z-index: 2;
  padding: 0px;
  bottom: 10px;
  right: 86px;
}
</style>
