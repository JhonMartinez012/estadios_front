<template v-if="user">
  <div id="app">
    <div class="container-fluid m-0 p-0 mb-0 bg-white fixed-top">
      <!-- <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link><br> -->

      <nav
        class="navbar navbar_cabecera navbar-expand-lg navbar-white bg-white pl-0 pr-0"
      >
        <router-link :to="{ name: 'Estadios' }" class="navbar-brand mb-0">
          <img
            src="../assets/1. Estadios/Logo/logo-CX stadium 2.svg"
            alt=""
            srcset=""
            width="200"
            height="45"
          />
        </router-link>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon" id="icon-menu"></span>
        </button>

        <div
          class="collapse navbar-collapse justify-content-end"
          id="navbarSupportedContent"
        >
          <!-- ajustar el menú de los estadios,admins y config a la derecha -->
          <ul class="navbar-iconos navbar-nav">
            <li
              class="nav-item active efecto"
              data-toggle="tooltip"
              data-placement="bottom"
              :title="menu.label"
              v-for="(menu, index) in menus"
              :key="menu.id"
              v-on:click="markIconEvent($event, index)"
              v-bind:class="
                $route.path.includes(menu.name) ? 'Iconactive' : ' '
              "
            >
              <router-link class="nav-link" :to="menu.ruta">
                <img
                  v-bind:class="
                    $route.path.includes(menu.name) ? 'svgfilter' : ' '
                  "
                  class="iconos-estilos"
                  :src="menu.image"
                />
              </router-link>
            </li>
            <!-- <li
              class="nav-item efecto"
              data-toggle="tooltip"
              title="Administradores"
              data-placement="bottom"
            >
              <router-link class="nav-link" :to="{ name: 'Administradores' }">
                <img
                  class="iconos-estilos"
                  src="../assets/iconos/icon-user.svg"
                  title=""
                />
              </router-link>
            </li>
            <li
              class="nav-item efecto"
              data-toggle="tooltip"
              title="Configuración"
              data-placement="bottom"
            >
              <router-link class="nav-link" :to="{ name: 'Configuraciones' }">
                <img
                  class="iconos-estilos"
                  src="../assets/iconos/cog-solid.svg"
                  title=""
                />
              </router-link>
            </li> -->
          </ul>
          <ul class="navbar-nav">
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#prueba"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-expanded="false"
              >
                <img
                  class="img_redondeada"
                  :src="userLog.img"
                  :title="userLog.name"
                  data-toggle="tooltip"                  
                  data-placement="bottom"
                />
              </a>
              <div class="dropdown-menu" id="prueba">
                <router-link class="dropdown-item" :to="{ name: 'Logout' }"
                  >Cerrar sesión</router-link
                >
                <!-- <a class="dropdown-item" href="#">Cerrar sesión</a> -->
              </div>
            </li>
          </ul>
        </div>
        <img
          src="../assets/1. Estadios/Logo/logo-coex-redondo.svg"
          alt=""
          srcset=""
        />
      </nav>
    </div>

    <!-- Aca se muestran las paginas -->
    <div class="about" id="about">
      <router-view />
    </div>
  </div>
</template>

<script>
import axios from "axios";
const ENDPOINT = "http://127.0.0.1:8000/api/auth/";
//import admins from "../views/Administradores/componentes/AdministradoresCom.vue"
export default {
  name: "Principal",

  created() {
    this.usuarioLog();
  },
  updated() {
    $('[data-toggle="tooltip"]').tooltip({
      trigger: "hover",
    });
    $("img").click(function () {
      $('[data-toggle="tooltip"], .tooltip').tooltip("hide");
    });
  },

  data() {
    return {
      userLog: [],
      drawer: true,
      items: [
        {
          icon: "bubble_chart",
          title: "Inspire",
        },
      ],
      title: "Principal Layout",
      menus: [
        {
          id: 1,
          image: require("../assets/iconos/icon-estadio.svg"),
          label: "Estadios",
          Iconmark: true,
          ruta: "/estadios/",
          name: "estadios",
        },
        {
          id: 2,
          image: require("../assets/iconos/icon-user.svg"),
          label: "Administradores",
          Iconmark: false,
          ruta: "/administradores/",
          name: "administradores",
        },
        {
          id: 3,
          image: require("../assets/iconos/cog-solid.svg"),
          label: "Configuracion",
          Iconmark: false,
          ruta: "/configuraciones/",
          name: "configuraciones",
        },
      ],
    };
  },

  methods: {
    async usuarioLog() {
      try {
        const user = await axios.get(ENDPOINT + "usuario_log");
        this.userLog = user.data;
        //console.log(this.userLog);
      } catch (error) {
        console.log(error);
      }
    },
    markIconEvent($event, index) {
      this.menus.forEach((menu) => (menu.Iconmark = false));
      this.menus[index].Iconmark = !this.menus[index].Iconmark;
    },
  },
};
</script>

<style scoped>
/* .tooltip-inner {
  background: #ffffff 0% 0% no-repeat padding-box;
  box-shadow: 0px 3px 6px #5d5d5d14;
  border: 1px solid #f5f5f5;
  border-radius: 16px;

  text-align: center;
  font: normal normal 300 12px/14px Rubik;
  letter-spacing: 0px;
  color: #707070;
}
.tooltip .arrow::before {
  background: #ffffff 0% 0% no-repeat padding-box;
  box-shadow: 0px 3px 6px #5d5d5d14;
  border: 1px solid #f5f5f5;
  border-radius: 16px;
  text-align: center;
  font: normal normal 300 12px/14px Rubik;
  letter-spacing: 0px;
  color: #707070;
} */
.about {
  margin-left: 100px;
  margin-top: 100px;
}
.navbar_cabecera {
  /* ajustar el margen a la izquierda del navbar  */
  margin-left: 100px;
}

/* Margen de los iconos a la imagen de perfil */
.navbar-iconos {
  margin-right: 155px;
}

ul {
  border-radius: 12px;
  background-color: transparent;
}

#prueba:target {
  display: block;
}

.efecto,
a,
img {
  border-radius: 12px;
}

.efecto :hover {
  background-color: rgba(115, 88, 250, 0.2);
  border-radius: 12px;
}
.Iconactive {
  background-color: #7358fa;
  border-radius: 12px;
}
.svgfilter {
  filter: brightness(1000%);
}

.efecto :active {
  background-color: rgba(115, 88, 250, 0.2);
  border-radius: 12px;
}

.efecto a :hover {
  background-color: transparent;
  border-radius: 12px;
}
.efecto a img :hover {
  background-color: transparent;
  border-radius: 12px;
}

/* Atributos en la etiqueta <a></a> de el campo de los iconos */
.icon-config {
  background-size: 40px 40px;
  background-repeat: no-repeat;
  background-position: center center;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

/* Estilo para que muestre el menu hamburguesa cuando la pantalla es pequeña */
#icon-menu {
  background-image: url("../assets/img_login/bars-solid.svg");
  background-size: 15px 15px;
  background-repeat: no-repeat;
  background-position: 8px center;
}

/* Estilo que permite mostrar la imagen redondeada de la persona logueada */
.img_redondeada {
  width: 36px;
  height: 36px;
  border-radius: 10px;
  border: 10px;
  background-size: 36px 36px;
  background-repeat: no-repeat;
  background-position: center;
}
</style>
