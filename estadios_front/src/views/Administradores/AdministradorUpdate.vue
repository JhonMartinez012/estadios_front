<template>
  <div class="container-fluid admins m-0 mt-3 ml-0">
    <!-- Modal para avisar que las contraseñas no coinciden -->
    <div class="modal" :class="{ show: modal }">
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">
              {{ tituloModal }}
            </h5>
            <button
              v-if="userUpdate != true"
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
                {{ mensaje }}
              </div>
            </div>
          </div>
          <div class="modal-footer justify-content-center">
            <button
              v-if="userUpdate != true"
              type="button"
              class="btn btn-secondary"
              data-dismiss="modal"
              @click="closeModal()"
            >
              Cerrar
            </button>
          </div>
        </div>
      </div>
    </div>
    <!-- ******* FIN DE LA MODAL PARA CREAR ******** -->

    <nav aria-label="breadcrumb">
      <ol class="breadcrumb">
        <li class="breadcrumb-item">
          <router-link :to="{ name: 'Administradores' }" id="mini_title">
            Administradores</router-link
          >
        </li>
        <li class="breadcrumb-item active estilo_page" aria-current="page">
          Editar Administrador
        </li>
      </ol>
    </nav>

    <div class="container-fluid titulo_formulario">
      <label class="parrafo font-weight-bold ml-0">Editar administrador</label>
      <!-- <router-link :to="{name:'EstadiosCrear'}" class="btn btn-crear pr-2"> Crear estadio </router-link> -->
      <button class="btn btn-guardar pr-2" @click="editarAdministrador">
        Guardar
      </button>
    </div>
    <div class="container contenido_formulario mt-4">
      <div class="row ml-0">
        <div class="form-group col-sm-12 col-md-2 anadir_img">
          <slim-cropper :options="slimOptions" id="estilo_subir_img">
            <input type="file" name="slim" id="estilo_subir_img" />
          </slim-cropper>
        </div>
        <div class="form-group col-sm-8 col-md-4">
          <div class="" style="height: 25%">
            <label for="inputState" class="titulo_form">Nombres</label>
            <input
              type="text"
              placeholder="Nombres"
              v-model="administrador.name"
              class="cuadros_input"
            />
          </div>

          <div class="" style="height: 25%">
            <label for="inputState" class="titulo_form">Apellidos</label>
            <input
              type="text"
              v-model="administrador.last_name"
              class="cuadros_input"
            />
          </div>

          <div class="" style="height: 25%">
            <label for="inputState" class="titulo_form"
              >Correo electrónico</label
            >
            <input
              type="email"
              v-model="administrador.email"
              class="cuadros_input"
            />
          </div>

          <div class="" style="height: 25%">
            <label for="inputState" class="titulo_form">Contraseña</label>
            <input type="password" v-model="password" class="cuadros_input" />
          </div>
        </div>

        <div class="form-group col-sm-8 col-md-4">
          <div class="" style="height: 50%">
            <label for="inputState" class="titulo_form"
              >Acerca del administrador</label
            >
            <textarea
              cols="30"
              rows="10"
              class="cuadros_txtArea"
              v-model="administrador.acerca"
            ></textarea>
          </div>

          <div class="" style="height: 25%">
            <label for="inputState" class="titulo_form">Teléfono celular</label>
            <div class="d-flex align-content-center align-items-center">
              <input
                class="cuadros_input"
                type="text"
                v-model="administrador.phone"
                minlength="7"
                :maxlength="longPhone"
              />
              <span class="cont-caracteres"
                >{{ contPhone }}/{{ longPhone }}</span
              >
            </div>
          </div>

          <div class="" style="height: 25%">
            <label for="inputState" class="titulo_form"
              >Repetir contraseña</label
            >
            <input type="password" v-model="repassword" class="cuadros_input" />
          </div>
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
    this.listarAdministrador();
  },
  data() {
    return {
      administrador: {
        name: "",
        last_name: "",
        email: "",
        acerca: "",
        phone: "",
      },
      password: "",
      repassword: "",
      id: 0,
      slimOptions: {
        label: "Añadir imagen",
      },
      longPhone: 10,

      //Variables para validar actualización del admin
      adminActualizado: [],
      errores: [],
      modal: 0,
      tituloModal: "",
      contraNull: false,
      contraDist: false,
      contraMin: false,
      userUpdate: false,
      mensaje: "",
      message: "",
    };
  },
  computed: {
    idAdministrador() {
      return this.$route.params.id;
    },
    contPhone() {
      return this.administrador.phone.length;
    },
  },
  methods: {
    async listarAdministrador() {
      try {
        const { data } = await axios.get(
          ENDPOINT_PATH + "administrador/" + this.idAdministrador
        );
        this.administrador = data.administrador;
        //console.log(this.administrador);
      } catch (error) {
        console.log(error);
      }
    },
    async editarAdministrador() {
      //console.log(payload);
      try {
        if (this.password != "" && this.repassword != "") {
          if (this.password.length >= 6 && this.repassword.length >= 6) {
            if (this.password == this.repassword) {
              let payload = {
                name: this.administrador.name,
                lastName: this.administrador.last_name,
                acerca: this.administrador.acerca,
                email: this.administrador.email,
                phone: this.administrador.phone,
                password: this.password,
                repassword: this.repassword,
              };
              const { data } = await axios.put(
                ENDPOINT_PATH + "editar_administrador/" + this.idAdministrador,
                payload
              );
              this.adminActualizado = data;
              if (this.adminActualizado.success == true) {
                //this.$router.push({ name: "Administradores" });
                //console.log(this.adminActualizado.message);
                this.userUpdate = true;
                this.message = this.adminActualizado.message;
                this.contraNull = false;
                this.contraDist = false;
                this.contraMin = false;

                this.openModal();
              } else {
                this.errores = this.adminActualizado.errores;
                //console.log(this.adminActualizado.errores);
              }
            } else {
              this.contraDist = true, 
              this.openModal();
              //alert("contraseñas no coinciden");
            }
          } else {
            (this.contraMin = true), 
            this.openModal();
            //alert("La contraseña debe tener minimo 6 caracteres")
          }
        } else {
          (this.contraNull = true), 
          this.openModal();
          //alert("ingrese una contraseña");
        }
      } catch (error) {
        console.log(error);
      }
    },

    openModal() {
      this.modal = 1;
      if (this.contraNull) {
        this.tituloModal = "Contraseña nula";
        this.mensaje = "El campo de contraseñas no puede ser nulo";
      } else if (this.contraDist) {
        this.tituloModal = "Contraseñas diferentes";
        this.mensaje = "Las contraseñas no coinciden";
      } else if (this.contraMin) {
        (this.tituloModal = "Numero de caracteres"),
          (this.mensaje = "La contraseña debe tener almenos 6 caracteres");
      } else if (this.userUpdate) {
        (this.tituloModal = "Actualización exitosa"),
          (this.mensaje = this.message);
        this.tiempoEspera();
      }
    },
    closeModal() {
      this.modal = 0;
      this.contraNull = false,
      this.contraDist = false;
      this.contraMin = false;
      this.userUpdate = false;
    },
    tiempoEspera() {
      setTimeout(this.pasar, 2000);
    },
    pasar() {
      this.$router.push({ name: "Administradores" });
    },
  },
};
</script>

