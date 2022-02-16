<template>
  <div class="root">
    <div class="calendario" id="calendario">
      <div class="meses col-md-4 col-sm-6">
        <button type="button" class="control control--prev">&lt;</button>
        <label class="mes-nombre">Enero 2022</label>
        <button type="button" class="control control--next">&gt;</button>
      </div>

      <div class="calendar__body mt-0">
        <div class="grid">
          <div class="grid__header col-md-4 col-sm-6 p-0">
            <span class="grid__cell grid__cell--gh">L</span>
            <span class="grid__cell grid__cell--gh">M</span>
            <span class="grid__cell grid__cell--gh">M</span>
            <span class="grid__cell grid__cell--gh">J</span>
            <span class="grid__cell grid__cell--gh">V</span>
            <span class="grid__cell grid__cell--gh">S</span>
            <span class="grid__cell grid__cell--gh">D</span>
          </div>
          <div class="grid__body col-md-4 col-sm-6 p-0"></div>
        </div>
      </div>
    </div>

    <!--  <div class="calendar" id="calendar2">

        </div> -->

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
                      class="fechaSeleccionada text-center"
                      v-model="mostrarFecha"
                      disabled
                    />
                  </div>
                  <div class="row w-100 justify-content-center">
                    <div class="col-10">
                      <p for="" class="p-motivo">Motivo inactividad</p>
                      <select
                        v-model="motivoInactividadId"
                        class="select-motivo"
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
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="modal-footer justify-content-center">
            <button
              v-if="tituloModal != true"
              type="button"
              class="btn btn-cerrar"
              data-dismiss="modal"
              @click="closeModal()"
            >
              Cerrar
            </button>
            <button
              v-if="tituloModal != true"
              type="button"
              class="btn btn-inactivar"
              data-dismiss="modal"
              @click="inactivarDia()"
            >
              Inactivar
            </button>
          </div>
        </div>
      </div>
    </div>
    <!-- ******* FIN DE LA MODAL PARA LOS MOTIVOS DE INACTIVIDAD ******** -->
  </div>
</template>

