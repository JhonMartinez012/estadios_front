<template>
  <div class="row calendario">
    <div
      v-for="(mes, index) in meses"
      :key="`mes-${index}`"
      class="meses col-md-4 col-sm-6"
    >
      <label class="mes-nombre">{{
        dayjs(dayjs().month(index).locale("es")).format("MMMM YYYY") ||
        "Sin titulo"
      }}</label>
      <ol>
        <li class="dia-nombre" v-for="(nom, index) in nomDias"  :key="`nombrDia-${index}`">
          {{ dayjs(dayjs().day(index).locale("es")).format("dd") }}
        </li>
        <li class="dias" v-for="(dia, index) in mes" :key="`dias-${index}`">
          {{ dia }}
        </li>
      </ol>
    </div>
  </div>
</template>

<script>
import dayjs from "dayjs";
import "dayjs/locale/es";
export default {
  name: "mesesCalendario",
  data: function () {
    return {
      //meses: [],
      anno: 0,
      cantDias: [],
      meses: [],
      nomDias: [],
      dayjs,
      mesAnterior: 0,
     
    };
  },
  created() {
    this.day();
  },

  methods: {
    day() {
      //this.dias=dayjs('2022-01').daysInMonth();// devuelve cuantos dias tiene el mes actual
      //this.dias=dayjs().date(31) // obtiene o establece el dia del mes
      //console.log(this.dias);
      this.mesAnterior = dayjs().month() - 1;

      for (let index = 0; index < 7; index++) {
        this.nomDias.push(index);
      }
      //console.log(this.nomDias);

      for (let i = 0; i < 3; i++) {
        
        this.cantDias[i] = dayjs("2022-0" + (i + 1)).daysInMonth();
       
        let dias = [];
        for (let j = 1; j <= this.cantDias[i]; j++) {
          dias.push(j);
        
        }
        this.meses[i] = dias;
      }
      //console.log({ mes: this.meses });
      //console.log(this.dias);
    },
  },
};
</script>

<style scoped>
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
