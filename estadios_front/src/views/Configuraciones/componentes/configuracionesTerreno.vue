<template >
  <div class="container-fluid"  v-if="terrenos">
    <!-- Modal para crear terreno -->
    <div class="modal" :class="{ show: modal }">
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">
              Añadir tipo de terreno
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
            <div class="container">
              <div class="row">
                <div class="col-md-12 d-flex justify-content-center">
                  <slim-cropper
                    :options="slimOptions"
                    ref="img_terreno"
                    class="estilo-slim"
                  >
                    <input type="file" name="slim" />
                  </slim-cropper>
                </div>
              </div>

              <div class="form-row">
                <div class="form-group col-md-12 text-center">
                  <p for="" class="p-terreno">Nombre terreno</p>
                  <input
                    id="nombreTerreno"
                    placeholder="Nombre"
                    type="text"
                    class="inputt"                   
                    v-model="nombre_terreno"
                     @keyup="habilitarBtn()"
                  />
                </div>
              </div>
            </div>
          </div>
          <div class="modal-footer justify-content-center">
            <button
              type="button"
              class="btn btn-cerrar"
              data-dismiss="modal"
              @click="closeModal()"
            >
              Cerrar
            </button>
            <button
              type="button"
              id="btnGuardar"
              class="btn btn-guardar"
              @click="crear_terreno"
              disabled
            >
              añadir
            </button>
          </div>
        </div>
      </div>
    </div>
    <!-- ******* FIN DE LA MODAL PARA CREAR ******** -->
    <!-- INICIO DE LA MODAL ELIMINAR -->
    <div class="modal" :class="{ show: modalD }">
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">Eliminar terreno</h5>
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
          <div class="modal-body text-center">
            <p v-if="cantidad_estadios == 0">¿Desea eliminar este terreno?</p>
            <p v-else>
              No se puede eliminar este terreno porque
              {{ cantidad_estadios }} estadio(s) lo han usuado anteriormente
            </p>
          </div>
          <div
            v-if="cantidad_estadios == 0"
            class="modal-footer d-flex justify-content-center"
          >
            <button type="button" class="btn btn-secondary" @click="closeModal">
              Cerrar
            </button>
            <button
              type="button"
              class="btn boton-eliminar-terreno"
              @click="eliminarTerreno(id)"
            >
              Eliminar
            </button>
          </div>
        </div>
      </div>
    </div>
    <!--  FIN DEL MODAL PARA ELIMINAR TERRENO -->

    <div class="container-fluid estilos-container">
      <label class="parrafo font-weight-bold ml-0">Tipos de terreno</label>
      <button class="btn btn-crear-t pr-2" @click="openModal">Crear</button>
    </div>

    <!-- ******* MODAL PARA EDITAR UN TERRENO ******* -->
    <div class="modal" :class="{ show: modalE }">
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">Editar terreno</h5>
            <button
              type="button"
              class="close"
              data-dismiss="modal"
              aria-label="Close"
              @click="closeModal()"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <div class="container">
              <div class="row">
                <div class="col-md-12 d-flex justify-content-center">
                  <slim-cropper
                    :options="slimOptions"
                    ref="img_terrenoE"
                    class="estilo-slim"
                  >
                    <input
                      id="imagen"
                      type="file"
                      name="slim"
                      accept="image/*"
                    />
                  </slim-cropper>
                </div>
              </div>

              <div class="form-row">
                <p for="" class="p-terreno">Nombre terreno</p>
                <div class="form-group col-md-12 text-center">
                  <input
                    placeholder="Nombre"
                    type="text"
                    class="inputt"
                    v-model="terreno.nombre_terreno"
                  />
                </div>
              </div>
            </div>
          </div>
          <div class="modal-footer justify-content-center">
            <button
              type="button"
              class="btn btn-cerrar"
              data-dismiss="modal"
              @click="closeModal()"
            >
              Cerrar
            </button>
            <button
              type="button"
              class="btn btn-guardar"
              @click="editarTerreno"
            >
              añadir
            </button>
          </div>
        </div>
      </div>
    </div>
    <!-- FIN DE LA MODAL PARA EDITAR TERRENO -->
    <div class="row">
      <div
        class="col-md-4 col-sm-6 col-lg-2 fondo-card mt-4"
        v-for="terreno in terrenos"
        :key="terreno.id"
      >
        <div class="card-sl-terreno">
          <div class="card-image-terreno">
            <img
              class="hover-image w-100"
              :src="terreno.img"
              width="cover"
              height="150px"
            />
            <div
              class="card-action-terreno"
              title="Estadios con este terreno"
              alt=""
              data-toggle="tooltip"
              data-placement="bottom"
            >
              <label for="">{{ terreno.estadios_count }} </label>
            </div>
          </div>

          <div class="card-heading-terreno">
            <p class="tres_puntos">{{ terreno.nombre_terreno }}</p>
          </div>

          <div class="card-text-terreno btns-accion text-center">
            <button
              class="btn btn-accion"
              title="Eliminar"
              data-toggle="tooltip"
              data-placement="bottom"
              @click="openModalD(terreno)"
            >
              <img
                src="/assets/1. Estadios/Iconos/icon - Eliminar.svg"
                alt=""
                @click="terreno.id"
              />
            </button>
            <button
              class="btn btn-accion"
              title="Editar"
              alt=""
              data-toggle="tooltip"
              data-placement="bottom"
              @click="openModalE(terreno)"
            >
              <img src="/assets/1. Estadios/Iconos/icon - Editar.svg" />
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
const ENDPOINT_PATH = "http://127.0.0.1:8000/api/terreno/";
export default {
  mounted(){
    this.listarTerrenos();
    console.log("hola");
  },
  updated() {
    $('[data-toggle="tooltip"]').tooltip({
      trigger: "hover",
    });
  },
  data: () => ({
    nombre_terreno: "",
    img: "",
    cantidad_estadios: 0,
    show: true,
    modal: 0,
    modalE: 0,
    modalD: 0,
    id: 0,
   
    terrenos: [],
    terrenoNuevo: [],
    terreno: {
      nombre_terreno: "",
      img: "",
    },
    slimOptions: {
      label: "Añadir imagen del terreno",
      //initialImage:require('../../../../public/assets/1. Estadios/Terrenos de juego/1. gramilla.jpg')
    },
    terrenoDelete: [],
  }),
  methods: {
    async habilitarBtn() {
      try {        
        let nombreTerreno = this.nombre_terreno;
        let v=0;
 
       if (nombreTerreno == "") {
         v=v+1;
       }
       if (v == 0) {
         document.getElementById("btnGuardar").disabled = false;
       } else {
         document.getElementById("btnGuardar").disabled = true;
       }
      } catch (error) {
        console.log(error);
      }
    },
    async listarTerrenos() {
      try {
        const { data } = await axios.get(ENDPOINT_PATH + "terrenos");
        this.terrenos = data.terrenos;
        //console.log(this.terrenos);
      } catch (error) {
        console.log(error);
      }
    },

    async crear_terreno() {
      /* console.log(payload.img); */
      try {
        let payload = {
          nombre_terreno: this.nombre_terreno,
          img: this.$refs.img_terreno.get_image(),
        };
        document.getElementById("btnGuardar").disabled = true;
        
        const { data } = await axios.post(
          ENDPOINT_PATH + "crear_terreno",
          payload
        );
        this.terrenoNuevo = data;
        /* console.log(this.terrenoNuevo); */
        if (this.terrenoNuevo.aceptado == true) {
          this.closeModal();
          this.listarTerrenos();
          this.nombre_terreno = "";
          this.$refs.img_terrenoE.set_image("");
        }
        //console.log(this.data);
      } catch (error) {
        console.log(" No se pudo registrar");
      }
    },

    async editarTerreno() {},

    async eliminarTerreno(id) {
      try {
        const res = await axios.delete(
          ENDPOINT_PATH + "eliminar_terreno/" + id
        );
        this.terrenoDelete = res.status;
        if (this.terrenoDelete == 200) {
          this.closeModal();
          this.listarTerrenos();
        } else {
          console.log("No se pudo eliminar este terreno");
        }
      } catch (error) {
        console.log(error);
      }
    },

    openModal() {
      this.modal = 1;
    },
    openModalE(data = {}) {
      //console.log(data.img);
      this.modalE = 1;
      this.terreno.nombre_terreno = data.nombre_terreno;
      this.terreno.img =
        "/assets/1. Estadios/Terrenos de juego/1. gramilla.jpg";
      console.log(this.terreno.img);
      this.$refs.img_terrenoE.set_image(`${this.terreno.img}`);
    },
    openModalD(data = {}) {
      //console.log(data.img);
      this.modalD = 1;
      this.cantidad_estadios = data.estadios_count;
      this.id = data.id;
    },
    closeModal() {
      this.modal = 0;
      this.modalE = 0;
      this.modalD = 0;
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
.estilos-container {
  font-family: "Gilroy";
  font-size: bold;
}
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
.parrafo {
  margin-top: 30px;
  text-align: left;
  margin-inline-end: 30px;
  font-weight: bold;
  font-size: 35px;
  color: #000000;
  margin-right: 80px;
}
.btn-crear-t {
  width: 120px;
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
.btns-accion {
  margin: 0px;
  width: auto;
  margin-top: 0px;
  display: flex;
  justify-content: center;
}
.btn-accion {
  width: 40px;
  height: 40px;
  margin-left: 0px;
  background: #755bfa 0% 0% no-repeat padding-box;
  background-position: center center;
  border-radius: 12px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
}

.btn-crear-t:hover {
  box-shadow: 0 2px 8px 0 rgba(115, 88, 250, 0.4),
    0 10px 30px 0 rgba(134, 111, 247, 0.19);
  color: #fff;
  text-decoration-line: none;
}
.btn-cerrar {
  width: 90px;
  height: 40px;
  background: #f0f1ff 0% 0% no-repeat padding-box;
  border-radius: 12px;

  text-align: center;
  font: normal normal medium 16px/19px "Gilroy";
  letter-spacing: 0px;
  color: #3c2ea8;
}
.btn-guardar {
  width: 90px;
  height: 40px;
  background: transparent linear-gradient(90deg, #7358fa 0%, #866ff7 100%) 0% 0%
    no-repeat padding-box;
  border-radius: 12px;

  text-align: center;
  font: normal normal medium 16px/19px "Gilroy";
  letter-spacing: 0px;
  color: #ffffff;
  opacity: 1;
}
.btn-guardar:hover {
  background: transparent linear-gradient(90deg, #7358fa 0%, #7358fa 100%) 0% 0%
    no-repeat padding-box;
  box-shadow: 0px 3px 6px #866ff766;
}
.btn-guardar:disabled {
  background: transparent linear-gradient(90deg, #545455 0%, #545455 100%) 0% 0%
    no-repeat padding-box;
  font: normal normal medium 16px/19px "Gilroy";
  letter-spacing: 0px;
  opacity: 1;
}

.btn-guardar:disabled:hover {
  background: transparent linear-gradient(90deg, #545455 0%, #545455 100%) 0% 0%
    no-repeat padding-box;
  box-shadow: 0px 3px 6px #866ff766;
}
.estilo-slim {
  width: 120px;
  height: 120px;
  margin-top: 0px;
  border-radius: 30px;
  margin-bottom: 12px;
  font-family: "Gilroy";
  font-size: 13px;
  color: #637381;
}
.p-terreno {
  width: 117px;
  height: 15px;
  margin-top: 22px;
  margin-bottom: 3px;
  margin-left: 73px;
  font-family: "Rubik";
  font-size: 13px;
  letter-spacing: 0px;
  color: #637381;
}
.inputt {
  width: 300px;
  height: 40px;
  background: #ffffff 0% 0% no-repeat padding-box;
  border: 1px solid #dfe4e8;
  border-radius: 8px;
  opacity: 1;
}

.inputt::placeholder {
  font-size: 15px;
  font-family: "Rubik";
  text-align: left;
  letter-spacing: 0px;
  color: #dfe4e8;
}

/* tarjetaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa */
/* Card Styles */
.fondo-card-terreno {
  background-color: none;
}

.card-sl-terreno {
  border-radius: 8px;
  /* box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19); */
  background-color: rgba(255, 255, 255, 0.1);
}

.buscar_id {
  color: black;
}
.hover-image:hover {
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.4), 0 10px 35px 0 rgba(0, 0, 0, 0.19);
  color: #fff;
  border-radius: 45px;
  text-decoration-line: none;
}

.tres_puntos {
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
}
.card-image-terreno {
  position: relative;
}
.card-image-terreno img {
  max-height: 100%;
  max-width: 100%;
  border-radius: 45px;
  text-decoration-line: none;
}

/* Modificar imagen pequeña */
.card-action-terreno {
  position: absolute;

  /* margin-top: -25px;
  margin-right: 130px; */
  z-index: 2;
  background: #dfe4e8;
  border-radius: 10px;
  padding: 8px;
  width: 50px;
  height: 50px;
  right: -20px;
  bottom: 120px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-position: center center;
}

.card-action-terreno label {
  margin: 0px;
  border-radius: 15px;
  color: black;
  display: flex;
}

.card-heading-terreno {
  font-size: 20px;
  text-align: center;
  font-family: "Gilroy";
  background-color: transparent;
  padding: 10px 15px;
  margin-bottom: -20px;
  color: #000000;
}

.card-text-terreno {
  padding: 10px 15px;
  background-color: transparent;
  font-size: 14px;
  color: #636262;
}

.boton-eliminar-terreno {
  width: 90px;
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

.boton-eliminar-terreno:hover {
  box-shadow: 0 2px 8px 0 rgba(115, 88, 250, 0.4),
    0 10px 30px 0 rgba(134, 111, 247, 0.19);
  color: #fff;
  text-decoration-line: none;
}
</style>
