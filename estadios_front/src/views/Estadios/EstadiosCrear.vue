<template>
  <div class="container-fluid cont-principal">
    <!-- Modal -->
    <div
      class="modal fade"
      id="exampleModal"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">
              Seleccione una imagen
            </h5>
            <button
              type="button"
              class="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <!-- <slim-cropper ref="slim-cropper" :options="slimOptions" style="width:120px;height:150px">
               
             </slim-cropper> -->
            <slim-cropper :options="slimOptions">
              <input type="file" name="slim" />
            </slim-cropper>
          </div>
          <div class="modal-footer d-flex justify-content-center">
            <button
              type="button"
              class="btn btn-secondary"
              data-dismiss="modal"
            >
              Cerrar
            </button>
            <button type="button" class="btn boton-agregar-img-estadio">
              Agregar
            </button>
          </div>
        </div>
      </div>
    </div>
    <!--  FIN DEL MODAL PARA AGREGAR IMAGENES DE ESTADIO -->

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
      <a type="button" class="btn btn-crear-estadio pr-2">Guardar</a>
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
                v-model='pais'
                @change='listarCiudades()'
                class='texto-select'
              >
                <option value="0">seleccione pais</option>
                <option v-for='data in paises' :key='data.id' :value='data.id'>
                  {{ data.nombre }}
                </option>
              </select>
              <p for="" class="p-titulo">ciudad</p>
              <select class="texto-select" v-model='ciudad'>
                <option value="0">seleccione ciudad</option>
                <option
                  v-for='data in ciudades'
                  :key='data.id'
                  :value='data.id'
                >
                  {{ data.nombre }}
                </option>
              </select>
              <p for="" class="p-titulo">Tipo de terreno</p>
              <select v-model="terreno_id" class="texto-select">
                <option value="0">seleccionar</option>
                <option v-for="terreno in terrenos" :key="terreno.id"
                :value="terreno.id">{{terreno.nombre_terreno}}</option>

              </select>
            </div>
          </div>
        </div>

        <div class="col-5 inner mr-5">
          <div class="agregar-imagen">
            <label class="titulo w-100"
              >Imagenes
              <button
                class="btn bton-agregar-img mx-5"
                data-toggle="modal"
                data-target="#exampleModal"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="17.5"
                  height="17.5"
                  fill="#FFFF"
                  viewBox="0 0 17.5 17.5"
                  title="Añadir imagen"
                  alt=""
                  data-toggle="tooltip"
                  data-placement="bottom"
                >
                  <g
                    id="icon_añadir"
                    data-name="icon / añadir"
                    transform="translate(-138.25 -648.25)"
                  >
                    <path
                      id="Línea_5"
                      data-name="Línea 5"
                      d="M16,.75H0A.75.75,0,0,1-.75,0,.75.75,0,0,1,0-.75H16a.75.75,0,0,1,.75.75A.75.75,0,0,1,16,.75Z"
                      transform="translate(139 657)"
                    />
                    <path
                      id="Línea_6"
                      data-name="Línea 6"
                      d="M0,16.75A.75.75,0,0,1-.75,16V0A.75.75,0,0,1,0-.75.75.75,0,0,1,.75,0V16A.75.75,0,0,1,0,16.75Z"
                      transform="translate(147 649)"
                    />
                  </g>
                </svg>
              </button>
            </label>
          </div>
          <div class="container mt-4 inner">
            <div class="row">
              <div
                class="col-md-6 col-lg-4 mt-0 styles_img_pre"
                v-for="(estadio, index) in estadios"
                :key="index"
              >
                <img
                  :src="estadio.img_estadio"
                  alt=""
                  class="mt-4 w-100"
                  width="cover"
                  height="100px"
                />
                <div class="boton_accion">
                  <button class="btn_accion_eliminar">
                    <img
                      src="/assets/1. Estadios/Iconos/icon - Eliminar.svg"
                      width="cover"
                      height="20px"
                      alt=""
                      srcset=""
                    />
                  </button>
                  <button class="btn_accion_editar">
                    <img
                      src="/assets/1. Estadios/Iconos/icon - editar.svg"
                      width="cover"
                      height="20px"
                      alt=""
                      srcset=""
                    />
                  </button>
                </div>
              </div>
            </div>
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

  data() {
    return {
      nombre_estadio: "",
      acerca_estadio: "",
      terreno_id: 0,

      estadios: [
        {
          nombre: "Wembley Stadium",
          img_estadio:
            "/assets/1. Estadios/Imágenes de estadios/1.1 wembley-stadium.jpg",
        },
        {
          nombre: "Madison Square Garden",
          img_estadio:
            "/assets/1. Estadios/Imágenes de estadios/2.1 Madison-Square-Garden.jpg",
        },
        {
          nombre: "Rogers center",
          img_estadio:
            "/assets/1. Estadios/Imágenes de estadios/1.4 wembley-stadium.jpg",
        },
        {
          nombre: "Rogers center",
          img_estadio:
            "/assets/1. Estadios/Imágenes de estadios/5.1 Rogers Centre.jpg",
        },
      ],
      slimOptions: {
        label: "Subir imagen",
      },
      pais: 0,
      paises: [],
      ciudad: 0,
      ciudades: [],
      terrenos: [],
    };
  },
  methods: {
    /* async listarPaises() {
      const res = await axios.get(ENDPOINT_PATH + "paises");
      this.paises = res.data.paises;
    },
    async listarCiudades(){

    } */

    async listarPaises() {
       axios.get(ENDPOINT_PATH + "paises").then(
        function (response) {
          this.paises = response.data;
        }.bind(this)
      );
    },

   async listarCiudades() {
      axios
        .get(ENDPOINT_PATH + "ciudades", {
          params: {
            pais_id: this.pais,
          },
        })
        .then(
          function (response) {
            this.ciudades = response.data;
          }.bind(this)
        );
    },
    async listarTerrenos(){
      axios
        .get(ENDPOINT_PATH1+"terrenos").then(
        function (response) {
          this.terrenos = response.data;
        }.bind(this)
      );
    }
  },
  created: function () {
    this.$store.commit("SET_LAYOUT", "principal-layout");
    this.listarPaises();
    this.listarTerrenos()
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
