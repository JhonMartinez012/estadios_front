<template>
  <div
    class="container mt-5 col-md-8 col-lg-8 col-xl-8"
  >
    <div class="row borde_redondo1 borde_redondo2 sombra align-items-stretch">
      <div
        class="col bg borde_redondo1 d-none d-md-block d-lg-block col-lg-6 col-xl-6"
      >
      </div>

      <div class="col borde_redondo2 bg-white p-5 align-items-center col-lg-6 col-sm-12">
        <div class="text-center">
          <img
            class="img-responsive"
            width="100%"
            src="/assets/1. Estadios/Logo/logo-CX stadium 1.svg"
            alt=""
            srcset=""
          />
        </div>

        <!------------ LOGIN ----------------->
        <form action="">
          <h2 class="fw-bold text-center pt-5 mb-2 gilroy">Iniciar sesión</h2>
          <div class="mb-4 text-center">
            <!-- <input type="text" class="form-control is-valid" id="validationServer01" value="Mark" required>
            <div class="valid-feedback">
              Looks good!
            </div> -->

            <input
              type="email"
              class="icon-placeholder is-valid"
              placeholder="Usuario"
              id="user"
            />
          </div>
          <div class="mb-4 text-center">
            <input
              type="password"
              class="icon-placeholder"
              placeholder=" Contraseña"
              id="password"
            />
          </div>
          <div class="d-grid justify-content-center">           
            
            <router-link :to="{name:'Estadios'}" class="btn boton">Ingresar</router-link>
          </div>
        </form>
        <div class="text-center pt-4">
          <img
            src="/assets/1. Estadios/Logo/logo-coex.svg"
            alt=""
            srcset=""
            id="logo_inferior"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  created() {
    this.$store.commit("SET_LAYOUT", "login-layout");
  },
};
</script>

<style scoped>

h2 {
  text-align: center;
  font: normal normal bold 30px "Gilroy";
  letter-spacing: 0px;
  color: #637381;
}

.bg {
  background-image: url("/assets/1. Estadios/Imágenes de estadios/Estadio login.jpg");
  background-position: center center;
}
.sombra{
  box-shadow: 2px 16px 20px gray;
}
.boton {  
  width: 100%;
  height: 40px;
  background: transparent
    linear-gradient(90deg, var(--principal-estadio) 0%, #866ff7 100%) 0% 0%
    no-repeat padding-box;
  background: transparent linear-gradient(90deg, #7358fa 0%, #866ff7 100%) 0% 0%
    no-repeat padding-box;
  border-radius: 12px;

  color: #ffffff;
  text-align: center;
  font: normal normal medium 18px/21px "Gilroy";
  letter-spacing: 0px;
  color: #ffffff;

  opacity: 1;
}
.borde_redondo1{

  border-radius: 12px 0 0 12px;
}
.borde_redondo2{
  border-radius: 12px 12px 12px 12px;
}

#user, #password{
  top: 415px;  
  width: 100%;
  height: 40px;

  padding: 0.25em 0.6em;

  background: #ffffff 0% 0% no-repeat padding-box;
  border: 1px solid #dfe4e8;
  background: #ffffff 0% 0% no-repeat padding-box;
  border: 1px solid #dfe4e8;
  border-radius: 8px;
  /* estilos de las letras de los input */
  color: #637381;
  text-align: center ;
  font-family: normal "Rubik";
  font-size: 17px;
  letter-spacing: 0px;
  color: hsl(208, 13%, 45%);  
  opacity: 1;
}
#user{
  background-image: url('/assets/img_login/user-circle-regular.svg');
  background-size: 15px 15px;
  background-repeat: no-repeat;
  background-position: 8px center;
}
#password{
  background-image: url('/assets/img_login/unlock-solid.svg');
  background-size: 15px 15px;
  background-repeat: no-repeat;
  background-position: 8px center;
  
}
.icon-placeholder:focus{
  outline: none;
}

#logo_inferior {
  top: 700px;
  width: 100px;
  height: 40px;
  opacity: 1;
}
.img-responsive{
  max-width: 200px;
}
</style>
