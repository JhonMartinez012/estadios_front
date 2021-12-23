<template>
  <div class="container-fluid admins m-0 mt-3">
    <p>
      <a href="/administradores" id="mini_title">Administradores </a> > Editar administrador
    </p>
    <div class="container titulo_formulario">
      <label class="parrafo font-weight-bold ml-0">Editar Administrador</label>
      <!-- <router-link :to="{name:'EstadiosCrear'}" class="btn btn-crear pr-2"> Crear estadio </router-link> -->
      <button class="btn btn-guardar pr-2">Guardar</button>
    </div>
    <div class="container contenido_formulario mt-4">
      <form>
        <div class="row">
          <div class="form-group col-sm-12 col-md-4 anadir_img">
            <slim-cropper :options="slimOptions" id="estilo_subir_img">
              <input type="file" name="slim" id="estilo_subir_img"/>
            </slim-cropper>
          </div>
          <div class="form-group col-sm-8 col-md-4">
            <label for="inputState" class="titulo_form">Nombres</label>
            <input type="text" placeholder="Nombres"  class="cuadros_input"/> <br />

            <label for="inputState" class="titulo_form">Apellidos</label>
            <input type="text"  class="cuadros_input"/> <br />

            <label for="inputState" class="titulo_form">Correo electrónico</label>
            <input type="email"  class="cuadros_input">

            <label for="inputState" class="titulo_form">Contraseña</label>
            <input type="password"  class="cuadros_input">
          </div>

          <div class="form-group col-sm-8 col-md-4">
            <label for="inputState" class="titulo_form">Acerca del administrador</label>
            <textarea  cols="30" rows="10" class="cuadros_txtArea"></textarea>

            <label for="inputState" class="titulo_form">Apellidos</label>
            <input type="text"  class="cuadros_input"/> <br />

            <label for="inputState" class="titulo_form">Repetir contraseña</label>
            <input type="password"  class="cuadros_input">
          </div>
        </div>
      </form>
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
};
</script>

<style>
body {
  background-color: #f6f9fb;
}
.admins {
  margin-left: 105px;
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
  max-width: 1382px;
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
  width: 170px;
  height: 120px;
  margin-top: 55px;
}
#estilo_subir_img {
  background: #dfe4e8 0% 0% no-repeat padding-box;
  border-radius: 45px;
}

.titulo_form{
  color: #637381 ;
  text-align: left;
  margin-left: 20px;
  font-family: "Rubik";
  font-size: 18px;
  width: 100%;
  margin-bottom: 0;
  margin-top: 15px;
}

.cuadros_input ,.cuadros_txtArea{
width: 100%;
height: 50px;
background: #FFFFFF 0% 0% no-repeat padding-box;
border: 1px solid #DFE4E8;
border-radius: 8px;
padding: 1px 20px;

font: normal normal normal 16px/20px Rubik;
letter-spacing: 0px;
color: #DFE4E8;
}
.cuadros_input::placeholder{
  color: #DFE4E8 ;
  text-align: left;
  margin-left: 20px;
}
.cuadros_txtArea{
  height: 135px;
}
</style>
