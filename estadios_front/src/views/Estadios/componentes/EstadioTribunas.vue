<template>
  <div class="container-fluid ml-0 mt-5">
    <!-- Modal para añadir una tribuna -->
    <div class="modal" :class="{ show: modal }">
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">Añadir tribuna</h5>
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
              <div class="form-row">
                <div class="form-group col-md-12">
                  <p for="" class="p-tribuna">Nombre de la tribuna</p>
                  <input
                    placeholder="Nombre"
                    v-model="nombre_tribuna"
                    type="text"
                    class="form-control input-tribuna"
                  />
                </div>
              </div>

              <div class="form-row">
                <div class="form-group col-md-12">
                  <p for="" class="p-tribuna">Capacidad de expectadores</p>
                  <input
                    placeholder="Cantidad expectadores"
                    v-model="capacidad"
                    type="text"
                    class="form-control input-tribuna"
                  />
                </div>
              </div>

              <div class="form-row">
                <div class="form-group col-md-12">
                  <p for="" class="p-tribuna">Valor de la entrada</p>
                  <input
                    placeholder="Valor entrada"
                    type="number"
                    v-model="valor_boleta"
                    class="form-control input-tribuna"
                  />
                </div>
              </div>
            </div>
          </div>
          <div class="modal-footer justify-content-center">
            <button
              type="button"
              class="btn btn-cerrar"
              data-dismiss="modal"
              @click="closeModal"
            >
              Cerrar
            </button>
            <button type="button" class="btn btn-guardar" @click="crearTribuna">
              añadir
            </button>
          </div>
        </div>
      </div>
    </div>
    <!-- Fin del modal -->

    <div class="container-fluid estilos-container">
      <label class="font-weight-bold ml-0 titulo_tribuna pr-5">Tribunas</label>
      <button class="btn btn-crear-tri" @click="openModal">Añadir</button>
    </div>
    <div class="row">
      <div
        class="tarjeta-tribunas"
        v-for="tribuna in tribunas"
        :key="tribuna.id"
      >
        <div class="card mt-4" style="width: 14rem">
          <div class="card-body">
            <h5 class="card-title text-center titulo-card">
              {{ tribuna.nombre_tribuna }}
            </h5>
            <label class="card-subtitle mb-2 text-muted d-flex sub-card"
              >{{ tribuna.capacidad }}
              <img
                src="/assets/1. Estadios/Iconos/icon - espectadores.svg"
                class="ml-auto"
              />
            </label>
            <label class="card-text mb-2 text-muted d-flex txt-card"
              >$ {{ tribuna.valor_boleta }}
              <img
                src="/assets/1. Estadios/Iconos/Icon - ticket.svg"
                class="ml-auto"
              />
            </label>
          </div>
        </div>
        <div class="form-group botones-accion text-center">
          <button
            class="btn boton-accion mr-2"
            @click="editarTribuna"
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
              data-target="#modalEliminarTribuna"
            />
          </button>
        </div>
      </div>
    </div>
    <!-- INICIO DE LA MODAL ELIMINAR -->
    <div
      class="modal fade"
      id="modalEliminarTribuna"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">Eliminar tribuna</h5>
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
            <p>¿Desea eliminar esta tribuna?</p>
          </div>
          <div class="modal-footer d-flex justify-content-center">
            <button
              type="button"
              class="btn btn-secondary"
              data-dismiss="modal"
            >
              Cerrar
            </button>
            <button type="button" class="btn boton-eliminar-tribuna">
              Eliminar
            </button>
          </div>
        </div>
      </div>
    </div>
    <!--  FIN DEL MODAL PARA ELIMINAR TRIBUNA -->
  </div>
</template>

<script>
const ENDPOINT_PATH = "http://127.0.0.1:8000/api/estadio/";
import axios from "axios";
export default {
  created: function () {
    this.listarTribunas();
  },
  data: () => ({
    show: true,
    modal: 0,
    nombre_tribuna: "",
    valor_boleta: 0,
    nombreTribuna: "",
    capacidad: 0,
    valorBoleta: 0,
    estadioId: 0,
    tribunas: [],
  }),
  computed: {
    idEstadio() {
      return this.$route.params.id;
    },
  },
  methods: {
    async listarTribunas() {
      try {
        const { data } = await axios.get(
          ENDPOINT_PATH + "listar_tribunas/" + this.idEstadio
        );
        this.tribunas = data.tribunas;
        console.log(this.tribunas);
      } catch (error) {
        console.log(error);
      }
    },
    async crearTribuna() {
      let payload = {
        nombreTribuna: this.nombre_tribuna,
        capacidad: this.capacidad,
        valorBoleta: this.valor_boleta,
        estadioId: this.idEstadio,
      };
      try {
        console.log(payload);
        const { data } = await axios.post(
          ENDPOINT_PATH + "crear_tribuna",
          payload
        );
        this.data = data;
        if (this.data) {
          console.log("Tribuna registrada");
          this.closeModal();
          this.listarTribunas();
        }
      } catch (error) {
        console.log(error);
      }
    },
    editarTribuna() {},
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
.tarjeta-tribunas {
  width: cover;
  padding: 3em;
}
.show {
  display: list-item;
  opacity: 1;
  background: rgba(168, 167, 172, 0.6);
}
.titulo_tribuna {
  font-family: "Gilroy";
  font-weight: bold;
  font-size: 28px;
}
.modal-header {
  background-color: #fcfdff;
}
.btn-crear-tri {
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
.btn-crear-tri:hover {
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
.btn-guardar,
.boton-eliminar-tribuna {
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
.btn-guardar:hover,
.boton-eliminar-tribuna:hover {
  width: 90px;
  height: 40px;
  background: transparent linear-gradient(90deg, #7358fa 0%, #866ff7 100%) 0% 0%
    no-repeat padding-box;
  box-shadow: 0px 3px 6px #866ff766;
  border-radius: 12px;
  color: #fff;
}

.p-tribuna {
  width: 100%;
  height: 15px;
  margin-top: 22px;
  margin-bottom: 3px;
  margin-left: 15px;
  font-family: "Rubik";
  font-size: 13px;
  letter-spacing: 0px;
  color: #637381;
}
.input-tribuna {
  width: 100%;
  height: 40px;
  background: #ffffff 0% 0% no-repeat padding-box;
  border: 1px solid #dfe4e8;
  border-radius: 8px;
  opacity: 1;
}
.input-tribuna::placeholder {
  font-size: 15px;
  font-family: "Rubik";
  text-align: left;
  letter-spacing: 0px;
  color: #dfe4e8;
}

/* Estilos de la tarjeta de las tribunas */
.card {
  border-radius: 15px;
}

.titulo-card {
  font-family: "Gilroy";
  font-size: 18px;
  font-weight: 500;
  color: #000;
}
.sub-card {
  width: 100%;
  height: 40px;
  background: #7358fa 0% 0% no-repeat padding-box;
  color: #fff !important;
  font-family: "Gilroy";
  font-size: 18px;
  border-radius: 10px;
  padding: 4% 15px;
}
.txt-card {
  width: 100%;
  height: 40px;
  background: transparent 0% 0% no-repeat padding-box;
  color: #000 !important;
  font-family: "Gilroy";
  font-weight: bold;
  font-size: 18px;
  border-radius: 10px;
  padding: 4% 15px;
}
.botones-accion {
  margin: 0px;
  width: 200px;
  margin-top: 20px;
  display: flex;
  justify-content: center;
}
.boton-accion {
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
</style>
