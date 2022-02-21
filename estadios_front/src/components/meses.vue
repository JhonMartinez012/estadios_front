<template>
  <div>
    <!-- Modal para motivos de inactividad de un estadio -->
    <div class="modal" :class="{ show: modal }">
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">
              {{ tituloModal }}
            </h5>
            <button
              v-if="tituloModal != true"
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
            <div class="container col-md-12">
              <div class="row justify-content-center">
                <div class="col-12">
                  <div class="row justify-content-center">
                    <!-- <label class="fechaSeleccionada"> {{ mostrarFecha }} </label> -->
                    <input
                      type="text"
                      class="fechaSeleccionada"
                      v-model="mostrarFecha"
                      disabled
                    />
                  </div>
                  <div class="row justify-content-center">
                    <div class="col-10" v-if="inactive == false">
                      <p for="" class="p-motivo ml-4">Motivo inactividad</p>
                      <select
                        v-model="motivoInactividadId"
                        class="select-motivo ml-2"
                      >
                        <option value="0">seleccionar</option>
                        <option
                          v-for="motivo in motivosInactividad"
                          :key="motivo.id"
                          :value="motivo.id"
                        >
                          {{ motivo.nombre_motivo }}
                        </option>
                      </select>
                      <span for="inputState" class="msg_error" v-if="mensaje">{{
                        mensaje
                      }}</span>
                      <span for="inputState" class="msg_error" v-if="existe">{{
                        existe
                      }}</span>

                    </div>
                    <div class="col-10" v-if="inactive">
                      <label for="" class="inactive-motive ">{{inactiveMotive}}</label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="modal-footer justify-content-center">
            <button
              v-if="inactive != true"
              type="button"
              class="btn btn-cerrar"
              data-dismiss="modal"
              @click="closeModal()"
              
            >
              Cerrar
            </button>
            <button
              v-if="inactive != true"
              type="button"
              class="btn btn-inactivar"
              data-dismiss="modal"
              @click="inactivarDia()"
            >
              Inactivar
            </button>
            <button
              v-if="inactive"
              type="button"
              class="btn btn-activar"
              data-dismiss="modal"
              @click="activarDia()"
            >
              Activar día
            </button>
          </div>
        </div>
      </div>
    </div>
    <!-- ******* FIN DE LA MODAL PARA LOS MOTIVOS DE INACTIVIDAD ******** -->

    <div class="row calendario">
      <div
        v-for="(mes, index) in countMonth"
        :key="`mes-${index}`"
        class="meses col-md-4 col-sm-6"
      >
        <label class="mes-nombre">{{
          dayjs(numeroMeses[index]).locale("es").format("MMMM YYYY") ||
          "Sin titulo"
        }}</label>

        <ol>
          <li
            class="dia-nombre"
            v-for="(nom, index1) in nomDias"
            :key="`nombrDia-${index1}`"
          >
            {{ dayjs(dayjs().day(index1).locale("es")).format("dd") }}
          </li>
          <li
            v-for="(dia, index2) in meses[index]"
            :key="`dias-${index2}`"
            :class="{
              dias:
                dayjs(typeof dia === 'object' ? dia.daySelect : dia).format('MM') ==
                dayjs(numeroMeses[index]).format('MM'),
              'otro-mes':
                dayjs(typeof dia === 'object' ? dia.daySelect : dia).format('MM') !=
                dayjs(numeroMeses[index]).format('MM'),

              'dia--selected': typeof dia === 'object' ? dia.isSelect : false
                
            }"
            @click="openModal(dia)"
          >
            {{ dayjs(typeof dia === 'object' ? dia.daySelect : dia).format("D") }}
          </li>
        </ol>
      </div>
    </div>
  </div>
</template>

