import Vue from 'vue'
import Vuex from 'vuex'
import Auth from './auth'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    layout: 'login-layout'
  },
  mutations: {
    SET_LAYOUT (state, newLayout) {
      state.layout = newLayout
    }
  },
  modules: {
    Auth,
  }
})
