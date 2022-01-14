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
      <button class="btn btn-guardar pr-2" @click="register">Guardar</button>
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
            />
            <br />

            <label for="inputState" class="titulo_form">Apellidos</label>
            <input
              type="text"
              v-model="last_name"
              placeholder="last_name"
              class="cuadros_input"
            />
            <br />

            <label for="inputState" class="titulo_form"
              >Correo electrónico</label
            >
            <input
              type="email"
              v-model="email"
              placeholder="Correo electrónico"
              class="cuadros_input"
            />

            <label for="inputState" class="titulo_form">Contraseña</label>
            <input
              type="password"
              v-model="password"
              placeholder="contraseña"
              class="cuadros_input"
            />
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
            ></textarea>

            <label for="inputState" class="titulo_form">Teléfono celular</label>
            <input
              type="text"
              v-model="phone"
              placeholder="Teléfono celular"
              class="cuadros_input"
            />
            <br />

            <label for="inputState" class="titulo_form"
              >Repetir contraseña</label
            >
            <input
              type="password"
              v-model="repassword"
              placeholder="Repetir contraseña"
              class="cuadros_input"
            />
          </div>
        </div>
      </form>
    </div>
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

    slimOptions: {
      label: "Añadir imagen",
    },
  }),
  /* data() {
    return {

    }; */

  methods: {
    async register() {
      let payload = {
        name: this.name,
        last_name: this.last_name,
        phone: this.phone,
        acerca: this.acerca,
        email: this.email,
        password: this.password,
        img: this.$refs.img_admin.instanciaCrop.dataBase64.output.image,
      };
      try {
        if (this.password == this.repassword) {
          await axios
            .post(ENDPOINT_PATH + "register", payload, {
              headers: {
                "Content-Type": "application/json",
                Authorization: "Bearer " + localStorage.getItem("access_token"),
              },
            })
            .then((response) => {
              this.data = response.data.data;
              this.$router.push({ name: "Administradores" });
            });
        } else {
          console.log("contraseñas no coinciden");
        }
      } catch (error) {
        console.log("No se pudo realizar");
      }
    },
    
    VerAdministrador() {
      this.$router.push({ name: "AdministradorVer" });
    },
  },
};
</script>




<style scoped>
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
