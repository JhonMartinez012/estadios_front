import axios from "axios";
const ENDPOINT_PATH = "http://127.0.0.1:8000/api/auth/";

export default {
  /*  ************MANERA 1 DE HACER******************************* */

  /* register(name, last_name, phone, acerca, email,  password,img) {
    const user = { name, last_name, phone, acerca, email,  password,img };
    return axios.post(ENDPOINT_PATH + "register", user);
  }, */

  login(email, password) {
    const user = { email, password };
    return axios.post(ENDPOINT_PATH + "login", user);
    
  } 
  /* ************* FIN DE LA MANERA 1 *********************/

  /* ****************************** MANERA DE HACER 2 ************************/
  /* state: {
    access_token: null,
    loggingIn: false,
    loginError: null,
  },
  mutations: {
    loginStart: (state) => (state.loggingIn = true),
    loginStop: (state, errorMessage) => {
      state.loggingIn = false;
      state.loginError = errorMessage;
    },
    updateAccessToken: (state, access_token) => {
      state.accessToken = access_token;
    },
  },
  actions: {
    doLogin({ commit }, loginData) {
      commit("loginStart");

      axios
        .post(ENDPOINT_PATH + "login", {
          ...loginData,
        })
        .then((response) => {
          localStorage.setItem("access_token", response.data.token);
          commit("loginStop", null);
          commit("updateAccessToken", response.data.token);
          
        })
        .catch((error) => {
          commit("loginStop", error.response.data.error);
          commit("updateAccessToken", null);
          console.log("no entro ome ")
        });
    },
    fetchAccessToken({ commit }) {
      commit("updateAccessToken", localStorage.getItem("access_token"));
    },
  }, */

  /* * *****************************FIN DE MANERA 2 ********************** */

  /* namespaced: true,


  state: {
    token: null,
    user: null,
  },
  getters: {
    authenticated(state) {
      return state.token && state.user;
    },
    user(state) {
      return state.user;
    },
  },
  mutations: {
    SET_TOKEN(state, token) {
      state.token = token;
    },
    SET_USER(state, data) {
      state.user = data;
    },
  },
  actions: {
    async Ingresar({ dispatch }, credentials) {
      let response = await axios.post(ENDPOINT_PATH + "login", credentials);
      dispatch("attempt", response.data.access_token);
    },
    async attempt({ commit, state }, token) {
      if (token) {
        commit("SET_TOKEN", token);
      }
      if (!state.token) {
        return [];
      }
      try {
        let response = await axios.get(ENDPOINT_PATH + "me",{headers: { Authorization: `Bearer ${state.token}`}});
        commit("SET_USER", response.data);
      } catch (e) {
        commit("SET_TOKEN", null);
        commit("SET_USER", null);
      }
    },
  }, */
};