<script>
import moment from "moment";
import axios from "axios";
const ENDPOINT_PATH = "http://127.0.0.1:8000/api/motivo_inactividad/";
const ENDPOINT_PATH1 = "http://127.0.0.1:8000/api/estadio/";
export default {
  name: "calendarioMoment",
  mounted() {
    //this.diasMes();
    //this.generateDates(moment());
    this.init();
  },
  computed: {
    idEstadio() {
      return this.$route.params.id;
    },
  },
  data() {
    return {
      dias: [],
      cells: [],
      currentMonth: moment(), // para agregar  un mes .add(1,'month')
      elGridBody: "",
      elMonthDay: "",
      fechaSeleccionada: null,

      // variables para la modal
      modal: 0,
      show: true,
      tituloModal: "",
      mostrarFecha: "",
      motivoInactividadId: 0,
      motivosInactividad: [],
    };
  },
  
  methods: {
    async init() {
      await this.gridBody();
      await this.addEventListenerToControls();
      await this.monthDay();
      await this.showCells();
    },
    /* currentDateTime() {
      return moment().format("MMMM YYYY");
    }, */
    /* diasMes() {
      for (let index = 1; index < 36; index++) {
        this.dias.push(index);
      }
      console.log(this.dias);
    }, */

    async gridBody() {
      this.elGridBody = await document.querySelector(".grid__body");
    },
    async monthDay() {
      this.elMonthDay = document.querySelector(".mes-nombre");
    },

    //funcion para cambiar los meses del calendario
    addEventListenerToControls() {
      let elControls = document
        .getElementById("calendario")
        .querySelectorAll(".control");
      elControls.forEach((elControl) => {
        elControl.addEventListener("click", (e) => {
          let elTarget = e.target;
          if (elTarget.classList.contains("control--next")) {
            this.cambiarMes(true);
          } else {
            this.cambiarMes(false);
          }
          this.showCells();
        });
      });
      //console.log(elControls);
    },

    cambiarMes(next = true) {
      if (next) {
        this.currentMonth.add(1, "months");
      } else {
        this.currentMonth.subtract(1, "months");
      }
    },

    async showCells() {
      this.cells = await this.generateDates(this.currentMonth);
      //console.log(this.cells);
      if (this.cells == null) {
        console.log("No se pudo generar las fechas del calendario");
        return;
      }
      this.elGridBody.innerHTML = "";
      let templateCells = "";
      let claseDisabled = "";

      for (let index = 0; index < this.cells.length; index++) {
        claseDisabled = "";
        if (!this.cells[index].isInCurrentMonth) {
          claseDisabled = "grid__cell--disabled";
        }

        templateCells += `<span class="grid__cell grid__cell--gh ${claseDisabled}" data-cell-id="${index}">
          ${this.cells[index].date.date()}
        </span>`;
      }
      this.elMonthDay.innerHTML = this.currentMonth
        .locale("es")
        .format("MMMM YYYY");
      this.elGridBody.innerHTML = templateCells;
      this.addEventListenerToCells();
    },

    generateDates(monthToShow = moment()) {
      if (!moment.isMoment(monthToShow)) {
        return null;
      }
      let dateStart = moment(monthToShow).startOf("month");
      let dateEnd = moment(monthToShow).endOf("month");
      let cells = [];
      // Encontrar la primera fecha a mostrar en el calendario
      while (dateStart.day() !== 1) {
        dateStart.subtract(1, "days");
      }
      //encontrar ultima fecha que se mostrara en el calaendario
      while (dateEnd.day() !== 0) {
        dateEnd.add(1, "days");
      }
      //console.log(dateStart, dateEnd);

      // Genera las fechas para el calendario
      do {
        cells.push({
          date: moment(dateStart),
          isInCurrentMonth: dateStart.month() === monthToShow.month(),
        });
        dateStart.add(1, "days");
      } while (dateStart.isSameOrBefore(dateEnd));

      //console.log(cells);
      return cells;
    },

    addEventListenerToCells() {
      let elCells = document
        .getElementById("calendario")
        .querySelectorAll(".grid__cell--gh");
      elCells.forEach((elCell) => {
        elCell.addEventListener("click", (e) => {
          let elTarget = e.target;

          if (
            elTarget.classList.contains("grid__cell--disabled") ||
            elTarget.classList.contains("grid__cell--selected")
          ) {
            return;
          }

          if (elTarget) {
            this.fechaSeleccionada =
              this.cells[parseInt(elTarget.dataset.cellId)].date;

            this.openModal();
          }
          /* 
                // Deselecionar la celda anterior
                let selectedCell = this.elGridBody.querySelector('.grid__cell--selected');
                if (selectedCell) {
                    selectedCell.classList.remove('grid__cell--selected');
                }
                
                // Selecionar la nueva celda
                elTarget.classList.add('grid__cell--selected');
                this.fechaSeleccionada = this.cells[parseInt(elTarget.dataset.cellId)].date;
                console.log(this.fechaSeleccionada.locale('es').format('LLL'));
                // Lanzar evento change
                //this.elCalendar.dispatchEvent(new Event('change')); */
        });
      });
    },
    value() {
      return this.fechaSeleccionada;
    },
    async listarMotivos() {
      try {
        const { data } = await axios.get(ENDPOINT_PATH + "motivos_inactividad");
        this.motivosInactividad = data.motivos_inactividad;
        if (!this.motivosInactividad) {
          console.log("no hay motivos de inactividad que mostrar");
        }
        console.log(this.motivosInactividad);
      } catch (error) {
        console.log(error);
      }
    },

    async inactivarDia(){
      if (this.motivoInactividadId == 0) {
        this.fechaSeleccionada;
        console.log('Debe seleccionar un motivo', this.fechaSeleccionada._d);
       }else{
         let payload = {
          estadio_id : this.idEstadio,
          motivo_inactividad_id:this.motivoInactividadId,
          fecha:this.fechaSeleccionada.locale('es').format('YYYY-MM-DD')
         }
         const {data}= await axios.post(ENDPOINT_PATH1+"inactivar-dia-estadio", payload);
         this.motivoInactividadEstadio=data;

         console.log(this.fechaSeleccionada.locale('es').format('YYYY-MM-DD'), this.idEstadio, this.motivoInactividadId);
         this.closeModal(); 
         this.motivoInactividadId=0;
       }
    },


    async openModal() {
      this.modal = 1;
      this.tituloModal = "Inactivar día";
      this.mostrarFecha = this.fechaSeleccionada.locale("es").format("DD-MMMM-YYYY");
      await this.listarMotivos();
    },
    closeModal() {
      this.modal = 0;
    },
  }
};
</script>

<style scoped>
.show {
  /* estilo modal */
  display: list-item;
  opacity: 1;
  background: rgba(168, 167, 172, 0.6);
}
.fechaSeleccionada:disabled {
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
  margin-left: 10px;
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

.btn-cerrar {
  background: #f0f1ff 0% 0% no-repeat padding-box;
  color: #3c2ea8;
}

.btn-inactivar {
  font-weight: bold;
  background: transparent linear-gradient(90deg, #7358FA 0%, #866FF7 100%) 0% 0% no-repeat padding-box;
  color: #FFFFFF;
}
</style>
