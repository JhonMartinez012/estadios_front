<template>
  <img
    src="/assets/1. Estadios/Logo/logo-CX stadium 1.svg"
    alt=""
    width="40%"
  />
</template>

<script>
import { mapMutations } from "vuex";
export default {
  name: "loader",
  data() {
    return {};
  },
  created() {
    this.setLayout("login-layout");
    this.tiempoEspera();
  },
  methods: {
    ...mapMutations({
      setLayout: "SET_LAYOUT",
    }),

    tiempoEspera(){
      setTimeout(this.pasar, 5000);
    },

    pasar(){
      this.$router.push({name:'Estadios'});
    },

  },
};
</script>

<style scoped></style>
