<template>
  <div class="container-fluid cont-principal">
     <nav aria-label="breadcrumb">
      <ol class="breadcrumb">
        <li class="breadcrumb-item">
          <router-link :to="{ name: 'Estadios' }" id="mini_title">
            Estadios</router-link
          >
        </li>
        <li class="breadcrumb-item active estilo_page" aria-current="page">Editar estadio</li>
      </ol>
    </nav>
    

    <div class="container-fluid ml-0">
      <label class="parrafo font-weight-bold ml-0">Editar Estadio </label>
      <a type="button" class="btn btn-guardar pr-2">Guardar</a>
    </div>

    <div class="container-fluid mt-4 ml-0">
      <div class="row">
        <div class="col-7 inner">
          <label class="titulo">Informacion general</label>
          <div class="form-row mt-2 contenido">
            <div class="form-group col-md-6 col-sm-12 inner">
              <p for="inputEmail4" class="p-titulo">Nombre del estadio</p>
              <input
                type="text"
                v-model="estadio_name"
                class="form-control texto-nombre"
                id=""
                placeholder="Nombre"
              />
              <p for="inputEmail4" class="p-titulo">Acerca del estadio</p>
              <textarea
                v-model="estadio_info"
                cols="30"
                rows="10"
                placeholder="Acerca"
                class="acercaEstadio"
              ></textarea>
            </div>
            <div class="form-group col-md-6 inner">
              <p for="inputPassword4" class="p-titulo">pais</p>
              <select v-model="estadio_pais" class="texto-select">
                <option value="">seleccionar</option>
              </select>
              <p for="" class="p-titulo">ciudad</p>
              <select v-model="estadio_ciudad" class="texto-select">
                <option value="">seleccionar</option>
              </select>
              <p for="" class="p-titulo">Tipo de terreno</p>
              <select v-model="estadio_terreno" class="texto-select">
                <option value="">seleccionar</option>
              </select>
            </div>
          </div>
        </div>

        <div class="col-5 inner">
          <div class="agregar-imagen">
            <label class="titulo w-100">Imagenes</label>
            <!-- <slim-cropper ref="slim-cropper" :options="slimOptions" style="width:120px;height:150px">
               
             </slim-cropper> -->

            <slim-cropper :options="slimOptions">
              <input type="file" name="slim" />
            </slim-cropper>
          </div>
          <div class="container mt-4 inner">
            <div class="row">
              <div
                class="col-md-6 col-lg-4 mt-0 styles_img_pre"
                v-for="(estadio, index) in estadios"
                :key="index"
              >
                <img
                  :src="estadio.img_estadio"
                  alt=""
                  class="mt-4 w-100"
                  width="cover"
                  height="100px"
                />
                <div class="boton_accion">
                  <button class="btn_accion_eliminar">
                    <img
                      src="/assets/1. Estadios/Iconos/icon - Eliminar.svg"
                      width="cover"
                      height="20px"
                      alt=""
                      srcset=""
                    />
                  </button>
                  <button class="btn_accion_editar">
                    <img
                      src="/assets/1. Estadios/Iconos/icon - editar.svg"
                      width="cover"
                      height="20px"
                      alt=""
                      srcset=""
                    />
                  </button>
                </div>
              </div>
            </div>
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
  data() {
    return {
      estadios: [
        {
          nombre: "Wembley Stadium",
          img_estadio:
            "/assets/1. Estadios/Imágenes de estadios/1.1 wembley-stadium.jpg",
        },
        {
          nombre: "Madison Square Garden",
          img_estadio:
            "/assets/1. Estadios/Imágenes de estadios/2.1 Madison-Square-Garden.jpg",
        },
        {
          nombre: "Rogers center",
          img_estadio:
            "/assets/1. Estadios/Imágenes de estadios/1.4 wembley-stadium.jpg",
        },
        {
          nombre: "Rogers center",
          img_estadio:
            "/assets/1. Estadios/Imágenes de estadios/5.1 Rogers Centre.jpg",
        },
      ],
      slimOptions: {
        label: "Subir imagen",
      },
    };
  },
  components: {},
};
</script>
<style >

.cont-principal {
  margin-top: 90px;
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
  margin-top: 30px;
  text-align: left;
  margin-inline-end: 30px;
  font-weight: bold;
  font-size: 35px;
  color: #000000;
  margin-right: 880px;
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

/* ESTILOS PARA LOS FORMULARIOS */
.titulo {
  height: 35px;
  text-align: left;
  font-weight: bold;
  font-size: 30px;
  letter-spacing: 0px;
  color: #000000;
}

.agregar-imagen {
  position: relative;
}

.posicion {
  position: absolute;
  width: 40px;
  height: 40px;
  padding: 0;
  background-color: #755bfa;
  border-radius: 13px;

  z-index: 2;
  right: 50%;
  bottom: 0px;
}
.icon-anadir {
  width: 16px;
  height: 16px;
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
  width: 345px;
  height: 171px;
  background: #ffffff 0% 0% no-repeat padding-box;
  border: 1px solid #dfe4e8;
  border-radius: 8px;

  padding: 1px 10px;
  font-size: 15px;
  font-family: "Rubik";
  text-align: left;
  letter-spacing: 0px;
  color: #000000;
}

.acercaEstadio::placeholder {
  font-size: 15px;
  font-family: "Rubik";
  text-align: left;
  letter-spacing: 0px;
  color: #dfe4e8;
}

.texto-nombre {
  width: 345px;
  height: 40px;
  background: #ffffff 0% 0% no-repeat padding-box;
  border: 1px solid #dfe4e8;
  border-radius: 8px;
  opacity: 1;
}
.texto-nombre::placeholder {
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
  min-width: 360px;
  padding: 15px;
}

.styles_img_pre {
  position: relative;
}

.btn_accion_eliminar {
  width: 36px;
  height: 36px;
  background-color: black;
  border-radius: 40px;
  opacity: 0.6;
  margin-right: 10px;
}

.btn_accion_editar {
  width: 36px;
  height: 36px;
  background-color: black;
  border-radius: 40px;
  opacity: 0.4;
  padding: 0;
}
.boton_accion {
  position: absolute;
  z-index: 2;
  padding: 0px;
  bottom: 10px;
  right: 86px;
}
</style>
