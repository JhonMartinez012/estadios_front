<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-md-10">
        <div class="card-image">
          <img
            class="img-principal br-5"
            :src="propimagenPrincipal"
            alt=""
            srcset=""
            style=""
          />
          <div class="card-action">
            <img
              :src="imagenTerreno"
              width="90px"
              height="70px"
              alt=""
              srcset=""
            />
          </div>
        </div>
        <div class="card-text">
          <img
            class="icon_espectador"
            src="/assets/1. Estadios/Iconos/icon - espectadores.svg"
            alt=""
            srcset=""
          /><label class="espectadores_cant">{{ capacidad }}</label>
        </div>
      </div>
      
      <div class="col-md-2 cont-img-secundarias">        
      <router-link to=""><i class="fas fa-chevron-up"></i></router-link>
        <figure
          v-for="(imagenSecundaria, index) in imagenesSecundarias"
          :key="index"
        >
          <img
            class="img-secundaria d-block"
            :src="imagenSecundaria.ruta_img"
            alt=""
            @click="cambiarImagenPrincipal(imagenSecundaria)"
            style=""
          />
        </figure>        
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    propimagenPrincipal: {
      type: String,
      default: "",
    },
    imagenesSecundarias: {
      type: Array,
      default: () => [],
    },
    imagenTerreno: {
      type: String,
      default: "/assets/1. Estadios/Terrenos de juego/1. gramilla.jpg",
    },
    capacidad: {
      type: String,
      default: "9000",
    },
  },
  data() {
    return {
      imagenPrincipal: "",
    };
  },
  created() {
    //this.imagenPrincipal = '/assets/1. Estadios/Imágenes de estadios/1.1 wembley-stadium.jpg';
  },
  watch: {},
  methods: {
    cambiarImagenPrincipal(imagenSecundaria) {
      this.propimagenPrincipal = imagenSecundaria.ruta_img;
    },
  },
};
</script>

<style scoped>

.img-principal {
  width: 100%;
  height: 400px;
  border-radius: 5em / 5em;
}

.cont-img-secundarias {
  width: 100%;
  height: 25em;
  overflow: scroll;
}
.cont-img-secundarias figure {
  width: 100%;
  height: 20%;
  border-radius: 25px 25px 25px 25px;
  overflow: hidden;
  transition: all 500ms ease;
}
.cont-img-secundarias figure:hover {
  
  border: 3px solid #000000
}
.img-secundaria {  
  width: 100%;
  height: 100%;
  transition: all 500ms ease;
}
.img-secundaria:hover { 
  transform: scale(1.5);
  cursor: pointer;
}

.card-image {
  position: relative;
}
.card-image img {
  max-height: 100%;
  max-width: 100%;
  border-radius: 45px;
  text-decoration-line: none;
}

/* Modificar imagen pequeña */
.card-action {
  position: absolute;

  /* margin-top: -25px;
  margin-right: 130px; */
  z-index: 2;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 20px;
  padding: 8px;
  width: 85px;
  height: 90px;
  right: 25px;
  bottom: -50px;
}

.card-action img {
  border-radius: 15px;
}

.card-text {
  padding: 10px 15px;
  background-color: transparent;
  font-size: 20px;
  color: #636262;
}
.icon_espectador {
  width: 35px;
  height: 35px;
  background-color: black;
  padding: 5px;
  margin-right: 8px;
  border-radius: 12px;
}

.espectadores_cant {
  text-align: left;
  font-size: 25px;
  letter-spacing: 0px;
  color: #000000;
}
</style>
