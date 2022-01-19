<template>
  <div class="container-fluid admins m-0 mt-3 ml-0">
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
      <button class="btn btn-guardar pr-2" @click="editarAdministrador">Guardar</button>
    </div>
    <div class="container contenido_formulario mt-4">
      <div class="row ml-0">
        <div class="form-group col-sm-12 col-md-2 anadir_img">
          <slim-cropper :options="slimOptions" id="estilo_subir_img">
            <input type="file" name="slim" id="estilo_subir_img" />
          </slim-cropper>
        </div>
        <div class="form-group col-sm-8 col-md-4">
          <label for="inputState" class="titulo_form">Nombres</label>
          <input
            type="text"
            placeholder="Nombres"
            v-model="administrador.name"
            class="cuadros_input"
          />
          <br />

          <label for="inputState" class="titulo_form">Apellidos</label>
          <input type="text" v-model="administrador.last_name" class="cuadros_input" /> <br />

          <label for="inputState" class="titulo_form">Correo electrónico</label>
          <input type="email" v-model="administrador.email" class="cuadros_input" />

          <label for="inputState" class="titulo_form">Contraseña</label>
          <input type="password" v-model="administrador.password" class="cuadros_input" />
        </div>

        <div class="form-group col-sm-8 col-md-4">
          <label for="inputState" class="titulo_form"
            >Acerca del administrador</label
          >
          <textarea
            cols="30"
            rows="10"
            class="cuadros_txtArea"
            v-model="administrador.acerca"
          ></textarea>

          <label for="inputState" class="titulo_form">Teléfono celular</label>
          <input type="text" v-model="administrador.phone" class="cuadros_input" /> <br />

          <label for="inputState" class="titulo_form">Repetir contraseña</label>
          <input type="password" v-model="administrador.repassword" class="cuadros_input" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
const ENDPOINT_PATH = "http://127.0.0.1:8000/api/administrador/";
export default {
  created() {
    this.$store.commit("SET_LAYOUT", "principal-layout");
    this.listarAdministrador();
  },
  data() {
    return {
      administrador:[],
      id:0,
      slimOptions: {
        label: "Añadir imagen",
      },
    };
  },
  methods: {
    async listarAdministrador() {
       try {
        const { data } = await axios.get(ENDPOINT_PATH + "administrador/"+this.$route.params.id);
        this.administrador = data;
        console.log(this.administrador);
      } catch (error) {
        console.log(error);
      }
    },
    async editarAdministrador(){
      const id=this.administrador.id;
     let payload = {
        name: this.administrador.name,
        last_name:this.administrador.last_name,
        acerca:this.administrador.acerca,
        email:this.administrador.email,
        phone:this.administrador.phone,
        password:this.administrador.password,
        repassword:this.administrador.repassword,        
      };
      
      console.log(payload);      
      try {
        const { data } = await axios.put(
          ENDPOINT_PATH + "editar_administrador/" + id,
          payload,
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: "Bearer " + localStorage.getItem("access_token"),
            },
          }
        );
        this.data = data;
        if (this.data) {
          this.$router.push({name:'Administradores'});
        }else{
          console.log("No se pudo actualizar")
        }
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>

<style scoped>

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
