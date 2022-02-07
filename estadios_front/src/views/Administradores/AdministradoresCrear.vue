<template>
  <div class="container-fluid admins m-0 mt-5">
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb">
        <li class="breadcrumb-item">
          <router-link :to="{ name: 'Administradores' }" id="mini_title">
            Administradores</router-link
          >
        </li>
        <li class="breadcrumb-item active estilo_page" aria-current="page">
          Crear Administrador
        </li>
      </ol>
    </nav>

    <div class="container-fluid titulo_formulario">
      <label class="parrafo font-weight-bold ml-0">Crear Administrador</label>
      <!-- <router-link :to="{name:'EstadiosCrear'}" class="btn btn-crear pr-2"> Crear estadio </router-link> -->
      <button
        class="btn btn-guardar pr-2"
        id="btnGuardar"
        @click="register"
        disabled
      >
        Guardar
      </button>
    </div>
    <div class="container contenido_formulario mt-4">
      <form>
        <div class="row">
          <div class="form-group col-sm-12 col-md-4 col-lg-2 anadir_img d-flex">
            <slim-cropper
              :options="slimOptions"
              id="estilo_subir_img"
              ref="img_admin"
            >
              <input type="file" name="slim" id="estilo_subir_img" />
            </slim-cropper>  
                     
          </div>
          
          <div class="form-group col-sm-12 col-md-4">
            <label for="inputState" class="titulo_form">Nombres</label>
            <input
              type="text"
              v-model="name"
              placeholder="Nombres"
              class="cuadros_input"
              @keyup="habilitarBtn"
            />
            <label for="inputState" class="msg_error" v-for="(error,index) in errors.name" :key="`name-${index}`">{{
              errors.name[index]
            }}</label>

            <label for="inputState" class="titulo_form">Apellidos</label>
            <input
              type="text"
              v-model="last_name"
              placeholder="Apellidos"
              class="cuadros_input"
              @keyup="habilitarBtn"
            />
            <label for="inputState" class="msg_error" v-if="errors.lastName">{{
              errors.lastName[0]
            }}</label>

            <label for="inputState" class="titulo_form"
              >Correo electrónico</label
            >
            <input
              type="email"
              v-model="email"
              placeholder="Correo electrónico"
              class="cuadros_input"
              @keyup="habilitarBtn"
            />
            <label for="inputState" class="msg_error" v-if="errors.email">{{
              errors.email[0]
            }}</label>

            <label for="inputState" class="titulo_form">Contraseña</label>
            <input
              type="password"
              v-model="password"
              placeholder="contraseña"
              class="cuadros_input"
              maxlength="20"
              @keyup="habilitarBtn"
            />
            <label for="inputState" class="msg_error" v-if="errors.password">{{
              errors.password[0]
            }}</label>
          </div>

          <div class="form-group col-sm-12 col-md-4">
            <label for="inputState" class="titulo_form"
              >Acerca del administrador</label
            >
            <textarea
              cols="30"
              rows="10"
              placeholder="Acerca"
              class="cuadros_txtArea"
              v-model="acerca"
              @keyup="habilitarBtn"
            ></textarea>
            <label for="inputState" class="msg_error" v-if="errors.acerca">{{
              errors.acerca[0]
            }}</label>

            <label for="inputState" class="titulo_form">Teléfono celular</label>
            <input
              type="text"
              v-model="phone"
              placeholder="Teléfono celular"
              class="cuadros_input"
              minlength="7"
              maxlength="10"
              @keyup="habilitarBtn"
            />
            <label for="inputState" class="msg_error" v-if="errors.phone">{{
              errors.phone[1]
            }}</label>

            <label for="inputState" class="titulo_form"
              >Repetir contraseña</label
            >
            <input
              type="password"
              v-model="repassword"
              placeholder="Repetir contraseña"
              class="cuadros_input"
              maxlength="20"
              @keyup="habilitarBtn"
            />
            <label
              for="inputState"
              class="msg_error"
              v-if="errors.repassword"
              >{{ errors.repassword[0] }}</label
            >
          </div>
        </div>
      </form>
    </div>

    <!-- Modal para avisar que las contraseñas no coinciden -->
    <div class="modal" :class="{ show: modal }">
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">
              {{ tituloModal }}
            </h5>
            <button
              v-if="userRegistrado != true"
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
              v-if="userRegistrado != true"
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
  </div>
</template>

