import Vue from "vue";
import VueRouter from "vue-router";
//import {store}  from "../store";

import auth from "../middleware/auth";
import log from "../middleware/log";
Vue.use(VueRouter);

import axios from "axios";
const ENDPOINT_PATH = "http://127.0.0.1:8000/api/auth/";
const ENDPOINT_PATH1 = "http://127.0.0.1:8000/api/estadio/";

const guardAdmin = async (to, from, next) => {
  var exist = false;

  const data = await axios.get(ENDPOINT_PATH + "administrador/" + to.params.id);

  let administrador = data.data;
  if (administrador.success == true) {
    exist = true;
  } else {
    exist = false;
  }

  if (exist) {
    next();
  } else {
    next({ name: "Administradores" });
  }
};

const guardEstadio = async (to, from, next) => {
  var exist = false;

  const  data  = await axios.get(
    ENDPOINT_PATH1 + "ver_estadio/" + to.params.id
  );
  let estadio = data.data;

  if (estadio.success == true) {
    exist = true;
  } else {
    exist = false;
  }
  if (exist) {
    next();
  } else {
    next({ name: "Estadios" });
  }
};

const routes = [
  {
    path: "/",
    name: "Raiz",
    redirect: { name: "Login" },
  },
  {
    path: "/login",
    name: "Login",
    component: () => import("../views/Login.vue"),
    /* meta: {
      middleware: log,
    }, */
  },
  {
    path: "/loader",
    name: "Loader",
    component: () => import("../views/Loader.vue"),
    /* meta: {
      middleware: log,
    }, */
  },
  {
    path: "/estadios",
    name: "Estadios",
    component: () => import("../views/Estadios/Estadios.vue"),
    meta: {
      middleware: [auth, log],
    },
  },
  {
    path: "/estadios/crear",
    name: "EstadiosCrear",

    component: () => import("../views/Estadios/EstadiosCrear.vue"),
    meta: {
      middleware: [auth, log],
    },
  },
  {
    path: "/estadios/:id",
    name: "EstadiosVer",

    component: () => import("../views/Estadios/EstadiosVer.vue"),
    beforeEnter: guardEstadio,
    meta: {
      middleware: [auth, log],
    },
  },
  {
    path: "/estadios/:id/editar",
    name: "EstadiosEditar",

    component: () => import("../views/Estadios/EstadiosEditar.vue"),
    meta: {
      middleware: [auth, log],
    },
  },
  {
    path: "/administradores",
    name: "Administradores",

    component: () => import("../views/Administradores/Administradores.vue"),
    meta: {
      middleware: [auth, log],
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
      middleware: [auth, log],
    },
  },
  {
    path: "/administradores/ver/:id",
    name: "AdministradorVer",

    component: () =>
      import(
        /* webpackChunkName: "about" */ "../views/Administradores/AdministradorVer.vue"
      ),
    beforeEnter: guardAdmin,
    meta: {
      middleware: [auth, log],
    },

    /*  beforeEnter: (to, from, next) => {
      const { data } = axios.get(ENDPOINT_PATH + "administrador/" + this.$route.params.id
      );
      let administrador = data;
      
      if (administrador.success==true) {
        next();        
      }else{
        next({name:"Administradores"});
      }
    }, */
  },
  {
    path: "/administradores/:id/editar",
    name: "AdministradorEditar",
    component: () =>
      import(
        /* webpackChunkName: "about" */ "../views/Administradores/AdministradorUpdate.vue"
      ),
    meta: {
      middleware: [auth, log],
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
      middleware: [auth, log],
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
        meta: {
          middleware: [auth, log],
        },
      },
      {
        path: "/Configuraciones",
        name: "ConfiguracionInactividad",
        component: () =>
          import(
            "../views/Configuraciones/componentes/configuracionesInactividad.vue"
          ),
        meta: {
          middleware: [log, auth],
        },
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
  auth,
  log,
});

/* function nextFactory(context, middleware, index) {
  const subsequentMiddleware = middleware[index];
  // If no subsequent Middleware exists,
  // the default `next()` callback is returned.
  if (!subsequentMiddleware) return context.next;

  return (...parameters) => {
    // Run the default Vue Router `next()` callback first.
    context.next(...parameters);
    // Then run the subsequent Middleware with a new
    // `nextMiddleware()` callback.
    const nextMiddleware = nextFactory(context, middleware, index + 1);
    subsequentMiddleware({ ...context, next: nextMiddleware });
  };
}

router.beforeEach((to, from, next) => {
  if (to.meta.middleware) {
    const middleware = Array.isArray(to.meta.middleware)
      ? to.meta.middleware
      : [to.meta.middleware];

    const context = {
      from,
      next,
      router,
      to,
    };
    const nextMiddleware = nextFactory(context, middleware, 1);
    return middleware[0]({ ...context, next: nextMiddleware });
  }

  return next();
});
 */
export default router;
