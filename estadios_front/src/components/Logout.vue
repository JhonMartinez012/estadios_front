<template>
<h1></h1>
</template>

<script>
import {store} from "../store"
export default {
  mounted() {
    localStorage.removeItem("access_token");
    store.commit("logoutUser");
    this.$router.push({ name: "Login" });
  },
};
</script>

<style></style>
