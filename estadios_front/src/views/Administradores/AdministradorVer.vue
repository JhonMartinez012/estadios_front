<template>
  <div class="container m-0 mt-3">
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb">
        <li class="breadcrumb-item">
          <router-link :to="{ name: 'Administradores' }" id="mini_title">
            Administradores</router-link
          >
        </li>
        <li class="breadcrumb-item active estilo_page" aria-current="page">
          Nombre Administrador
        </li>
      </ol>
    </nav>
    <div class="container titulo_formulario">
      <label class="parrafo font-weight-bold ml-0"
        >Nombre Administrador
        <hr id="hr_decorativo" />
        </label>
    </div>

    <div class="container contenido_formulario mt-4">
      <div class="row mx-0">
        <div class="form-group col-sm-6 col-md-2 anadir_img">
          <img
            src="/assets/img_login/user-circle-regular.svg"
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
            >
              <img
                src="/assets/1. Estadios/Iconos/icon - Eliminar.svg"
                alt=""
                srcset=""
              />
            </button>
            <button
              class="btn boton-accion"
              @click="editarAdministrador"
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
          </div>
        </div>
        <div class="form-group col-md-5">
          <label for="inputState" class="titulo_form">
            <img
              src="/assets/1. Estadios/Iconos/Icon - correo.svg"
              class="iconos_ver_admin"
            />
            garcia.leandro@gmail.com
          </label>

          <label for="inputState" class="titulo_form">
            <img
              src="/assets/1. Estadios/Iconos/Icon - telefono.svg"
              class="iconos_ver_admin"
            />
            +57 300 123 4567
          </label>
          <label for="inputState" class="titulo_form">
            <img
              src="/assets/1. Estadios/Iconos/icon - pass.svg"
              class="iconos_ver_admin"
            />
            dasdfasdfasdf
          </label>

          <label for="" class="title_acerca_admin">
            Acerca de "Administrador"</label
          >

          <label for="inputState" class="descrip_acerca_admin">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Et error
            commodi omnis eaque cumque, sunt dolore magnam, esse iste
            praesentium voluptas ad beatae! Ex, enim quaerat ut et officia
            recusandae.
          </label>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  created() {
    this.$store.commit("SET_LAYOUT", "principal-layout");
  },
  data() {
    return {
      slimOptions: {
        label: "Añadir imagen",
      },
    };
  },
  methods: {
    editarAdministrador() {
      this.$router.push({ name: "AdministradorEditar" });
    },
  },
};
</script>

<style scoped>

.admins {
  margin-left: 105px;
}
#hr_decorativo {
  height: 5px;
  width: 25%;
  margin-left: 0px;
  border-radius: 5px;
  background: #ffd849 0% 0% no-repeat padding-box;
  opacity: 3;
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
</style>
