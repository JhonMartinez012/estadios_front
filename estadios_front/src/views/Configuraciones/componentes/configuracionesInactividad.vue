<template>
  <div class="container-fluid">
    <!-- INICIO DE LA MODAL ELIMINAR -->
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
            <h5 class="modal-title" id="exampleModalLabel">Eliminar motivo</h5>
            <button
              type="button"
              class="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body text-center">
            <p>¿Desea eliminar este motivo?</p>
          </div>
          <div class="modal-footer d-flex justify-content-center">
            <button
              type="button"
              class="btn btn-secondary"
              data-dismiss="modal"
            >
              Cerrar
            </button>
            <button type="button" class="btn boton-eliminar-motivo">
              Eliminar
            </button>
          </div>
        </div>
      </div>
    </div>
    <!--  FIN DEL MODAL PARA ELIMINAR -->
    <div class="container-fluid estilos-container">
      <label class="parrafo font-weight-bold ml-0"
        >Motivos de Inactividad</label
      >
    </div>

    <div class="form-row mb-4">
      <div class="form-group col-lg-3 col-md-6 col-sm-12">
        <label for="inputMotivo">Motivo</label>
        <input
          type="text"
          v-model="nombre_motivo"
          class="form-control inputt"
          placeholder="Motivo"
        />
        <label for="" class="msg_error" v-if="errores.nombre_motivo">{{errores.nombre_motivo[0]}}</label> 
      </div>
      <div class="form-group col-lg-3 col-md-6">
        <button class="btn btn-create" @click="crearMotivoInactividad">
          crear
        </button>
      </div>
    </div>

    <div class="form-row" v-for="(motivo, key) in motivos" :key="motivo.id">
      <div class="form-group col-lg-3 col-md-6 col-sm-12">
        <input
          type="text"
          class="form-control inputt"
          placeholder="concierto"
          v-model="motivo.nombre_motivo"
          id="motivo"
          :disabled="motivo.disabled"
        />
         
      </div>
      <div class="form-group col-lg-3 col-md-6 botones-inactividad">
        <button
          class="btn btn-crear-inactividad"
          v-if="motivo.disabled == false"
          @click="editarMotivoInactividad(key)"
          title="Guardar"
          data-original-title="Guardar"
          data-toggle="tooltip"
          data-placement="bottom"
        >
          <!-- Boton para actualizar el usuario -->
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="25"
            fill="#FFF"
            viewBox="0 0 22 22"
          >
            <g
              id="Icon_check-simple"
              data-name="Icon / check-simple"
              transform="translate(-1 -1)"
            >
              <path
                id="Trazado_8"
                data-name="Trazado 8"
                d="M9.56,16.79a.748.748,0,0,1-.53-.219l-4.41-4.4A.75.75,0,0,1,5.68,11.109L9.6,15.016l8.763-7.621a.75.75,0,0,1,.984,1.132l-9.29,8.08A.748.748,0,0,1,9.56,16.79Z"
              />
              <path
                id="Elipse_2471"
                data-name="Elipse 2471"
                d="M11,1.5A9.5,9.5,0,1,0,20.5,11,9.511,9.511,0,0,0,11,1.5M11,0A11,11,0,1,1,0,11,11,11,0,0,1,11,0Z"
                transform="translate(1 1)"
              />
            </g>
          </svg>
        </button>
        <button
          class="btn btn-accion-inactividad"
          title="Eliminar"
          alt=""
          data-toggle="tooltip"
          data-placement="bottom"
          v-if="motivo.disabled == true"
        >
          <img
            src="/assets/1. Estadios/Iconos/icon - Eliminar.svg"
            data-toggle="modal"
            data-target="#exampleModal"
          />
        </button>
        <button
          class="btn btn-accion-inactividad"
          title="Editar"
          alt=""
          data-toggle="tooltip"
          data-placement="bottom"
          v-if="motivo.disabled == true"
          @click="habilitarInput(motivo)"
        >
          <img src="/assets/1. Estadios/Iconos/icon - Editar.svg" />
        </button>

        <p
          class="btn btn-contador-inactividad"
          title="Veces que se usó este motivo"
          alt=""
          data-toggle="tooltip"
          data-placement="bottom"
        >
          {{ motivo.estadios_count }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
const ENDPOINT_PATH = "http://127.0.0.1:8000/api/motivo_inactividad/";
export default {
  created: function () {
    this.listarMotivosInactividad();
  },
  updated() {
    $('[data-toggle="tooltip"]').tooltip({
      trigger: "hover",
    });
  },
  data:()=> ({
   
      mostrar: false,
      nombre_motivo: "",
      motivos: [],
      motivo: [],
      errores: [],
      id: 0,
    
  }),

  methods: {
    async listarMotivosInactividad() {
      try {
        const { data } = await axios.get(ENDPOINT_PATH + "motivos_inactividad");
        this.motivos = data.motivos_inactividad;
      } catch (error) {
        console.log(error);
      }
    },

    async crearMotivoInactividad() {
      try {
        let payload = {
          nombre_motivo: this.nombre_motivo,
        };
        const data = await axios.post(ENDPOINT_PATH + "crear_motivo", payload);
        this.motivo = data.data;
       
        if (this.motivo.success == true) {
          this.nombre_motivo = "";
          this.listarMotivosInactividad();
          this.errores=[];
        } else if(this.motivo.success == false){
          this.errores = this.motivo.error;         
        }
      } catch (error) {
        console.log(" No se pudo crear el motivo");
      }
    },

    async editarMotivoInactividad(key) {
      let motivo = this.motivos[key];
      let payload = {
        nombre_motivo: motivo.nombre_motivo,
      };

      try {
        const { data } = await axios.put(
          ENDPOINT_PATH + "editar_motivo/" + motivo.id,
          payload
        );
        this.data = data;
        if (this.data) {
          this.motivo.disabled = true;
          this.listarMotivosInactividad();
        } else {
          console.log("No se pudo actualizar");
        }
      } catch (error) {
        console.log(error);
      }
    },
    habilitarInput(motivo) {
      try {
        motivo.disabled = false;
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>

<style scoped>
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

#motivo:disabled {
  background-color: rgba(204, 204, 204, 0.527);
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
.btn-create {
  width: 130px;
  height: 40px;
  font-weight: normal;
  font-size: 16px;
  background: #7358fa linear-gradient(90deg, #7358fa 0%, #866ff7 100%) 0% 0%
    no-repeat padding-box;
  border-radius: 12px;
  color: #ffff;
  align-content: flex-end;
  align-items: flex-end;
  margin-top: 30px;
}

.btn-create:hover {
  box-shadow: 0 2px 8px 0 rgba(115, 88, 250, 0.4),
    0 10px 30px 0 rgba(134, 111, 247, 0.19);
  color: #fff;
  text-decoration-line: none;
}
.inputt {
  width: 100%;
  height: 40px;
  background: #ffffff 0% 0% no-repeat padding-box;
  border: 1px solid #dfe4e8;
  border-radius: 8px;
}

.botones-inactividad {
  margin: 0px;
  width: auto;
  margin-top: 0px;
  display: flex;
  justify-content: start;
  margin-bottom: 10px;
}

.btn-accion-inactividad,
.btn-contador-inactividad,
.btn-crear-inactividad {
  width: 40px;
  height: 40px;
}

.btn-accion-inactividad {
  margin-left: 0px;
  background: #755bfa 0% 0% no-repeat padding-box;
  background-position: center center;
  border-radius: 12px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
}

.btn-crear-inactividad {
  margin: 0px;
  background: #29d884 0% 0% no-repeat padding-box;
  background-position: center center;
  border-radius: 12px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
}

.btn-contador-inactividad {
  background: #dfe4e8 0% 0% no-repeat padding-box;
  border-radius: 15px;
}

.boton-eliminar-motivo {
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

.boton-eliminar-motivo:hover {
  box-shadow: 0 2px 8px 0 rgba(115, 88, 250, 0.4),
    0 10px 30px 0 rgba(134, 111, 247, 0.19);
  color: #fff;
  text-decoration-line: none;
}

.msg_error {  
  color: #ff0000;
  text-align: left;
  margin-left: 0px;
  font-family: "Rubik";
  font-size: 18px;
  width: 100%;
  margin-bottom: 0;
  margin-top: 5px;
}
</style>
