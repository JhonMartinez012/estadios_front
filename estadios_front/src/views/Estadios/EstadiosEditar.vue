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
          Editar estadio: {{ estadio.nombre_estadio }}
        </li>
      </ol>
    </nav>

    <!-- Modal para agregar imagenes secundarias del estadio-->
    <div class="modal" :class="{ show: modal }">
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
              @click="closeModal"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <!-- <slim-cropper ref="slim-cropper" :options="slimOptions" style="width:120px;height:150px">
               
             </slim-cropper> -->
            <slim-cropper :options="slimOptions" ref="imgSecundaria">
              <input type="file" name="slim" />
            </slim-cropper>
          </div>
          <div class="modal-footer d-flex justify-content-center">
            <button
              type="button"
              class="btn btn-secondary"
              data-dismiss="modal"
              @click="closeModal"
            >
              Cerrar
            </button>
            <button
              type="button"
              @click="agregarImagenSecundaria"
              class="btn boton-agregar-img-estadio"
              v-if="btnCrear == true"
            >
              Agregar
            </button>
            <button
              type="button"
              @click="editarImgSecundaria(idImg)"
              class="btn boton-agregar-img-estadio"
              v-if="btnEditar == true"
            >
              Editar
            </button>
          </div>
        </div>
      </div>
    </div>
    <!--  FIN DEL MODAL PARA AGREGAR IMAGENES DE ESTADIO -->

    <div class="container-fluid ml-0">
      <label class="parrafo font-weight-bold ml-0">Editar Estadio </label>
      <button
        type="button"
        class="btn btn-guardar pr-2"
        @click="editarEstadio()"
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
              <div class="" style="height: 25%">
                <p for="inputEmail4" class="p-titulo">Nombre del estadio</p>
                <input
                  type="text"
                  v-model="estadio.nombre_estadio"
                  class="form-control texto-nombre"
                  id=""
                  placeholder="Nombre"
                />
                <label
                  for="inputState"
                  class="msg_error"
                  v-if="errorsEdit.nombreEstadio"
                  >{{ errorsEdit.nombreEstadio[0] }}</label
                >
              </div>
              <div class="" style="height: 75%">
                <p for="inputEmail4" class="p-titulo">Acerca del estadio</p>
                <textarea
                  v-model="estadio.acerca_estadio"
                  cols="30"
                  rows="10"
                  placeholder="Acerca"
                  class="acercaEstadio"
                ></textarea>
              </div>
            </div>
            <div class="form-group col-md-6 inner">
              <div class="" style="height: 25%">
                <p for="inputPassword4" class="p-titulo">pais</p>
                <select
                  v-model="estadio.pais_id"
                  @change="listarCiudades()"
                  class="texto-select"
                >
                  <!-- <option :value="estadio.pais_id">{{ estadio.nom_pais }}</option> -->
                  <option
                    v-for="data in paises"
                    :key="data.id"
                    :value="data.id"
                  >
                    {{ data.nombre }}
                  </option>
                </select>
              </div>
              <div class="" style="height: 25%">
                <p for="" class="p-titulo">ciudad</p>
                <select v-model="estadio.ciudad_id" class="texto-select">
                  <!-- <option :value="estadio.ciudad_id">{{ estadio.nombre }}</option> -->
                  <option
                    v-for="data in ciudades"
                    :key="data.id"
                    :value="data.id"
                  >
                    {{ data.nombre }}
                  </option>
                </select>
              </div>
              <div class="" style="height: 25%">
                <p for="" class="p-titulo">Tipo de terreno</p>
                <select v-model="estadio.terreno_id" class="texto-select">
                  <option :value="estadio.terreno_id">
                    {{ estadio.nombre_terreno }}
                  </option>
                  <option
                    v-for="terreno in terrenos"
                    :key="terreno.id"
                    :value="terreno.id"
                  >
                    {{ terreno.nombre_terreno }}
                  </option>
                </select>
              </div>
              <div class="" style="height: 25%">
                <p for="inputEmail4" class="p-titulo">Capacidad</p>
                <input
                  type="Number"
                  v-model="estadio.capacidad_estadio"
                  class="form-control texto-select"
                  id="evt"
                  placeholder="Capacidad de espectadores"
                />
              </div>
            </div>
          </div>
        </div>

        <div class="col-5 inner">
          <div class="agregar-imagen">
            <label class="titulo w-100"
              >Imagenes
              <button class="btn bton-agregar-img mx-5" @click="openModal(0)">
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
              <div class="col-md-6 col-lg-4 mt-0 styles_img_pre">
                <img
                  :src="estadio.img_principal"
                  alt=""
                  class="images-editar"
                />
                <div class="boton_accion">
                  <!-- <button class="btn_accion_eliminar">
                    <img
                      src="/assets/1. Estadios/Iconos/icon - Eliminar.svg"
                      width="cover"
                      height="20px"
                      alt=""
                      srcset=""
                    />
                  </button> -->
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
              <div
                class="col-md-6 col-lg-4 mt-0 styles_img_pre"
                v-for="imgSecundaria in imagenesSecundarias"
                :key="imgSecundaria.id"
              >
                <!-- v-for="(estadio, index) in estadios"
                :key="index" -->
                <img
                  :src="imgSecundaria.ruta_img"
                  alt=""
                  class="images-editar"
                />
                <div class="boton_accion">
                  <button
                    class="btn_accion_eliminar"
                    @click="eliminarImgSecundaria(imgSecundaria.id)"
                  >
                    <img
                      src="/assets/1. Estadios/Iconos/icon - Eliminar.svg"
                      width="cover"
                      height="20px"
                      alt=""
                      srcset=""
                    />
                  </button>
                  <button
                    class="btn_accion_editar"
                    @click="openModal(imgSecundaria.id)"
                  >
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
  name: "editarEstadio",
  created() {
    this.init();
  },
  data() {
    return {
      slimOptions: {
        label: "Subir imagen",
      },
      estadio: {},
      id: 0,
      pais: 0,
      paises: [],
      ciudad: 0,
      ciudades: [],
      terrenos: [],
      imagenesSecundarias: [],

      //variables para la modal
      btnCrear: false,
      btnEditar: false,
      show: true,
      modal: 0,
      idImg: 0,

      // Variables para editar el estadio
      estadioEdit: [],
      errorsEdit: [],

      //Variables para eliminar y editar imagenes secundarias
      imgSecundariaDelete: [],
      msgImgSecundariaDelete: [],
    };
  },
  computed: {
    idEstadio() {
      return this.$route.params.id;
    },
  },

  components: {},
  methods: {
    async init() {
      this.$store.commit("SET_LAYOUT", "principal-layout");
      await this.listarEstadio();
      await this.listarPaises();
      await this.listarCiudades();
      await this.listarTerrenos();
      await this.listarImagenesSecundarias();
    },
    async listarEstadio() {
      try {
        const data = await axios.get(
          ENDPOINT_PATH + "ver-estadio/" + this.idEstadio
        );
        if (data?.data) {
          this.estadio = data.data.estadio;
        }
        //console.log(this.estadio);
      } catch (error) {
        console.log(error);
      }
    },
    async listarPaises() {
      try {
        const { data } = await axios.get(ENDPOINT_PATH + "paises");
        this.paises = data.paises;
      } catch (error) {
        console.log(error);
      }
    },
    async listarCiudades() {
      try {
        const { data } = await axios.get(ENDPOINT_PATH + "ciudades", {
          params: {
            pais_id: this.estadio.pais_id,
          },
        });
        this.ciudades = data.ciudades;
      } catch (error) {
        console.log(error);
      }
    },
    async listarTerrenos() {
      try {
        const { data } = await axios.get(ENDPOINT_PATH1 + "terrenos");
        this.terrenos = data.terrenos;
      } catch (error) {
        console.log(error);
      }
    },
    async agregarImagenSecundaria() {
      let payload = {
        imagenSecundaria:
          this.$refs.imgSecundaria.instanciaCrop.dataBase64.output.image,
        estadioId: this.idEstadio,
      };
      try {
        //console.log(payload)
        const { data } = await axios.post(
          ENDPOINT_PATH + "guardar-imagenes-secundarias",
          payload
        );
        this.imagen = data;
        if (this.imagen) {
          this.closeModal();
          this.listarEstadio();
          this.listarImagenesSecundarias();
        }
      } catch (error) {
        console.log(error);
      }
    },

    async listarImagenesSecundarias() {
      const { data } = await axios.get(
        ENDPOINT_PATH + "imagenes-secundarias/" + this.idEstadio
      );
      this.imagenesSecundarias = data.imagenesSecundarias;
      //console.log(this.imagenesSecundarias);
    },

    async editarEstadio() {
      try {
        let payload = {
          nombreEstadio: this.estadio.nombre_estadio,
          acercaEstadio: this.estadio.acerca_estadio,
          ciudadId: this.estadio.ciudad_id,
          terrenoId: this.estadio.terreno_id,
          capacidadEstadio: this.estadio.capacidad_estadio,
        };
        const { data } = await axios.put(
          ENDPOINT_PATH + "editar-estadio/" + this.idEstadio,
          payload
        );
        this.estadioEdit = data;
        if (this.estadioEdit.success == true) {
          this.$router.push({ name: "Estadios" });
        } else {
          this.errorsEdit = this.estadioEdit.errores;
        }
      } catch (error) {
        console.log(error);
      }
    },
    async eliminarImgSecundaria(id) {
      try {
        const { data } = await axios.delete(
          ENDPOINT_PATH + "eliminar-imagen-secundaria/" + id
        );
        this.imgSecundariaDelete = data;
        if (this.imgSecundariaDelete.success == true) {
          this.listarImagenesSecundarias();
        }
      } catch (error) {
        console.log();
      }
    },
    async editarImgSecundaria(id) {
      try {
        let payload = {
          imgSecEdit:
            this.$refs.imgSecundaria.instanciaCrop.dataBase64.output.image,
          estadioId: this.idEstadio,
        };
        const { data } = await axios.put(
          ENDPOINT_PATH + "editar-imagenes-secundarias/" + id,
          payload
        );
        this.imagen=data;
        if (this.imagen.success==true) {
          this.closeModal();
          this.listarImagenesSecundarias();
          
        }

      } catch (error) {
        console.log(error);
      }
      
    },

    openModal(id) {
      if (id == 0) {
        this.btnCrear = true;
        this.btnEditar = false;
      } else if (id != 0) {
        this.btnEditar = true;
        this.btnCrear = false;
        this.idImg = id;
      }
      this.modal = 1;
    },
    closeModal() {
      this.modal = 0;
    },
  },
};
</script>
<style scoped>
.show {
  display: list-item;
  opacity: 1;
  background: rgba(168, 167, 172, 0.6);
}
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
  font-family: "GilroyB";
  margin-top: 30px;
  text-align: left;
  margin-inline-end: 30px;
  font-weight: bold;
  font-size: 35px;
  color: #000000;
  margin-right: 880px;
}

/* ESTILOS PARA LOS FORMULARIOS */
.titulo {
  font-family: "GilroyB";
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

.images-editar {
  margin-top: 10px;
  width: 100%;
  height: 120px;
  border-radius: 20px;
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
  margin-top: 5px;
  margin-bottom: 3px;
  margin-left: 12px;
  font-family: "Rubik";
  font-size: 13px;
  letter-spacing: 0px;
  color: #637381;
}
.acercaEstadio {
  width: 345px;
  height: 200px;
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

/* ESTILOS PARA LOS BOTONES */
.btn-guardar {
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

.btn-guardar:hover {
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
</style>
