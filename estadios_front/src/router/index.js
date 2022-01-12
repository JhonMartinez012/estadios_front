import Vue from "vue";
import VueRouter from "vue-router";
//import {store}  from "../store";

Vue.use(VueRouter);


const routes = [
  {
    path: "/",
    name: "Raiz",
    redirect: {name:'Login'},
  },
  {
    path: "/login",
    name: "Login",
    component: () => import("../views/Login.vue"),
    meta: {
      requiresAuth: false,
    },
  },
  {
    path: "/estadios",
    name: "Estadios",

    component: () => import("../views/Estadios/Estadios.vue"),
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/estadios/crear",
    name: "EstadiosCrear",

    component: () => import("../views/Estadios/EstadiosCrear.vue"),
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/estadios/id",
    name: "EstadiosVer",

    component: () => import("../views/Estadios/EstadiosVer.vue"),
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/estadios/id/editar",
    name: "EstadiosEditar",

    component: () => import("../views/Estadios/EstadiosEditar.vue"),
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/administradores",
    name: "Administradores",

    component: () => import("../views/Administradores/Administradores.vue"),
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/administradores/crear",
    name: "AdministradoresCrear",

    component: () =>
      import(
        /* webpackChunkName: "about" */ "../views/Administradores/AdministradoresCrear.vue"
      ),
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/administradores/ver",
    name: "AdministradorVer",

    component: () =>
      import(
        /* webpackChunkName: "about" */ "../views/Administradores/AdministradorVer.vue"
      ),
      meta: {
        requiresAuth: true,
      },
  },
  {
    path: "/administradores/id/editar",
    name: "AdministradorEditar",

    component: () =>
      import(
        /* webpackChunkName: "about" */ "../views/Administradores/AdministradorUpdate.vue"
      ),
      meta: {
        requiresAuth: true,
      },
  },

  {
    path: "/Configuraciones",
    name: "Configuraciones",
    component: () =>
      import(
        /* webpackChunkName: "about" */ "../views/Configuraciones/Configuraciones.vue"
      ),
      meta: {
        requiresAuth: true,
      },
    redirect: { name: "ConfiguracionTerrenos" },
    children: [
      {
        path: "/Configuraciones",
        name: "ConfiguracionTerrenos",
        component: () =>
          import(
            "../views/Configuraciones/componentes/configuracionesTerreno.vue"
          ),
      },
      {
        path: "/Configuraciones",
        name: "ConfiguracionInactividad",
        component: () =>
          import(
            "../views/Configuraciones/componentes/configuracionesInactividad.vue"
          ),
      },
    ],
  },
  {
    path: "/logout",
    name: "Logout",
    component: () => import("../components/Logout.vue"),
  },
  
];



const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
  
});

export default router;
