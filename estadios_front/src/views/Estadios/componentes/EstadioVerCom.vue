<template>
  <div class="container-fluid">
    <!-- INICIO DE LA MODAL -->
    <div
      class="modal fade"
      id="exampleModal"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">
              Eliminar Estadio
            </h5>
            <button
              type="button"
              class="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body text-center">
            <p>¿Desea eliminar este estadio?</p>
          </div>
          <div class="modal-footer d-flex justify-content-center">
            <button
              type="button"
              class="btn btn-secondary"
              data-dismiss="modal"
            >
              Cerrar
            </button>
            <button type="button" class="btn boton-eliminar-estadio">
              Eliminar
            </button>
          </div>
        </div>
      </div>
    </div>
    <!--  FIN DEL MODAL PARA ELIMINAR -->

    <div class="container-fluid ml-0 mt-5 d-flex align-items-center">
      <label class="titulo_estadio w-100"
        >Wembley Stadium
        <hr id="hr_decorativo" />
        <hr id="hr_peque" />
      </label>

      <div class="container-fluid d-flex" style="justify-content: center">
        <button
          class="btn boton-accion mr-2"
          @click="editarEstadio"
          data-toggle="tooltip"
          title="Editar"
          data-placement="bottom"
        >
          <img
            src="/assets/1. Estadios/Iconos/icon - Editar.svg"
            alt=""
            srcset=""
            
          />
        </button>
        <button
          class="btn boton-accion"
          data-toggle="tooltip"
          title="Eliminar"
          data-placement="bottom"
        >
          <img
            src="/assets/1. Estadios/Iconos/icon - Eliminar.svg"
            alt=""
            srcset=""
            data-toggle="modal"
            data-target="#exampleModal"
          />
        </button>
      </div>
    </div>
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-6">1 of 2</div>
        <div class="col-md-6">
          <div class="container">
            <label class="titulo_pais w-100"
              >Londres, Inglaterra
              <hr id="hr_pais" />
              <hr id="hr_peque_pais" />
            </label>
            <label class="titulo_acerca w-100">Acerca </label>
            <label class="descripcion_acerca w-100"
              >Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit
              pariatur ut deleniti nobis? Fuga quos nihil labore nemo eos, et
              ullam! Magni eum reprehenderit aliquam nihil dicta tempore
              nesciunt quas? Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Fuga ad omnis at. Obcaecati animi laudantium voluptatem
              dolore est nemo repudiandae modi vel magni, accusamus alias dicta
              amet ex eligendi inventore!
            </label>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods:{
    editarEstadio(){
      this.$router.push({name:'EstadiosEditar'});
    }
  }
};
</script>

<style scoped>
cd .titulo_estadio,
.titulo_pais,
.titulo_acerca,
.descripcion_acerca {
  font-family: "Gilroy";
}
.titulo_estadio {
  font-weight: bold;
  font-size: 70px;
}
.titulo_pais {
  font-size: 30px;
}
.titulo_acerca {
  font-weight: bold;
  font-size: 30px;
}
.descripcion_acerca {
  font-size: 18px;
}
#hr_pais {
  height: 5px;
  width: 23%;
  margin-top: 0px;
  margin-left: 0px;
  margin-right: 0;
  border-radius: 5px;
  background: #7358fa 0% 0% no-repeat padding-box;
  opacity: 3;
}

#hr_peque_pais {
  height: 5px;
  width: 3%;
  margin-top: -23px;
  margin-left: 170px;

  border-radius: 5px;
  background: #7358fa 0% 0% no-repeat padding-box;
  opacity: 3;
}

#hr_decorativo {
  height: 5px;
  width: 28%;
  margin-top: 0px;
  margin-left: 0px;
  margin-right: 0;
  border-radius: 5px;
  background: #ffd849 0% 0% no-repeat padding-box;
  opacity: 3;
}

#hr_peque {
  height: 5px;
  width: 5%;
  margin-top: -23px;
  margin-left: 230px;

  border-radius: 5px;
  background: #ffd849 0% 0% no-repeat padding-box;
  opacity: 3;
}

.boton-accion {
  width: 40px;
  height: 40px;
  margin-left: 0px;
  background: #755bfa 0% 0% no-repeat padding-box;
  background-position: center center;
  border-radius: 12px;
  display: flex;

  align-items: center;
  justify-content: center;
}


.boton-eliminar-estadio {
  width: 90px;
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

.boton-eliminar-estadio:hover {
  box-shadow: 0 2px 8px 0 rgba(115, 88, 250, 0.4),
    0 10px 30px 0 rgba(134, 111, 247, 0.19);
  color: #fff;
  text-decoration-line: none;
}


</style>
