import Vue from "vue";
import Vuex from "vuex";
import Auth from "./auth";

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    layout: "login-layout",
    isLoggedIn: !!localStorage.getItem("access_token"),
  },
  mutations: {
    SET_LAYOUT(state, newLayout) {
      state.layout = newLayout;
    },
    loginUser(state) {
      state.isLoggedIn = true;
    },
    logoutUser(state) {
      state.isLoggedIn = false;
    },
  },
  modules: {
    Auth,
  },
});
