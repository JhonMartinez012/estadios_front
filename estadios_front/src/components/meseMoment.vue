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
          <div class="grid__body col-md-4 col-sm-6 p-0">
            <!-- <span
              class="grid__cell grid__cell--gh"
              v-for="(dia, index) in dias"
              :key="index"
              >{{ dia }}</span            > -->
          </div>
        </div>
      </div>
    </div>

    <!--  <div class="calendar" id="calendar2">

        </div> -->
  </div>
</template>

<script>
import moment from "moment";
export default {
  mounted() {
    //this.diasMes();
    //this.generateDates(moment());
    this.init(); 
    
    
  },
  data() {
    return {
      dias: [],
      cells: [],
      currentMonth: moment(),
      elGridBody:"",
      elMonthDay:"",
      fechaSeleccionada:null,
    };
  },
  methods: {
    async init(){
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

    async gridBody(){
      this.elGridBody= await document.querySelector(".grid__body")
    },
    async monthDay(){
      this.elMonthDay = document.querySelector(".mes-nombre")
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
      this.elMonthDay.innerHTML = this.currentMonth.locale('es').format('MMMM YYYY');
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
      //encintrar ultima fecha que se mostrara en el calaendario
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
       let elCells = document.getElementById('calendario').querySelectorAll('.grid__cell--gh');
        elCells.forEach(elCell => {
            elCell.addEventListener('click', e => {
                let elTarget = e.target;
                if (elTarget.classList.contains('grid__cell--disabled') || elTarget.classList.contains('grid__cell--selected')) {
                    return;
                }
                // Deselecionar la celda anterior
                let selectedCell = this.elGridBody.querySelector('.grid__cell--selected');
                if (selectedCell) {
                    selectedCell.classList.remove('grid__cell--selected');
                }
                
                // Selecionar la nueva celda
                elTarget.classList.add('grid__cell--selected');
                this.fechaSeleccionada = this.cells[parseInt(elTarget.dataset.cellId)].date;
                console.log(this.fechaSeleccionada.format('LLL'));
                // Lanzar evento change
                //this.elCalendar.dispatchEvent(new Event('change'));
            });
        });
    },
    value(){
      return this.fechaSeleccionada;
    }
  },
};
</script>

<style>
.calendario {
  text-align: center;
  width: 100%;
}
.control {
  color: white;
  font-weight: bold;
  background-color: transparent;
  border: none;
  cursor: pointer;
  padding: 0 5px;
}
.meses {
  background: #7358fa;
  padding: auto;
  width: 100%;
  color: white;
  display: flex;
  justify-content: space-between;
  text-transform: uppercase;
}

.mes-nombre {
  font-family: Arial;
  font-size: 27px;
  margin: 0em;
  color: #ebebeb;
}
.grid__header,
.grid__body {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  width: 100%;
  height: 50px;

  justify-content: center;
  align-items: center;
  font-family: Arial;

  font-size: 18px;
}
.grid__header {
  background: #ebebeb;
  font-weight: bold;
}

.grid__cell,
.grid__cell--disabled {
  width: 100%;
  height: 50px;
  background: #f2f2f2;
  font-family: Arial;
  font-weight: bold;
  font-size: 18px;
}

.grid__cell {
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}
.grid__cell--disabled {
  color: #aaaaaa;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: not-allowed;
}
.grid__cell--selected {
    color: white;
    background-color: #7358fa;
    border-radius: 50%;
    border: 2px solid #7358fa;
    box-shadow: 0 0 0 2px var(--color-bg-calendar) inset;
}
</style>