<script>
import dayjs from "dayjs";
import "dayjs/locale/es";
import axios from "axios";
const ENDPOINT_PATH = "http://127.0.0.1:8000/api/motivo_inactividad/";
const ENDPOINT_PATH1 = "http://127.0.0.1:8000/api/estadio/";
export default {
  name: "mesesCalendario",
  data: function () {
    return {
      //meses: [],

      cantDias: [], // Array para almacenar la cantidad de dias que tiene cada mes
      meses: [], 
      nomDias: [], // array para el nombre de los dias de la semana
      dayjs,
      mesAnterior: 0,
      numeroMeses: new Array(3),
      fechaGuardar: "", // Var para almacenar la fecha del dia a inactivcar
      fechasInactivas: [], // Array con las fechas de inactividad para un estadio especifico

      // variables para la modal
      modal: 0,
      show: true,
      tituloModal: "", //titulo de la ventana modal, cambia si es para inactivar o activar el día
      mostrarFecha: "", // mostrar fecha del dia a inactivar
      motivoInactividadId: 0, // para guardar el id del motivo de inactividad
      motivosInactividad: [], // listar los motivos de inactividad
      inactiveMotive:"", //Mostrar el motivo de inactividad 
      errores: [], // errores del back
      mensaje: "", // var para guardar y mostrar el mensaje de seleccionar un motivo de inactividad
      existe: "", // Var para mostrar mensaje si existe ya un motivo con una fecha especifica
      inactive: false, 
      fechaEliminar:"",
    };
  },
  async created() {
    await this.iniciar();
  },
  computed: {
    idEstadio() {
      return this.$route.params.id;
    },
    countMonth() {
      return this.numeroMeses.length
    }
  },

  methods: {
    async iniciar() {
      await this.DiasInactivos();
      this.day();
    },

    diaSeleccionado(dia) {  
      const indice = this.fechasInactivas.findIndex(o => o.fecha == dia)
      return indice > -1
    },
    day() {
      const that = this
      //this.dias=dayjs('2022-01').daysInMonth();// devuelve cuantos dias tiene el mes actual
      //this.dias=dayjs().date(31) // obtiene o establece el dia del mes
      //console.log(this.dias);

      this.mesAnterior = dayjs().month() - 1;

      for (let index = 0; index < 7; index++) {
        this.nomDias.push(index);
      }
      //console.log(this.nomDias);
      for (let i = 0; i < 3; i++) {
        let yearMonth = dayjs().add(i, "month").format("YYYY-MM");
        this.numeroMeses[i] = yearMonth; // obtener los meses
        this.cantDias[i] = dayjs(yearMonth).daysInMonth(); // calcular cantidad de dias que tiene cada mes
        //console.log('dias',this.cantDias[i] );
        let dias = [];

        for (let j = 1; j <= this.cantDias[i]; j++) {
          // Condicional para agregar los ultimos dias del mes pasado
          if (j == 1) {
            const fecha = dayjs(
              `${this.numeroMeses[i]}-${j > 9 ? j : "0" + j}`
            ); // saber que dia cae el primer dia del mes

            let numeroDia = fecha.day(); // saber en que posición esta el primer dia del mes

            if (numeroDia > 0) {
              let diasPre = [];
              for (let index = numeroDia; index > 0; index--) {
                diasPre.push(fecha.subtract(index, "day").format("YYYY-MM-DD"));
              }
              //console.log({diasPre});
              dias = [...diasPre, ...dias];
            }
          }
          const daySelect =  dayjs(yearMonth).add(j - 1, "day").format("YYYY-MM-DD")
          const isSelect = that.diaSeleccionado(daySelect)
          dias.push({
            daySelect,
            isSelect
          });

          // Condicional para agregar los primeros dias del mes siguiente
          if (j == this.cantDias[i]) {
            const fecha = dayjs(
              `${this.numeroMeses[i]}-${j > 9 ? j : "0" + j}`
            ); // saber que dia cae el último dia del mes

            let numeroDia = fecha.day(); // saber en que posición esta el ultimo dia del mes

            if (numeroDia < 6) {
              let diasPost = [];
              let iteraciones = 6 - numeroDia;
              //console.log(iteraciones);
              for (let k = 1; k <= iteraciones; k++) {
                diasPost.push(fecha.add(k, "day").format("YYYY-MM-DD"));
              }
              //console.log({ diasPost });
              dias = [...dias, ...diasPost];
            }
          }
        }
        this.meses[i] = dias;
      }
      //console.log({ mes: this.meses });
      //console.log(this.dias);
    },
    async openModal(dia) {
      let day = null
      let isSelect = false
      if (typeof dia === 'object') {
        day = dia.daySelect
        isSelect = dia.isSelect
      } else {
        day = dia
      }
      this.modal = 1
      if (isSelect) {
        const dateInactive = this.fechasInactivas.find(o => o.fecha == day)
        console.log('hola', dateInactive);
        this.tituloModal="Dia inactivo";
        this.mostrarFecha= dayjs(dateInactive.fecha).locale("es").format("DD MMMM YYYY");
        //this.fechaEliminar=dateInactive.fecha;
        this.motivoInactividadId=dateInactive.id;        
        this.inactiveMotive= dateInactive.nombre_motivo;
        this.inactive=true;
      }else{
        //console.log(dia);
        this.inactive=false;
        this.tituloModal = "Inactivar día";
        this.mostrarFecha = dayjs(dia.daySelect).locale("es").format("DD MMMM YYYY");
        this.fechaGuardar = dayjs(dia.daySelect).format("YYYY-MM-DD");
        await this.listarMotivos();
      }
    },
    closeModal() {
      this.modal = 0;
      this.motivoInactividadId = 0;
      this.existe = "";
    },
    async listarMotivos() {
      try {
        const { data } = await axios.get(ENDPOINT_PATH + "motivos_inactividad");
        this.motivosInactividad = data.motivos_inactividad;
        if (!this.motivosInactividad) {
          console.log("no hay motivos de inactividad que mostrar");
        }
      } catch (error) {
        console.log(error);
      }
    },
    async DiasInactivos() {
      try {
        const { data } = await axios.get(
          ENDPOINT_PATH1 + "listar-dias-inactivos/" + this.idEstadio
        );
        this.fechasInactivas = data;
        //console.log("Dias inactivos: ", this.fechasInactivas);
      } catch (error) {
        console.log(error);
      }
    },
    async inactivarDia() {
      if (this.motivoInactividadId == 0) {
        this.mensaje =
          "Debe seleccionar un motivo para poder inactivar este día";
      } else {
        let payload = {
          estadio_id: this.idEstadio,
          motivo_inactividad_id: this.motivoInactividadId,
          fecha: this.fechaGuardar,
        };
        //console.log(payload);
        const { data } = await axios.post(
          ENDPOINT_PATH1 + "inactivar-dia-estadio",
          payload
        );
        this.motivoInactividadEstadio = data;
        console.log(this.motivoInactividadEstadio);
        if (this.motivoInactividadEstadio.exist == true) {
          this.existe = this.motivoInactividadEstadio.message;
        } else {
          if (this.motivoInactividadEstadio.success == true) {
            this.closeModal();
            this.motivoInactividadId = 0;   
            this.nomDias=[];         
            this.iniciar();
            
          } else {
            this.motivoInactividadEstadio.error;
          }
        }
      }
    },
    async activarDia(){
      /* let payload={
        estadioId:this.idEstadio,
        motivoInactividad_id:this.motivoInactividadId,
        fechaEliminar:this.fechaEliminar
      }; */
      //console.log(payload);
      const {data}  = await axios.delete(ENDPOINT_PATH1+'habilitar-dia-inactivo/'+ this.motivoInactividadId)
      this.motivoInactividadEstadio = data.delete;

      if (this.motivoInactividadEstadio==true) {
            this.closeModal();
            this.motivoInactividadId = 0; 
            this.nomDias=[];         
            this.iniciar();
      }else{
        console.log('paiman');
      }

    }
  },
};
</script>

