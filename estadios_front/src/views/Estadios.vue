<template>
  <div class="container-fluid">
    <div class="about mt-3" id="about">
      <p><a href="/estadios" id="mini_title">Estadios </a> ></p>

      <div class="container ml-0">
        <label class="parrafo font-weight-bold ml-0">Estadios CX</label>
        <router-link :to="{name:'EstadiosCrear'}" class="btn btn-crear pr-2"> Crear estadio </router-link>
      </div>

      <estadios></estadios>
    </div>
  </div>
</template>
<script>
import Estadios from "../components/EstadiosCom.vue";
export default {
  created() {
    this.$store.commit("SET_LAYOUT", "principal-layout");
  },
  components: {
    estadios: Estadios,
  },
};
</script>
<style>
body {
  font-family: "Gilroy";
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
  margin-right: 900px;
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

.btn-crear:hover{
  box-shadow: 0 2px 8px 0 rgba(115, 88, 250, 0.4), 0 10px 30px 0 rgba(134, 111, 247, 0.19);
  color: #fff;
  text-decoration-line: none;
}
</style>
