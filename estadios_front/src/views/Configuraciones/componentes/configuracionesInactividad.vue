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
        <input type="text" class="form-control inputt" placeholder="concierto"/>
      </div>
      <div class="form-group col-lg-3 col-md-6">
        <button class="btn btn-accion"><img src="/assets/1. Estadios/Iconos/icon - Eliminar.svg" title="Eliminar" alt=""></button>
        <button class="btn btn-accion"><img src="/assets/1. Estadios/Iconos/icon - Editar.svg" title="Editar" alt=""></button>
        <button class="btn btn-contador">1</button>
      </div>
    </div>

    <div class="form-row">
      <div class="form-group col-lg-3 col-md-6 col-sm-12">
        <input type="text" class="form-control inputt" placeholder="cambio de terreno"/>
      </div>
      <div class="form-group col-lg-3 col-md-6">
        <button class="btn btn-success">crear</button>
      </div>
    </div>

    <div class="form-row">
      <div class="form-group col-lg-3 col-md-6 col-sm-12">
        
        <input type="text" class="form-control inputt" placeholder="Mantenimiento" />
      </div>
      <div class="form-group col-lg-3 col-md-6">
        <button class="btn btn-accion"><img src="/assets/1. Estadios/Iconos/icon - Eliminar.svg" title="Eliminar" alt=""></button>
        <button class="btn btn-accion"><img src="/assets/1. Estadios/Iconos/icon - Editar.svg" title="Editar" alt=""></button>
        <button class="btn btn-contador">1</button>
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

.btn-accion {
  width: 40px;
  height: 40px;
  background: #755bfa 0% 0% no-repeat padding-box;
  border-radius: 15px;
  opacity: 1;
  
}

.btn-contador{
  width: 40px;
  height: 40px;
  background: #DFE4E8 0% 0% no-repeat padding-box;
  border-radius: 15px;
}
</style>
