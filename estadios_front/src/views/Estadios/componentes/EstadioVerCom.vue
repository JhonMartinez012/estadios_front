<template>
  <div class="container-fluid">
    <!-- INICIO DE LA MODAL -->
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
            <h5 class="modal-title" id="exampleModalLabel">Eliminar Estadio</h5>
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
            <p>¿Desea eliminar este estadio?</p>
          </div>
          <div class="modal-footer d-flex justify-content-center">
            <button
              type="button"
              class="btn btn-secondary"
              data-dismiss="modal"
            >
              Cerrar
            </button>
            <button type="button" class="btn boton-eliminar-estadio">
              Eliminar
            </button>
          </div>
        </div>
      </div>
    </div>
    <!--  FIN DEL MODAL PARA ELIMINAR -->

    <div class="container-fluid ml-0 mt-5 d-flex align-items-center">
      <div class="container-fluid">
        <label class="titulo_estadio w-100">{{estadio.nombre_estadio}}</label>
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
        >
          <img
            src="/assets/1. Estadios/Iconos/icon - Editar.svg"
            alt=""
            srcset=""
          />
        </button>
        <button
          class="btn boton-accion"
          data-toggle="tooltip"
          title="Eliminar"
          data-placement="bottom"
        >
          <img
            src="/assets/1. Estadios/Iconos/icon - Eliminar.svg"
            alt=""
            srcset=""
            data-toggle="modal"
            data-target="#exampleModal"
          />
        </button>
      </div>
    </div>
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-6">
          <div class="col-md-12">
            <!--  <vueper-slides
              id="slider1"
              class="slide"
              ref="vueperslides1"
              :touchable="false"
              fade
              :autoplay="false"
              :bullets="false"
              @slide="
                $refs.vueperslides2.goToSlide($event.currentSlide.index, {
                  emit: false,
                })
              "
              fixed-height="400px"
            >
              <vueper-slide
                v-for="(slide, i) in slides"
                :key="i"
                :image="slide.image"
              >
              </vueper-slide>
            </vueper-slides> -->
            <image-slider
              class="h-100"
              :imagenPrincipal="slides[0].image"
              :imagenesSecundarias="slides"
            />
          </div>
        </div>

        <div class="col-md-6">
          <div class="container">
            <label class="titulo_pais w-100">{{estadio.nombre}}, {{estadio.nom_pais}} </label>
            <div class="d-flex">
              <div class="linea_1"></div>
              <div class="linea_2"></div>
            </div>
            <label class="titulo_acerca w-100">Acerca </label>
            <label class="descripcion_acerca w-100"
              >{{estadio.acerca_estadio}}
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
  created() {
    this.verEstadio();
  },
  props:{
    nombre_estadio:String,
  },
  components: {
    //VueperSlides,
    //VueperSlide,
    ImageSlider,
  },
  data: () => ({
    estadio: {},
    slides: [
      {
        image:
          "/assets/1. Estadios/Imágenes de estadios/1.1 wembley-stadium.jpg",
        active: false,
      },
      {
        image:
          "/assets/1. Estadios/Imágenes de estadios/1.2 wembley-stadium.jpg",
        active: false,
      },
      {
        image:
          "/assets/1. Estadios/Imágenes de estadios/1.3 wembley-stadium.jpg",
        active: false,
      },
    ],
  }),
  methods: {
    async editarEstadio() {
      this.$router.push({ name: "EstadiosEditar", params:{id:this.$route.params.id}});
    },
    async verEstadio() {
      try {
        const { data } = await axios.get(
          ENDPOINT_PATH + "ver_estadio/" + this.$route.params.id,
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: "Bearer " + localStorage.getItem("access_token"),
            },
          }
        );
        this.estadio = data;
        this.$emit('resultado',this.estadio)
        //console.log(this.estadio);
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>

<style scoped>
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
