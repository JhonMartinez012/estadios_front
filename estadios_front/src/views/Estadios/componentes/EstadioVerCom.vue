<template>
  <div class="container-fluid">
    <!-- INICIO DE LA MODAL -->
    <div
      class="modal"
      :class="{show: modal}"
      id="exampleModal"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">Eliminar Estadio</h5>
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
          <div class="modal-body text-center">
            <p>¿Desea eliminar este estadio?</p>
          </div>
          <div class="modal-footer d-flex justify-content-center">
            <button
              type="button"
              class="btn btn-secondary"
              data-dismiss="modal"
              @click="closeModal()"
            >
              Cerrar
            </button>
            <button
              type="button"
              class="btn boton-eliminar-estadio"
              @click="eliminarEstadio(estadio.idEstadio)"
            >
              Eliminar
            </button>
          </div>
        </div>
      </div>
    </div>
    <!--  FIN DEL MODAL PARA ELIMINAR -->

    <div class="container-fluid ml-0 mt-5 d-flex align-items-center">
      <div class="container-fluid">
        <label class="titulo_estadio w-100">{{ estadio.nombre_estadio }}</label>
        <div class="d-flex">
          <div class="lineaT_1"></div>
          <div class="lineaT_2"></div>
        </div>
      </div>

      <div class="container-fluid d-flex" style="justify-content: center">
        <button
          class="btn boton-accion mr-2"
          @click="editarEstadio"
          data-toggle="tooltip"
          title="Editar"
          data-placement="bottom"
          id="boton"
        >
          <img
            src="/assets/1. Estadios/Iconos/icon - editar.svg"
            alt=""
            srcset=""
          />
        </button>
        <button
          class="btn boton-accion"
          data-toggle="tooltip"
          title="Eliminar"
          data-placement="bottom"
          @click="openModal()"
        >
          <img
            src="/assets/1. Estadios/Iconos/icon - Eliminar.svg"
            alt=""
            srcset=""            
          />
        </button>
      </div>
    </div>
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-6">
          <div class="col-md-12">
            <image-slider
              class="h-100"
              :propimagenPrincipal="estadio.img_principal"
              :imagenTerreno="estadio.img"
              :imagenesSecundarias="fotosSecundarias"
              :capacidad="estadio.capacidad_estadio"
            />
          </div>
        </div>

        <div class="col-md-6">
          <div class="container">
            <label class="titulo_pais w-100"
              >{{ estadio.nombre }}, {{ estadio.nom_pais }}
            </label>
            <div class="d-flex">
              <div class="linea_1"></div>
              <div class="linea_2"></div>
            </div>
            <label class="titulo_acerca w-100">Acerca </label>
            <label class="descripcion_acerca w-100"
              >{{ estadio.acerca_estadio }}
            </label>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
