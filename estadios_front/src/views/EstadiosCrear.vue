<template>
  <div class="container-fluid">
    <div class="about mt-3" id="about">
      <p><a href="/estadios" id="mini_title">Estadios </a> > Crear estadio</p>

      <div class="container ml-0">
        <label class="parrafo font-weight-bold ml-0">Crear Estadio </label>
        <a type="button" class="btn btn-crear pr-2">Guardar</a>
      </div>

      <div class="container-fluid mt-4">
        <div class="row contenido">
          <div class="col-7 inner">
            <label class="titulo">Informacion general</label>
            <div class="form-row mt-4">
              <div class="form-group col-md-7 inner">
                <p for="inputEmail4" class="p-titulo">Nombre del estadio</p>
                <input
                  type="text"
                  class="form-control texto-nombre"
                  id=""
                  placeholder="Nombre"
                />
                <p for="inputEmail4" class="p-titulo">Acerca del estadio</p>
                <textarea
                  name=""
                  id=""
                  cols="30"
                  rows="10"
                  placeholder="Acerca"
                  class="acercaEstadio"
                ></textarea>
              </div>
              <div class="form-group col-md-5 inner">
                <p for="inputPassword4" class="p-titulo">pais</p>
                <select name="" id="" class="texto-select">
                  <option value="">seleccionar</option>
                </select>
                <p for="" class="p-titulo">ciudad</p>
                <select name="" id="" class="texto-select">
                  <option value="">seleccionar</option>
                </select>
                <p for="" class="p-titulo">Tipo de terreno</p>
                <select name="" id="" class="texto-select">
                  <option value="">seleccionar</option>
                </select>
              </div>
            </div>
          </div>

          <div class="col-5 inner">
            <label class="titulo">Imagenes</label>
            <button class="btn btn-success">+</button>
          </div>
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
  components: {},
};
</script>
<style>
body {
  background-color: #f6f9fb;
}
.about {
  margin-left: 100px;
}

h1 {
  font-size: 35px;
  margin-top: 25px;
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
.parrafo {
  margin-top: 50px;
  text-align: left;
  margin-inline-end: 30px;
  font-weight: bold;
  font-size: 35px;
  color: #000000;
  margin-right: 880px;
}
.btn-crear {
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

.btn-crear:hover {
  box-shadow: 0 2px 8px 0 rgba(115, 88, 250, 0.4),
    0 10px 30px 0 rgba(134, 111, 247, 0.19);
  color: #fff;
  text-decoration-line: none;
}

/* ESTILOS PARA LOS FORMULARIOS */
.titulo {
  width: cover;
  height: 35px;

  text-align: left;
  font-weight: bold;
  font-size: 30px;
  letter-spacing: 0px;
  color: #000000;
}
/* estilo de la caja del nombre del estadio */
.p-titulo {
  width: 117px;
  height: 15px;
  margin-top: 22px;
  margin-bottom: 3px;
  margin-left: 12px;
  font-family: "Rubik";
  font-size: 13px;
  letter-spacing: 0px;
  color: #637381;
}
.acercaEstadio {
  width: 360px;
  height: 171px;
  background: #ffffff 0% 0% no-repeat padding-box;
  border: 1px solid #dfe4e8;
  border-radius: 8px;  

  font-size: 15px;
  font-family: "Rubik";
  text-align: left;
  letter-spacing: 0px;
  color: #000000;
}

.acercaEstadio::placeholder{
  font-size: 15px;
  font-family: "Rubik";
  text-align: left;
  letter-spacing: 0px;
  color: #dfe4e8;
}

.texto-nombre {
  width: 360px;
  height: 40px;
  background: #ffffff 0% 0% no-repeat padding-box;
  border: 1px solid #dfe4e8;
  border-radius: 8px;
  opacity: 1;
}
.texto-nombre::placeholder{
  font-size: 15px;
  font-family: "Rubik";
  text-align: left;
  letter-spacing: 0px;
  color: #dfe4e8;
}

.texto-select {
  width: 230px;
  height: 40px;
  background: #ffffff 0% 0% no-repeat padding-box;
  border: 1px solid #dfe4e8;
  border-radius: 8px;
  opacity: 1;
}


.contenido {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
}
.inner {
  margin: 5px;
  flex: 1;
  min-width: 350px;
  background: #ddd;
  padding: 20px;
}
</style>
