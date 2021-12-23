<template>
  <div class="container-fluid admins m-0 mt-3">
    <p>
      <a href="/administradores" id="mini_title">Administradores </a> > Nombre
      admin
    </p>
    <div class="container titulo_formulario">
      <label class="parrafo font-weight-bold ml-0">Nombre Administrador <hr id="hr_decorativo" /> <hr></label>
    </div>

    <administrador></administrador>
  </div>
</template>

<script>
import Administrador from "../components/VerAdministradorCom.vue";
export default {
  created() {
    this.$store.commit("SET_LAYOUT", "principal-layout");
  },

  components: {
    administrador: Administrador,
  },
};
</script>

<style>
body {
  background-color: #f6f9fb;
}
.admins {
  margin-left: 105px;
}
#hr_decorativo{
    height: 5px;
    width: 80%;
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

  margin-left: 105px;
}
.titulo_formulario {
  margin-left: 100px;
}
.contenido_formulario {
  margin-left: 105px;
  max-width: 1380px;
  min-width: 500px;
}
.parrafo {
  margin-top: 50px;
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
  width: 200px;
  height: 200px;
  margin-top: 55px;
  margin-right: 60px;
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
.descrip_acerca_admin{
   text-align: left;
  margin-left: 20px;
  margin-top: 5px;
  font: normal normal 20px/22px "Gilroy";
  letter-spacing: 0px;
  color: #000000; 
}
</style>
