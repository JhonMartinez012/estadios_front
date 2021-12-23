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
    path: '/estadios/crear',
    name: 'EstadiosCrear',
    
    component: () => import(/* webpackChunkName: "about" */ '../views/EstadiosCrear.vue')
  },
  {
    path: '/administradores',
    name: 'Administradores',
    
    component: () => import(/* webpackChunkName: "about" */ '../views/Administradores.vue')
  },
  {
    path: '/administradores/crear',
    name: 'AdministradoresCrear',
    
    component: () => import(/* webpackChunkName: "about" */ '../views/AdministradoresCrear.vue')
  },
  {
    path: '/administradores/ver',
    name: 'AdministradorVer',
    
    component: () => import(/* webpackChunkName: "about" */ '../views/AdministradorVer.vue')
  },
  {
    path: '/administradores/id-1/editar',
    name: 'AdministradorEditar',
    
    component: () => import(/* webpackChunkName: "about" */ '../views/AdministradorUpdate.vue')
  }
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
