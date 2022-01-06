import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Login",
    component: () => import("../views/Login.vue"),
    meta: {
      auth: false,
    },
  },
  {
    path: "/estadios",
    name: "Estadios",

    component: () => import("../views/Estadios/Estadios.vue"),
    
  },
  {
    path: "/estadios/crear",
    name: "EstadiosCrear",

    component: () => import("../views/Estadios/EstadiosCrear.vue"),
  },
  {
    path: "/estadios/id",
    name: "EstadiosVer",

    component: () => import("../views/Estadios/EstadiosVer.vue"),
  },
  {
    path: "/estadios/id/editar",
    name: "EstadiosEditar",

    component: () => import("../views/Estadios/EstadiosEditar.vue"),
  },
  {
    path: "/administradores",
    name: "Administradores",

    component: () => import("../views/Administradores/Administradores.vue"),
  },
  {
    path: "/administradores/crear",
    name: "AdministradoresCrear",

    component: () =>
      import(
        /* webpackChunkName: "about" */ "../views/Administradores/AdministradoresCrear.vue"
      ),
      meta: {
        auth: true,
      },
  },
  {
    path: "/administradores/ver",
    name: "AdministradorVer",

    component: () =>
      import(
        /* webpackChunkName: "about" */ "../views/Administradores/AdministradorVer.vue"
      ),
  },
  {
    path: "/administradores/id/editar/",
    name: "AdministradorEditar",

    component: () =>
      import(
        /* webpackChunkName: "about" */ "../views/Administradores/AdministradorUpdate.vue"
      ),
  },

  {
    path: "/Configuraciones",
    name: "Configuraciones",
    component: () =>
      import(
        /* webpackChunkName: "about" */ "../views/Configuraciones/Configuraciones.vue"
      ),
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
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
