<template>
  <div class="administradores">
    <div class="row">
      <div
        class="col-lg-2 col-md-4 d-flex justify-content-center align-items-center admins mb-3"
        v-for="administrador in administradores"
        :key="administrador.id"
      >
        <div class="form-group admin-info">
          <router-link
            :to="{
              name: 'AdministradorVer',
              params: { id: administrador.id },
            }"
          >
            <img
              class="img_admin"
              width="120px"
              height="120px"
              :src="administrador.img"
              alt=""
              srcset=""
              data-toggle="tooltip"
              :title="administrador.acerca"
              data-placement="bottom"
            />

            <div class="form-group mt-2">
              <label class="info_admin tres_puntos" for="">{{
                administrador.name + " " + administrador.last_name
              }}</label>
              <div class="d-flex">
                <div class="lineaT_1"></div>
                <div class="lineaT_2"></div>
              </div>
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
import axios from "axios";
const ENDPOINT_PATH = "http://127.0.0.1:8000/api/administrador/";
export default {
  created() {
    this.listarAdministradores();
  },
  updated() {
    $('[data-toggle="tooltip"]').tooltip({
      trigger: "hover",
    });
  },
  data: () => ({
    administradores: [],
  }),
  methods: {
    async listarAdministradores() {
      try {
        const { data } = await axios.get(ENDPOINT_PATH + "administradores");
        this.administradores = data;
      } catch (error) {
        console.log(error);
      }
    },
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
.tres_puntos {
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
}
.admins {
  width: 400px;
  /* height: 270px; */
}
.admin-info {
  width: 125px;
  height: 120px;
  margin-left: 60px;
  margin-top: 20px;
  border-radius: 35px;
  background-color: #f6f9fb;
}
.img_admin {
  border-radius: 35px;
}

.admin-info .img_admin:hover {
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.4), 0 10px 35px 0 rgba(0, 0, 0, 0.19);
  color: #f6f9fb;
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
.lineaT_1 {
  margin-left: 15px;
  width: 200px;
  height: 5px;
  background: #ffd53d;
  border-radius: 100px;
  margin-top: -10px;
  margin-bottom: 10px;
}

.lineaT_2 {
  width: 15px;
  height: 5px;
  margin-left: 5px;
  background: #ffd53d;
  border-radius: 100px;
  margin-top: -10px;
  margin-bottom: 10px;
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