<style scoped>
/* estilo modal */
.show {
  display: list-item;
  opacity: 1;
  background: rgba(168, 167, 172, 0.6);
}
.fechaSeleccionada {
  font-family: "Gilroy";
  font-weight: bold;
  font-size: 25px;
  color: #000000;
  border: none;
  outline: none;
}
.p-motivo {
  width: 100%;
  height: 15px;
  margin-top: 22px;
  margin-bottom: 3px;
  font-family: "Rubik";
  font-size: 13px;
  letter-spacing: 0px;
  color: #637381;
}
.select-motivo {
  width: 100%;
  height: 40px;
  background: #ffffff 0% 0% no-repeat padding-box;
  border: 1px solid #dfe4e8;
  border-radius: 8px;
  opacity: 1;
}
.btn-cerrar,
.btn-inactivar {
  width: 6em;
  height: 40px;
  font-family: "Gilroy";
  font-size: 15px;
  border-radius: 12px;
}
.btn-activar{
  width: 28%;
  height: 40px;
  font-family: "Gilroy";
  font-size: 15px;
  border-radius: 12px;
}
.btn-cerrar {
  background: #f0f1ff 0% 0% no-repeat padding-box;
  color: #3c2ea8;
}
.btn-inactivar, .btn-activar {
  font-weight: bold;
  background: transparent linear-gradient(90deg, #7358fa 0%, #866ff7 100%) 0% 0%
    no-repeat padding-box;
  color: #ffffff;
}
.inactive-motive{
  font-family: "GilroyB";
  font-size: 28px;
  color: #7358FA;
}
/* Estilos para calendario */
.calendario {
  text-align: center;
}
ol {
  list-style: none;
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  padding: 0;
}
li {
  text-align: center;
}

.dias {
  width: 100%;
  height: 50px;
  background: #f2f2f2;
  font-family: Arial;
  font-size: 18px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}
.dia-nombre {
  width: 100%;
  height: 50px;
  background: #ebebeb;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: Arial;
  font-weight: bold;
  font-size: 18px;
}
.otro-mes {
  width: 100%;
  height: 50px;
  background: #f2f2f2;
  font-family: Arial;
  font-weight: bold;
  font-size: 18px;
  color: #aaaaaa;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: not-allowed;
  pointer-events: none;
}
.dia--selected {
  color: white;
  background-color: #7358fa;
  border-radius: 50%;
  border: 2px solid #7358fa;
  box-shadow: 0 0 0 2px var(--color-bg-calendar) inset;
}
.mes-nombre {
  background: #7358fa;
  width: 100%;
  font-family: Arial;
  font-size: 27px;
  margin: 0em;
  color: #ebebeb;
}
.meses {
  display: block;
  padding: auto;
  width: 350px;
}
</style>
