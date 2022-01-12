<template>
  <div class="container-fluid">
    <div class="container-fluid estilos-container">
      <label class="parrafo font-weight-bold ml-0"
        >Motivos de Inactividad</label
      >
    </div>

    <div class="form-row">
      <div class="form-group col-lg-3 col-md-6 col-sm-12">
        <label for="inputMotivo">Motivo</label>
        <input type="text" class="form-control inputt" placeholder="Motivo" />
      </div>
      <div class="form-group col-lg-3 col-md-6">
        <button class="btn btn-create">crear</button>
      </div>
    </div>

    <div class="form-row mt-5">
      <div class="form-group col-lg-3 col-md-6 col-sm-12">
        <input
          type="text"
          class="form-control inputt"
          placeholder="concierto"
        />
      </div>
      <div class="form-group col-lg-3 col-md-6 botones-inactividad">
        <button
          class="btn btn-accion-inactividad"
          title="Eliminar"
          alt=""
          data-toggle="tooltip"
          data-placement="bottom"
        >
          <img src="/assets/1. Estadios/Iconos/icon - Eliminar.svg" />
        </button>
        <button
          class="btn btn-accion-inactividad"
          title="Editar"
          alt=""
          data-toggle="tooltip"
          data-placement="bottom"
        >
          <img src="/assets/1. Estadios/Iconos/icon - Editar.svg" />
        </button>
        <button
          class="btn btn-contador-inactividad"
          title="Veces que se usó este motivo"
          alt=""
          data-toggle="tooltip"
          data-placement="bottom"
        >
          1
        </button>
      </div>
    </div>

    <div class="form-row">
      <div class="form-group col-lg-3 col-md-6 col-sm-12">
        <input
          type="text"
          class="form-control inputt"
          placeholder="cambio de terreno"
        />
      </div>
      <div class="form-group col-lg-3 col-md-6 botones-inactividad">
        <button class="btn btn-crear-inactividad">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="25"
            fill="#FFF"
            viewBox="0 0 22 22"
          >
            <g
              id="Icon_check-simple"
              data-name="Icon / check-simple"
              transform="translate(-1 -1)"
            >
              <path
                id="Trazado_8"
                data-name="Trazado 8"
                d="M9.56,16.79a.748.748,0,0,1-.53-.219l-4.41-4.4A.75.75,0,0,1,5.68,11.109L9.6,15.016l8.763-7.621a.75.75,0,0,1,.984,1.132l-9.29,8.08A.748.748,0,0,1,9.56,16.79Z"
              />
              <path
                id="Elipse_2471"
                data-name="Elipse 2471"
                d="M11,1.5A9.5,9.5,0,1,0,20.5,11,9.511,9.511,0,0,0,11,1.5M11,0A11,11,0,1,1,0,11,11,11,0,0,1,11,0Z"
                transform="translate(1 1)"
              />
            </g>
          </svg>
        </button>
      </div>
    </div>

    <div class="form-row">
      <div class="form-group col-lg-3 col-md-6 col-sm-12">
        <input
          type="text"
          class="form-control inputt"
          placeholder="Mantenimiento"
        />
      </div>
      <div class="form-group col-lg-3 col-md-6 botones-inactividad">
        <button
          class="btn btn-accion-inactividad"
          title="Eliminar"
          alt=""
          data-toggle="tooltip"
          data-placement="bottom"
        >
          <img src="/assets/1. Estadios/Iconos/icon - Eliminar.svg" />
        </button>
        <button
          class="btn btn-accion-inactividad"
          title="Editar"
          alt=""
          data-toggle="tooltip"
          data-placement="bottom"
        >
          <img src="/assets/1. Estadios/Iconos/icon - Editar.svg" />
        </button>
        <button
          class="btn btn-contador-inactividad"
          title="Veces que se usó este motivo"
          alt=""
          data-toggle="tooltip"
          data-placement="bottom"
        >
          1
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.estilos-container {
  font-family: "Gilroy";
  font-size: bold;
}

.parrafo {
  margin-top: 30px;
  text-align: left;
  margin-inline-end: 30px;
  font-weight: bold;
  font-size: 35px;
  color: #000000;
  margin-right: 80px;
}
.btn-create {
  width: 130px;
  height: 40px;
  font-weight: normal;
  font-size: 16px;
  background: #7358fa linear-gradient(90deg, #7358fa 0%, #866ff7 100%) 0% 0%
    no-repeat padding-box;
  border-radius: 12px;
  color: #ffff;
  align-content: flex-end;
  align-items: flex-end;
  margin-top: 30px;
}

.btn-create:hover {
  box-shadow: 0 2px 8px 0 rgba(115, 88, 250, 0.4),
    0 10px 30px 0 rgba(134, 111, 247, 0.19);
  color: #fff;
  text-decoration-line: none;
}
.inputt {
  width: 100%;
  height: 40px;
  background: #ffffff 0% 0% no-repeat padding-box;
  border: 1px solid #dfe4e8;
  border-radius: 8px;
}

.botones-inactividad {
  margin: 0px;
  width: auto;
  margin-top: 0px;
  display: flex;
  justify-content: start;
  margin-bottom: 10px;
}

.btn-accion-inactividad,
.btn-contador-inactividad,
.btn-crear-inactividad {
  width: 40px;
  height: 40px;
}

.btn-accion-inactividad {
  margin-left: 0px;
  background: #755bfa 0% 0% no-repeat padding-box;
  background-position: center center;
  border-radius: 12px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
}

.btn-crear-inactividad {
  margin: 0px;
  background: #29d884 0% 0% no-repeat padding-box;
  background-position: center center;
  border-radius: 12px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
}

.btn-contador-inactividad {
  background: #dfe4e8 0% 0% no-repeat padding-box;
  border-radius: 15px;
}
</style>
