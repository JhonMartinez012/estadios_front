import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Login',
    component: () => import(/* webpackChunkName: "about" */ '../views/Login.vue')
  },
  {
    path: '/estadios',
    name: 'Estadios',
    
    component: () => import(/* webpackChunkName: "about" */ '../views/Estadios.vue')
  },
  {
    path: '/estadiosCrear',
    name: 'EstadiosCrear',
    
    component: () => import(/* webpackChunkName: "about" */ '../views/EstadiosCrear.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
