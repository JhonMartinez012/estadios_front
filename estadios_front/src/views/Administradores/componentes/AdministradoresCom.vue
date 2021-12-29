<template>
  <div class="administradores">
    <div class="row">
      <div
        class="col-lg-2 col-md-4 d-flex justify-content-center align-items-center admins"
        v-for="(administrador, index) in administradores"
        :key="index"
      >
        <div class="form-group admin-info">
          <router-link
            :to="{ name: '' }"
            data-toggle="tooltip"
            :title="administrador.acerca"
            data-placement="bottom"
          >
            <img
              width="120px"
              height="120px"
              :src="administrador.foto_perfil"
              alt=""
              srcset=""
            />

            <div class="form-group mt-2">
              <label class="info_admin" for="">{{
                administrador.nombre
              }}</label>
              <hr id="hr_decorativo" />
            </div>
          </router-link>
        </div>
      </div>
    </div>
  </div>
  <!-- <div class="sin_admins">
        <div>
      <img
        src="/assets/1. Estadios/Iconos/icon large - admin.svg"
        alt=""
        srcset=""
      />
      </div>
      <div>
      <h1>Soy el componente de administradores</h1>
      </div>
    </div>   -->
</template>

<script>
export default {
  data() {
    return {
      administradores: [
        {
          nombre: "Leandro Garcia",
          foto_perfil: "/assets/1. Estadios/Iconos/icon - espectadores.svg",
          acerca:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit." +
            "Molestias, unde quasi. Dolore, nihil excepturi? Laborum," +
            "magni saepe! Fugiat soluta eius harum magnam1.",
        },
        {
          nombre: "Juliana Garcia",
          foto_perfil: "/assets/1. Estadios/Iconos/icon - usuario.svg",
          acerca:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit." +
            "Molestias, unde quasi. Dolore, nihil excepturi? Laborum," +
            "magni saepe! Fugiat soluta eius harum magnam2.",
        },
        {
          nombre: "Miguel Garcia",
          foto_perfil: "/assets/1. Estadios/Iconos/icon - zapatillas.svg",
          acerca:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit." +
            "Molestias, unde quasi. Dolore, nihil excepturi? Laborum," +
            "magni saepe! Fugiat soluta eius harum magnam3.",
        },
        {
          nombre: "Daniela Garcia",
          foto_perfil: "/assets/1. Estadios/Iconos/icon - espectadores.svg",
          acerca:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit." +
            "Molestias, unde quasi. Dolore, nihil excepturi? Laborum," +
            "magni saepe! Fugiat soluta eius harum magnam4.",
        },
        {
          nombre: "Sandra Garcia",
          foto_perfil: "/assets/1. Estadios/Iconos/icon - termo.svg",
          acerca:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit." +
            "Molestias, unde quasi. Dolore, nihil excepturi? Laborum," +
            "magni saepe! Fugiat soluta eius harum magnam5.",
        },
        {
          nombre: "Maria Garcia",
          foto_perfil: "/assets/1. Estadios/Iconos/icon - producto.svg",
          acerca:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit." +
            "Molestias, unde quasi. Dolore, nihil excepturi? Laborum," +
            "magni saepe! Fugiat soluta eius harum magnam6.",
        },
      ],
    };
  },
};
</script>

<style scoped>
/* body {
    display: flex;
    flex-direction: column;
    height: 100vh;
  font-family: "Gilroy";
  background-color: #f6f9fb;
}
.sin_admins {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 68vh;

} */
.administradores {
  max-width: 1500px;
}

.admins {
  width: 400px;
  height: 270px;
}
.admin-info {
  width: 125px;
  height: 120px;
  margin-left: 60px;
  margin-top: 20px;
  border-radius: 35px;
  background-color: #F6F9FB;
}

.admin-info img:hover {
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.4), 0 10px 35px 0 rgba(0, 0, 0, 0.19);
  color: #F6F9FB;
  border-radius: 35px;
  text-decoration-line: none;
  width: 120px;
  height: 120px;
}

.info_admin {
  width: 180px;
  height: 24px;

  font-family: "Gilroy";
  font-size: 20px;
  letter-spacing: 0px;
  color: #000000;
}
#hr_decorativo {
  height: 5px;
  width: 80%;
  margin-top: 0px;
  border-radius: 5px;
  background: #ffd849 0% 0% no-repeat padding-box;
  opacity: 3;
}

/* body .tooltip-inner {
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
} */

/* .bs-tooltip-auto[x-placement^=bottom] .arrow::before,
  .bs-tooltip-bottom .arrow::before {
    border-bottom-color: #f00;
  } */
</style>
