<template>
  <div class="container-fluid">
    <!-- Modal para inactivar dia -->
    <div class="modal" :class="{ show: modal }">
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">Inactivar día</h5>
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
                <div class="col-md-12 d-flex ml-5">
                  <label for="" class="label-fecha"> 30 Enero 2022</label>
                </div>
              </div>
              <div class="form-row">
                <p for="" class="p-motivo">Motivo de inactividad</p>
                <div class="form-group col-md-12 text-center">
                  <select
                    v-model="motivoInactividad"
                    class="select-motivo"
                    name=""
                    id=""
                  >
                    <option :value="0">Seleccionar</option>
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
          <div class="modal-footer justify-content-center">
            <button
              type="button"
              class="btn btn-cerrar"
              data-dismiss="modal"
              @click="closeModal()"
            >
              Cerrar
            </button>
            <button type="button" class="btn btn-guardar" @click="inactivarDia">
              Inactivar
            </button>
          </div>
        </div>
      </div>
    </div>
    <!-- ******* FIN DE LA MODAL PARA INACTIVAR DIA ******** -->    
    <h2 class="bold mb-2">Motivos de inactividad</h2>    
    
      <meses />
     <!--  <mesesMoment /> -->
      

      <!-- <div class="meses col-md-4 col-sm-6">
        <label class="mes-nombre">Marzo 2022</label>
        <ol>
          <li class="dia-nombre">L</li>
          <li class="dia-nombre">M</li>
          <li class="dia-nombre">M</li>
          <li class="dia-nombre">J</li>
          <li class="dia-nombre">V</li>
          <li class="dia-nombre">S</li>
          <li class="dia-nombre">D</li>

          <li class="otro-mes">28</li>
          <li class="dias">1</li>
          <li class="dias">2</li>
          <li class="dias">3</li>
          <li class="dias">4</li>
          <li class="dias">5</li>
          <li class="dias">6</li>
          <li class="dias">7</li>
          <li class="dias">8</li>
          <li class="dias">9</li>
          <li class="dias">10</li>
          <li class="dias">11</li>
          <li class="dias">12</li>
          <li class="dias">13</li>
          <li class="dias">14</li>
          <li class="dias">15</li>
          <li class="dias">16</li>
          <li class="dias">17</li>
          <li class="dias">18</li>
          <li class="dias">19</li>
          <li class="dias">20</li>
          <li class="dias">21</li>
          <li class="dias">22</li>
          <li class="dias">23</li>
          <li class="dias">24</li>
          <li class="dias">25</li>
          <li class="dias">26</li>
          <li class="dias">27</li>
          <li class="dias">28</li>
          <li class="dias">29</li>
          <li class="dias">30</li>
          <li class="dias">31</li>
          <li class="otro-mes">1</li>
          <li class="otro-mes">2</li>
          <li class="otro-mes">3</li>
          <li class="otro-mes">4</li>
          <li class="otro-mes">5</li>
          <li class="otro-mes">6</li>
          <li class="otro-mes">7</li>
          <li class="otro-mes">8</li>
          <li class="otro-mes">9</li>
          <li class="otro-mes">10</li>
        </ol>
      </div>
      <div class="meses col-md-4 col-sm-6">
        <label class="mes-nombre">Abril 2022</label>
        <ol>
          <li class="dia-nombre">L</li>
          <li class="dia-nombre">M</li>
          <li class="dia-nombre">M</li>
          <li class="dia-nombre">J</li>
          <li class="dia-nombre">V</li>
          <li class="dia-nombre">S</li>
          <li class="dia-nombre">D</li>

          <li class="otro-mes">28</li>
          <li class="otro-mes">29</li>
          <li class="otro-mes">30</li>
          <li class="otro-mes">31</li>
          <li class="dias">1</li>
          <li class="dias">2</li>
          <li class="dias">3</li>
          <li class="dias">4</li>
          <li class="dias">5</li>
          <li class="dias">6</li>
          <li class="dias">7</li>
          <li class="dias">8</li>
          <li class="dias">9</li>
          <li class="dias">10</li>
          <li class="dias">11</li>
          <li class="dias">12</li>
          <li class="dias">13</li>
          <li class="dias">14</li>
          <li class="dias">15</li>
          <li class="dias">16</li>
          <li class="dias">17</li>
          <li class="dias">18</li>
          <li class="dias">19</li>
          <li class="dias">20</li>
          <li class="dias">21</li>
          <li class="dias">22</li>
          <li class="dias">23</li>
          <li class="dias">24</li>
          <li class="dias">25</li>
          <li class="dias">26</li>
          <li class="dias">27</li>
          <li class="dias">28</li>
          <li class="dias">29</li>
          <li class="dias">30</li>
          <li class="otro-mes">1</li>
        </ol>
      </div> -->
    
  </div>
</template>

<script>
import axios from "axios";
import meses from "../../../components/meses.vue"
//import mesesMoment from "../../../components/meseMoment.vue"
const END_POINT = "http://127.0.0.1:8000/api/motivo_inactividad/";
export default {
  name:"calendarioEstadio",
  created() {
    this.listMotivosInactividad();
  },
  data: function () {
    return {
      motivosInactividad: [],
      show: 0,
      modal: 0,
      motivoInactividad: 0,
    };
  },
  components:{
    meses,
    //mesesMoment,
  },
  methods: {
    async listMotivosInactividad() {
      try {
        const motivo = await axios.get(END_POINT + "motivos-inactividad");
        this.motivosInactividad = motivo.data.motivos_inactividad;
        //console.log(this.motivosInactividad);
      } catch (error) {
        console.log(error);
      }
    },
    inactivarDia() {
      let payload={
        motivo:this.motivoInactividad,
      }
      console.log(payload);
      console.log("inactivar dia");
    },
    openModal() {
      this.modal = 1;
    },
    closeModal() {
      this.modal = 0;
    },
  },
};
</script>

<style scoped>
/* Estilos para la modal */
.show {
  display: list-item;
  opacity: 1;
  background: rgba(168, 167, 172, 0.6);
}
.label-fecha{
  height: 35px;
  font-family: "Gilroy";
  font-weight: bold;
  font-size: 28px;
  color: #000000;

}
.p-motivo {
  width: 100%;
  height: 15px;
  margin-top: 22px;
  margin-bottom: 10px;
  margin-left: 60px;
  font-family: "Rubik";
  font-size: 13px;
  letter-spacing: 0px;
  color: #637381;
}
.select-motivo {
  width: 80%;
  height: 40px;
  background: #ffffff 0% 0% no-repeat padding-box;
  border: 1px solid #dfe4e8;
  border-radius: 8px;
  opacity: 1;
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
  width: 90px;
  height: 40px;
  background: transparent linear-gradient(90deg, #7358fa 0%, #866ff7 100%) 0% 0%
    no-repeat padding-box;
  box-shadow: 0px 3px 6px #866ff766;
  border-radius: 12px;
  color: #fff;
}
/* ********* Fin estilos modal ************* */

</style>
