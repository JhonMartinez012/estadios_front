<template>
  <div>
    <div class="row">
      <div
        class="col-md-6 col-sm-6 col-lg-4 fondo-card mt-4"
        v-for="(estadio, index) in estadios"
        :key="index"
      >
        <div class="card-sl">
          <div class="card-heading">
            <h2 class="font-weight-bold tres_puntos">{{ estadio.nombre }}</h2>
          </div>
          
          
            <router-link class="router" to="/estadios/id">
            <div class="card-image">
              <img
                class="hover-image w-100"
                :src="estadio.img_estadio"
                width="cover"
                height="270px"
                
              />
              <div class="card-action">
                <img
                  :src="estadio.terreno"
                  width="60px"
                  height="45px"
                  alt=""
                  srcset=""

                />
              </div>
            </div>
          </router-link>
          
          <div class="card-text">
            <img
              class="icon_espectador"
              src="/assets/1. Estadios/Iconos/icon - espectadores.svg"
              alt=""
              srcset=""
            /><label class="espectadores_cant">{{ estadio.capacidad }}</label>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      estadios: [
        {
          nombre: "Wembley Stadium",
          img_estadio:
            "/assets/1. Estadios/Imágenes de estadios/1.1 wembley-stadium.jpg",
          terreno: "/assets/1. Estadios/Terrenos de juego/1. gramilla.jpg",
          capacidad: 90000,
        },
        {
          nombre: "Madison Square Garden",
          img_estadio:
            "/assets/1. Estadios/Imágenes de estadios/2.1 Madison-Square-Garden.jpg",
          terreno: "/assets/1. Estadios/Terrenos de juego/4. madera.jpg",
          capacidad: 20789,
        },
        {
          nombre: "Rogers center",
          img_estadio: "/assets/1. Estadios/Imágenes de estadios/5.1 Rogers Centre.jpg",
          terreno: "/assets/1. Estadios/Terrenos de juego/5. Cemento.jpg",
          capacidad: 53506,
        },
        {
          nombre: "Rogers center",
          img_estadio: "/assets/1. Estadios/Imágenes de estadios/5.1 Rogers Centre.jpg",
          terreno: "/assets/1. Estadios/Terrenos de juego/5. Cemento.jpg",
          capacidad: 53506,
        },
      ],
    };
  },
};
</script>

<style >
/*  Helper Styles */

.router,
.router:hover {
  text-decoration: none;
  color: black;
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

/* Card Styles */
.fondo-card {
  background-color: none;
}

.card-sl {
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

.tres_puntos{
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
}
.card-image{
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
  background: rgba(255, 255, 255, 0.3);
  border-radius: 20px;
  padding: 8px;
  width: 75px;
  height: 60px;
  right: 25px;
  bottom: -40px;
}

.card-action img{
border-radius: 15px;
}

.card-heading {
  font-size: 30px;
  font-weight: bold;
  background-color: none;
  padding: 10px 15px;
}

.card-text {
  padding: 10px 15px;
  background-color: transparent;
  font-size: 14px;
  color: #636262;
}
</style>