<script>
//import auth from "@/store/auth";
import axios from "axios";
const ENDPOINT_PATH = "http://127.0.0.1:8000/api/auth/";
export default {
  created() {
    this.$store.commit("SET_LAYOUT", "principal-layout");
  },
  data: () => ({
    name: "",
    last_name: "",
    phone: "",
    acerca: "",
    email: "",
    password: "",
    repassword: "",
    img: "",

    administrador: [],
    errors: [],

    slimOptions: {
      label: "Añadir imagen",
    },
    contraNull: false,
    contraDist: false,
    contraMin: false,
    userRegistrado: false,
    modal: 0,
    tituloModal: "",
    mensaje: "",
    descripcion: "",
  }),
  /* data() {
    return {

    }; */

  methods: {
    habilitarBtn() {
      try {
        let v = 0;
        let name = this.name;
        let lastName = this.last_name;
        let email = this.email;
        let acerca = this.acerca;
        let phone = this.phone;
        let pass = this.password;
        let repass = this.repassword;
        if (
          name.length < 4 ||
          lastName.length < 4 ||
          email.length < 6 ||
          acerca.length < 6 ||
          phone.length<7||
          pass.length < 6 ||
          repass.length < 6
        ) {
          v = v + 1;
        }
        if (v == 0) {
          document.getElementById("btnGuardar").disabled = false;
        } else {
          document.getElementById("btnGuardar").disabled = true;
        }
      } catch (error) {
        console.log(error);
      }
    },
    async register() {
      try {
        if (this.password != "" && this.repassword != "") {
          if (this.password.length >= 6 && this.repassword.length >= 6) {
            if (this.password == this.repassword) {
              let payload = {
                name: this.name,
                lastName: this.last_name,
                phone: this.phone,
                acerca: this.acerca,
                email: this.email,
                password: this.password,
                repassword: this.repassword,
                img: this.$refs.img_admin.instanciaCrop.dataBase64.output.image,
              };
              const data = await axios.post(
                ENDPOINT_PATH + "register",
                payload
              );
              this.administrador = data.data;
              //console.log(this.administrador);
              if (this.administrador.success == true) {
                (this.userRegistrado = true), this.openModal();
                //this.$router.push({ name: "Administradores" });
              } else if (this.administrador.success == false) {
                this.errors = this.administrador.error;
              }
            } else {
              (this.contraDist = true), this.openModal();
              //alert("contraseñas no coinciden");
            }
          } else {
            (this.contraMin = true), this.openModal();
            //alert("La contraseña debe tener minimo 6 caracteres")
          }
        } else {
          (this.contraNull = true), this.openModal();
          //alert("ingrese una contraseña");
        }
      } catch (error) {
        console.log(error);
      }
    },

    Administradores() {
      this.$router.push({ name: "Administradores" });
    },

    VerAdministrador() {
      this.$router.push({ name: "AdministradorVer" });
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
      } else if (this.userRegistrado) {
        (this.tituloModal = "Registro exitoso"),
          (this.mensaje = "El usuario se registro correctamente!");
        this.tiempoEspera();
      }
    },
    closeModal() {
      this.modal = 0;
    },
    tiempoEspera() {
      setTimeout(this.pasar, 3000);
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
  margin-top: 150px;
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
}
.titulo_formulario {
  margin-left: 0px;
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
  margin-right: 782px;
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
  justify-content: center center;
}
#estilo_subir_img {
  background: #dfe4e8 0% 0% no-repeat padding-box;
  border-radius: 45px;
  width: 120px;
  height: 120px;
}
.titulo_form {
  color: #637381;
  font-size: 18px;
}
.msg_error {
  color: #ff0000;
  font-size: 12px;
}

.titulo_form,
.msg_error {
  text-align: left;
  margin-left: 20px;
  font-family: "Rubik";
  width: 100%;
  margin-bottom: 0;
  margin-top: 8px;
}

.cuadros_input,
.cuadros_txtArea {
  width: 100%;
  height: 50px;
  background: #ffffff 0% 0% no-repeat padding-box;
  border: 1px solid #dfe4e8;
  border-radius: 8px;
  padding: 1px 20px;

  font: normal normal normal 16px/20px Rubik;
  letter-spacing: 0px;
  color: black;
}
.cuadros_input::placeholder {
  color: #dfe4e8;
  text-align: left;
  margin-left: 20px;
}

.cuadros_txtArea::placeholder {
  color: #dfe4e8;
  text-align: left;
  margin-left: 20px;
}
.cuadros_txtArea {
  height: 135px;
}
</style>