//import { VueperSlides, VueperSlide } from "vueperslides";
import axios from "axios";
const ENDPOINT_PATH = "http://127.0.0.1:8000/api/estadio/";
import "vueperslides/dist/vueperslides.css";
import ImageSlider from "../../../components/imageSlider.vue";
export default {
  name: "infoEstadio",
  created() {
    this.verEstadio();
    this.listarImagenesSecundarias();
  },
  props: {
    nombre_estadio: String,
  },
   updated() {
    $('[data-toggle="tooltip"]').tooltip({
      trigger: "hover",
    });
    $("#boton").click(function () {
      $('[data-toggle="tooltip"], .tooltip').tooltip("hide");
    });
  },
  components: {
    ImageSlider,
  },
  data: () => ({
    estadio: [],
    fotosSecundarias: [],
    estadioEliminado:[],
    modal:0,
    show:true
  }),
  computed: {
    idEstadio() {
      return this.$route.params.id;
    },
  },
  methods: {
    async editarEstadio() {
      this.$router.push({
        name: "EstadiosEditar",
        params: { id: this.idEstadio },
      });
    },
    async verEstadio() {
      try {
        const { data } = await axios.get(
          ENDPOINT_PATH + "ver-estadio/" + this.idEstadio
        );
        this.estadio = data;
        //console.log(this.estadio.estadio);

        if (this.estadio.success == true) {
          this.estadio = data.estadio;
          this.$emit("resultado", this.estadio);
        } else if (this.estadio.success == false) {
          this.estadio = data;
          this.$emit("resultado", this.estadio);
        }
        //console.log(this.estadio);
      } catch (error) {
        console.log(error);
      }
    },
    async listarImagenesSecundarias() {
      try {
        const { data } = await axios.get(
          ENDPOINT_PATH + "imagenes-secundarias/" + this.idEstadio
        );
        this.fotosSecundarias = data;
        if (this.fotosSecundarias.success == false) {
          console.log("no existen imagenes relacionadas");
        } else {
          this.fotosSecundarias = data.imagenesSecundarias;
        }
        //console.log(this.fotosSecundarias);
      } catch (error) {
        console.log(error);
      }
    },
    async eliminarEstadio(idEstadio) {
      const {data} = await axios.delete(ENDPOINT_PATH+"eliminar-estadio/"+idEstadio);
      this.estadioEliminado=data.delete;
      if (this.estadioEliminado==true) {
        this.closeModal()
        this.$router.push({name:'Estadios'})
      }
      
    },
    openModal() {
      this.modal = 1;
    },
    closeModal(){
      this.modal = 0;
    }
  },
};
</script>

<style scoped>
.show {
  display: list-item;
  opacity: 1;
  background: rgba(168, 167, 172, 0.6);
}
/* Estilos para el slider de imagenes */
.slider1 {
  height: 30rem;
}
.slide {
  border-radius: 55px;
}
.vueperslides--fixed-height .vueperslide,
.vueperslides--fixed-height .vueperslides__inner,
.vueperslides--fixed-height .vueperslides__parallax-wrapper {
  height: inherit;
  border-radius: 55px;
}
.thumbnails {
  margin: auto;
  max-width: 300px;
}

.thumbnails .vueperslide {
  border-radius: 20px;
  box-sizing: border-box;
  border: 1px solid #fff;
  transition: 0.3s ease-in-out;
  opacity: 0.7;
  cursor: pointer;
}

.thumbnails .vueperslide--active {
  box-shadow: 0 0 6px rgba(239, 238, 245, 0.3);
  opacity: 1;
  border-color: rgb(115, 88, 250);
}

/* ****************  Fin  *********** */

.titulo_estadio,
.titulo_pais,
.titulo_acerca,
.descripcion_acerca {
  font-family: "Gilroy";
}
.titulo_estadio {
  font-weight: bold;
  font-size: 70px;
}
.titulo_pais {
  font-size: 30px;
}
.titulo_acerca {
  font-weight: bold;
  font-size: 30px;
}
.descripcion_acerca {
  font-size: 18px;
}

.lineaT_1 {
  width: 200px;
  height: 5px;
  background: #ffd53d;
  border-radius: 100px;
  margin-top: -20px;
  margin-bottom: 10px;
}

.lineaT_2 {
  width: 15px;
  height: 5px;
  margin-left: 5px;
  background: #ffd53d;
  border-radius: 100px;
  margin-top: -20px;
  margin-bottom: 10px;
}

.linea_1 {
  width: 200px;
  height: 5px;
  background: #7358fa;
  border-radius: 100px;
  margin-bottom: 15px;
}

.linea_2 {
  width: 15px;
  height: 5px;
  margin-left: 5px;
  background: #7358fa;
  border-radius: 100px;
  margin-bottom: 15px;
}

.boton-accion {
  width: 40px;
  height: 40px;
  margin-left: 0px;
  background: #755bfa 0% 0% no-repeat padding-box;
  background-position: center center;
  border-radius: 12px;
  display: flex;

  align-items: center;
  justify-content: center;
}

.boton-eliminar-estadio {
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

.boton-eliminar-estadio:hover {
  box-shadow: 0 2px 8px 0 rgba(115, 88, 250, 0.4),
    0 10px 30px 0 rgba(134, 111, 247, 0.19);
  color: #fff;
  text-decoration-line: none;
}
</style>
