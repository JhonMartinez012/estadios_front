<template>
  <div class="container m-0 mt-3">
    <!-- INICIO DE LA MODAL ELIMINAR -->
    <div class="modal" :class="{ show: modal }">
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">
              Eliminar administrador
            </h5>
            <button type="button" class="close" @click="closeModal">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body text-center">
            <p>¿Desea eliminar este administrador?</p>
          </div>
          <div class="modal-footer d-flex justify-content-center">
            <button type="button" class="btn btn-secondary" @click="closeModal">
              Cerrar
            </button>
            <button
              type="button"
              class="btn boton-eliminar-admin"
              @click="eliminarAdministrador(administrador)"
            >
              Eliminar
            </button>
          </div>
        </div>
      </div>
    </div>
    <!--  FIN DEL MODAL PARA ELIMINAR -->
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb">
        <li class="breadcrumb-item">
          <router-link :to="{ name: 'Administradores' }" id="mini_title">
            Administradores</router-link
          >
        </li>
        <li class="breadcrumb-item active estilo_page" aria-current="page">
          {{ administrador.name }}
        </li>
      </ol>
    </nav>

    <div class="container titulo_formulario">
      <label class="parrafo font-weight-bold ml-0 mb-3"
        >{{ administrador.name + " " + administrador.last_name }}
      </label>
      <div class="d-flex">
        <div class="lineaT_1"></div>
        <div class="lineaT_2"></div>
      </div>
    </div>

    <div class="container contenido_formulario mt-4">
      <div class="row mx-0">
        <div class="form-group col-sm-6 col-md-2 anadir_img">
          <img
            :src="administrador.img"
            id="estilo_subir_img"
            alt=""
            srcset=""
          />
          <div class="form-group botones-accion">
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
            <router-link
              :to="{
                name: 'AdministradorEditar',
                params: { id: administrador.id },
              }"
              class="btn boton-accion"
              data-toggle="tooltip"
              title="Editar"
              data-placement="bottom"
            >
              <img
                src="/assets/1. Estadios/Iconos/icon - Editar.svg"
                alt=""
                srcset=""
              />
            </router-link>
          </div>
        </div>
        <div class="form-group col-md-5">
          <label for="inputState" class="titulo_form">
            <img
              src="/assets/1. Estadios/Iconos/Icon - correo.svg"
              class="iconos_ver_admin"
            />
            {{ administrador.email }}
          </label>

          <label for="inputState" class="titulo_form">
            <img
              src="/assets/1. Estadios/Iconos/Icon - telefono.svg"
              class="iconos_ver_admin"
            />
            {{ administrador.phone }}
          </label>
          <label for="inputState" class="titulo_form">
            <img
              src="/assets/1. Estadios/Iconos/icon - pass.svg"
              class="iconos_ver_admin"
            />
            h4t1s8ac5c4v
          </label>

          <label for="" class="title_acerca_admin">
            Acerca de {{ administrador.name }}</label
          >

          <p for="inputState" class="descrip_acerca_admin">
            {{ administrador.acerca }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
const ENDPOINT_PATH = "http://127.0.0.1:8000/api/auth/";
export default {
  created() {
    this.$store.commit("SET_LAYOUT", "principal-layout");
    this.verAdministrador();
  },
  updated() {
    $('[data-toggle="tooltip"]').tooltip({
      trigger: "hover",
    });
  },
  data() {
    return {
      show: true,
      modal: 0,
      administrador: [],
      slimOptions: {
        label: "Añadir imagen",
      },
    };
  },
  computed: {
    idAdministrador() {
      return this.$route.params.id
    },
  },
  methods: {
    async verAdministrador() {
      try {
        const { data } = await axios.get(
          ENDPOINT_PATH + "administrador/" + this.idAdministrador ,
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: "Bearer " + localStorage.getItem("access_token"),
            },
          }
        );
        this.administrador = data.administrador;
        console.log(this.administrador);
      } catch (error) {
        console.log(error);
      }
    },
    async eliminarAdministrador(administrador) {
      try {
        const { data } = await axios.delete(
          ENDPOINT_PATH + "eliminar_administrador/" + administrador.id,
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: "Bearer " + localStorage.getItem("access_token"),
            },
          }
        );
        if (data) {
          this.closeModal();
          this.$router.push({ name: "Administradores" });
        }
      } catch (error) {
        console.log(error);
      }
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
.admins {
  margin-left: 105px;
}
.show {
  display: list-item;
  opacity: 1;
  background: rgba(168, 167, 172, 0.6);
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
.lineaT_1 {
  width: 210px;
  height: 5px;
  margin-left: 15px;
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
#mini_title {
  top: 140px;
  left: 109px;
  width: 80px;
  height: 30px;

  font-weight: normal;
  font-size: 20px;
  text-align: left;
  text-decoration: none;
  letter-spacing: 0px;
  color: #7358fa;
}
.titulo_formulario {
  margin-left: 0px;
  width: 100%;
}
.contenido_formulario {
  margin-left: 0px;
  max-width: 1380px;
  min-width: 500px;
}
.parrafo {
  width: 100%;
  margin-top: 50px;
  text-align: left;
  margin-inline-end: 30px;
  font-weight: bold;
  font-size: 35px;
  color: #000000;
  /* margin-right: 782px; */
}
.btn-guardar {
  width: 180px;
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
.btn-guardar:hover {
  box-shadow: 0 2px 8px 0 rgba(115, 88, 250, 0.4),
    0 10px 30px 0 rgba(134, 111, 247, 0.19);
  color: #fff;
  text-decoration-line: none;
}
.anadir_img {
  width: 200px;
  height: 200px;
  margin-top: 0px;
  margin-right: 60px;
  margin-bottom: 50px;
  text-align: center;
  background-position: center center;
}
#estilo_subir_img {
  background: #dfe4e8 0% 0% no-repeat padding-box;
  border-radius: 50px;
  width: 200px;
  height: 200px;
}

.iconos_ver_admin {
  width: 20px;
  height: 30px;
  margin-right: 10px;
}
.titulo_form {
  color: #000000;
  text-align: left;
  margin-left: 20px;
  font-family: "Gilroy";
  font: medium;
  font-size: 25px;
  width: 100%;
  margin-bottom: 0;
  margin-top: 10px;
}

.title_acerca_admin {
  text-align: left;
  margin-left: 20px;
  margin-top: 40px;
  font: normal normal bold 30px/38px "Gilroy";
  letter-spacing: 0px;
  color: #000000;
}
.descrip_acerca_admin {
  text-align: left;
  margin-left: 20px;
  margin-top: 5px;
  font: normal normal 20px/22px "Gilroy";
  letter-spacing: 0px;
  color: #000000;
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

.boton-eliminar-admin {
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

.boton-eliminar-admin:hover {
  box-shadow: 0 2px 8px 0 rgba(115, 88, 250, 0.4),
    0 10px 30px 0 rgba(134, 111, 247, 0.19);
  color: #fff;
  text-decoration-line: none;
}
</style>
