<template>
  <div class="container contenido_formulario mt-4">
    <form>
      <div class="row">
        <div class="form-group col-sm-12 col-md-4 anadir_img">
          <img
            src="../assets/img_login/user-circle-regular.svg"
            id="estilo_subir_img"
            alt=""
            srcset=""
          />
        </div>
        <div class="form-group col-sm-8 col-md-4">
          <label for="inputState" class="titulo_form">
            <img
              src="../assets/1. Estadios/Iconos/Icon - correo.svg"
              class="iconos_ver_admin"
            />
            garcia.leandro@gmail.com
          </label>

          <label for="inputState" class="titulo_form">
            <img
              src="../assets/1. Estadios/Iconos/Icon - telefono.svg"
              class="iconos_ver_admin"
            />
            +57 300 123 4567
          </label>
          <label for="inputState" class="titulo_form">
            <img
              src="../assets/1. Estadios/Iconos/icon - pass.svg"
              class="iconos_ver_admin"
            />
            dasdfasdfasdf
          </label>

          <label for="" class="title_acerca_admin"> Acerca de "Administrador"</label>

          <label for="inputState" class="descrip_acerca_admin">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Et error 
            commodi omnis eaque cumque, sunt dolore magnam, esse iste praesentium 
            voluptas ad beatae! Ex, enim quaerat ut et officia recusandae.
          </label>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      slimOptions: {
        label: "Añadir imagen",
      },
    };
  },
};
</script>

<style></style>
