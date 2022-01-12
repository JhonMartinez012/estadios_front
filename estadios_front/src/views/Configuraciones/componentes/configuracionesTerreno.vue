<template>
  <div class="container-fluid">
    <div class="container-fluid estilos-container">
      <label class="parrafo font-weight-bold ml-0">Tipos de terrono</label>
      <button
        class="btn btn-crear-t pr-2"
        data-toggle="modal"
        data-target="#exampleModal"
      >
        Crear
      </button>
    </div>

    <!-- Modal para crear terreno -->
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
            <h5 class="modal-title" id="exampleModalLabel">
              Añadir tipo de terreno
            </h5>
            <button
              type="button"
              class="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <div class="container">
              <div class="row">
                <div class="col-md-12 d-flex justify-content-center">
                  <slim-cropper
                    :options="slimOptions"
                    ref="img_terreno"
                    class="estilo-slim"
                  >
                    <input type="file" name="slim" />
                  </slim-cropper>
                </div>
              </div>

              <div class="form-row">
                <div class="form-group col-md-12 text-center">
                  <p for="" class="p-terreno">Nombre terreno</p>
                  <input
                    placeholder="Nombre"
                    type="text"
                    class="inputt"
                    v-model="nombre_terreno"
                  />
                </div>
              </div>
            </div>
          </div>
          <div class="modal-footer justify-content-center">
            <button type="button" class="btn btn-cerrar" data-dismiss="modal">
              Cerrar
            </button>
            <button
              type="button"
              class="btn btn-guardar"
              @click="crear_terreno"
            >
              añadir
            </button>
          </div>
        </div>
      </div>
    </div>

    <div class="row">
      <div
        class="col-md-4 col-sm-6 col-lg-2 fondo-card mt-4"
        v-for="(terreno, index) in terrenos"
        :key="index"
      >
        <div class="card-sl-terreno">
          <a href="">
            <div class="card-image-terreno">
              <img
                class="hover-image w-100"
                :src="terreno.img_terreno"
                width="cover"
                height="150px"
              />
              <div
                class="card-action-terreno"
                title="Estadios con este terreno"
                alt=""
                data-toggle="tooltip"
                data-placement="bottom"
              >
                <label for="">{{ terreno.cant_estadios }} </label>
              </div>
            </div>
          </a>
          <div class="card-heading-terreno">
            <p class="tres_puntos">{{ terreno.nombre }}</p>
          </div>

          <div class="card-text-terreno btns-accion text-center">
            <button
              class="btn btn-accion"
              title="Eliminar"
              alt=""
              data-toggle="tooltip"
              data-placement="bottom"
            >
              <img src="/assets/1. Estadios/Iconos/icon - Eliminar.svg" />
            </button>
            <button
              class="btn btn-accion"
              title="Editar"
              alt=""
              data-toggle="tooltip"
              data-placement="bottom"
            >
              <img src="/assets/1. Estadios/Iconos/icon - Editar.svg" />
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
const ENDPOINT_PATH = "http://127.0.0.1:8000/api/terreno/";
export default {
  data: () => ({
    nombre_terreno: "",
    img: "",

    terrenos: [
      {
        nombre: "Gramilla",
        img_terreno: "/assets/1. Estadios/Terrenos de juego/1. gramilla.jpg",
        cant_estadios: 0,
      },
      {
        nombre: "Gramilla sintética",
        img_terreno:
          "/assets/1. Estadios/Terrenos de juego/3. gramilla sintetica.jpg",
        cant_estadios: 0,
      },
      {
        nombre: "Polvo de ladrillo",
        img_terreno:
          "/assets/1. Estadios/Terrenos de juego/2. polvo de ladrillo.jpg",
        cant_estadios: 0,
      },
      {
        nombre: "Madera",
        img_terreno: "/assets/1. Estadios/Terrenos de juego/4. madera.jpg",
        cant_estadios: 0,
      },
      {
        nombre: "Cemento",
        img_terreno: "/assets/1. Estadios/Terrenos de juego/5. Cemento.jpg",
        cant_estadios: 0,
      },
      {
        nombre: "Cemento",
        img_terreno: "/assets/1. Estadios/Terrenos de juego/5. Cemento.jpg",
        cant_estadios: 0,
      },
    ],
    slimOptions: {
      label: "Añadir imagen del terreno",
    },
  }),
  methods: {
    async crear_terreno() {
      let payload = {
        nombre_terreno: this.nombre_terreno,
        img: this.$refs.img_terreno.instanciaCrop.dataBase64.output.image,
      };
      console.log(payload.img);
      try {
        await axios
          .post(ENDPOINT_PATH + "crear_terreno", payload, {
            headers: {
              "Content-Type": "application/json",
              "Authorization": "Bearer " + localStorage.getItem("access_token"),
            },
          })
          .then((response) => {
            this.data = response.data.data;
            this.$router.push({ name: "Configuraciones" });
          });
      } catch (error) {
        console.log(" pailas mi sooo");
      }
    },
  },
  computed: {
    imagen() {
      return this.imagenMini;
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
.parrafo {
  margin-top: 30px;
  text-align: left;
  margin-inline-end: 30px;
  font-weight: bold;
  font-size: 35px;
  color: #000000;
  margin-right: 80px;
}
.btn-crear-t {
  width: 120px;
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
.btns-accion {
  margin: 0px;
  width: auto;
  margin-top: 0px;
  display: flex;
  justify-content: center;
}
.btn-accion {
  width: 40px;
  height: 40px;
  margin-left: 0px;
  background: #755bfa 0% 0% no-repeat padding-box;
  background-position: center center;
  border-radius: 12px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
}

.btn-crear-t:hover {
  box-shadow: 0 2px 8px 0 rgba(115, 88, 250, 0.4),
    0 10px 30px 0 rgba(134, 111, 247, 0.19);
  color: #fff;
  text-decoration-line: none;
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
.estilo-slim {
  width: 120px;
  height: 120px;
  margin-top: 0px;
  border-radius: 30px;
  margin-bottom: 12px;
  font-family: "Gilroy";
  font-size: 13px;
  color: #637381;
}
.p-terreno {
  width: 117px;
  height: 15px;
  margin-top: 22px;
  margin-bottom: 3px;
  margin-left: 73px;
  font-family: "Rubik";
  font-size: 13px;
  letter-spacing: 0px;
  color: #637381;
}
.inputt {
  width: 300px;
  height: 40px;
  background: #ffffff 0% 0% no-repeat padding-box;
  border: 1px solid #dfe4e8;
  border-radius: 8px;
  opacity: 1;
}

.inputt::placeholder {
  font-size: 15px;
  font-family: "Rubik";
  text-align: left;
  letter-spacing: 0px;
  color: #dfe4e8;
}

/* tarjetaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa */
/* Card Styles */
.fondo-card-terreno {
  background-color: none;
}

.card-sl-terreno {
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

.tres_puntos {
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
}
.card-image-terreno {
  position: relative;
}
.card-image-terreno img {
  max-height: 100%;
  max-width: 100%;
  border-radius: 45px;
  text-decoration-line: none;
}

/* Modificar imagen pequeña */
.card-action-terreno {
  position: absolute;

  /* margin-top: -25px;
  margin-right: 130px; */
  z-index: 2;
  background: #dfe4e8;
  border-radius: 10px;
  padding: 8px;
  width: 50px;
  height: 50px;
  right: -20px;
  bottom: 120px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-position: center center;
}

.card-action-terreno label {
  margin: 0px;
  border-radius: 15px;
  color: black;
  display: flex;
}

.card-heading-terreno {
  font-size: 20px;
  text-align: center;
  font-family: "Gilroy";
  background-color: transparent;
  padding: 10px 15px;
  margin-bottom: -20px;
  color: #000000;
}

.card-text-terreno {
  padding: 10px 15px;
  background-color: transparent;
  font-size: 14px;
  color: #636262;
}
</style>