<style scoped>
.show {
  display: list-item;
  opacity: 1;
  background: rgba(168, 167, 172, 0.6);
}
.admins {
  margin-left: 105px;
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

  margin-left: 0px;
}
.titulo_formulario {
  margin-left: 0px;
  width: 100%;
}
.contenido_formulario {
  margin-left: 0px;
  max-width: 1382px;
  min-width: 500px;
}
.parrafo {
  margin-top: 30px;
  text-align: left;
  margin-inline-end: 30px;
  font-weight: bold;
  font-size: 35px;
  color: #000000;
  margin-right: 778px;
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
  width: 170px;
  height: 120px;
  margin-top: 55px;
  margin-bottom: 30px;
}
#estilo_subir_img {
  background: #dfe4e8 0% 0% no-repeat padding-box;
  border-radius: 45px;
  width: 150px;
}

.titulo_form {
  color: #637381;
  text-align: left;
  margin-left: 20px;
  font-family: "Rubik";
  font-size: 18px;
  width: 100%;
  margin-bottom: 0;
  margin-top: 15px;
}

.cuadros_input,
.cuadros_txtArea {
  width: 100%;
  height: 50px;
  background: #ffffff 0% 0% no-repeat padding-box;
  border: 1px solid #dfe4e8;
  border-radius: 8px;
  padding: 1px 20px;

  font-family: "Rubik";
  font-size: 16px;
  letter-spacing: 0px;
  color: black;
}
.cuadros_input::placeholder,
.cuadros_txtArea::placeholder {
  color: #dfe4e8;
  text-align: left;
  margin-left: 20px;
}
.cuadros_txtArea {
  height: 135px;
}
</style>
