<template>
  <div id="app">
    <div class="container-fluid m-0 p-0 bg-white">
      <div class="container-fluid">
        <!-- <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link><br> -->

        <nav class="navbar navbar_cabecera navbar-expand-lg navbar-white bg-white pl-0 pr-0">
          <a class="navbar-brand mb-0" href="#">
            <img
              src="../assets/1. Estadios/Logo/logo-CX stadium 2.svg"
              alt=""
              srcset=""
              width="200"
              height="45"
            />
          </a>
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

          <div class="collapse navbar-collapse justify-content-end" id="navbarSupportedContent"><!-- ajustar el menú de los estadios,admins y config a la derecha -->
            <ul class="navbar-iconos navbar-nav">
              <li class="nav-item active efecto">
                <a class="nav-link " href="/estadios"
                  ><img class="iconos-estilos" src='../assets/iconos/icon-estadio.svg' title="Estadios"/></a
                >
              </li>
              <li class="nav-item efecto">
                <a class="nav-link" href="/administradores"><img class="iconos-estilos" src='../assets/iconos/icon-user.svg' title="Administradores" /></a>
              </li>
              <li class="nav-item efecto">
                <a
                  class="nav-link"
                  href="#3"
                  id="navbarDropdown"
                  role="button"                  
                >
                <img class="iconos-estilos" src='../assets/iconos/cog-solid.svg' title="Configuración"/>                
                </a>
                
              </li>
              
            </ul>
            <ul class="navbar-nav">
              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-toggle="dropdown"
                  aria-expanded="false"
                >
                <img class="img_redondeada" src="../assets/black.jpg" alt="">
                  
                </a>
                <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                  <a class="dropdown-item" href="#">Cerrar sesión</a>
                  
                </div>
              </li>
            </ul>
            <!-- <form class="form-inline my-2 my-lg-0">
              <input
                class="form-control mr-sm-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button
                class="btn btn-outline-success my-2 my-sm-0"
                type="submit"
              >
                Search
              </button>
            </form> -->
          </div>
          <img
            src="../assets/1. Estadios/Logo/logo-coex-redondo.svg"
            alt=""
            srcset=""
          />
        </nav>
      </div>
    </div>

    <!-- Aca se muestran las paginas -->
    <router-view />
  </div>
</template>

<script>
export default {
  data() {
    return {
      drawer: true,
      items: [
        {
          icon: "bubble_chart",
          title: "Inspire",
        },
      ],
      title: "Principal Layout",
    };
  },
  name: "App",
};
</script>

<style>
#app {
  font-family: "Gilroy";
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  color: #000000;
}
.navbar_cabecera{ /* ajustar el margen a la izquierda del navbar  */
  margin-left: 100px;
}

/* Margen de los iconos a la imagen de perfil */
.navbar-iconos{
  margin-right: 155px;
}

ul {
border-radius: 12px;
background-color: transparent;
}

.efecto,a,img{
  border-radius: 12px;
}

.efecto :hover{
  background-color: rgba(115, 88, 250, 0.2);
  border-radius: 12px;

}

.efecto :active{
  background-color: rgba(115, 88, 250, 0.2);
  border-radius: 12px;
}

.efecto a :hover{
  background-color: transparent;
  border-radius: 12px;
}
.efecto a img :hover{
  background-color: transparent;
  border-radius: 12px;
}




/* Atributos en la etiqueta <a></a> de el campo de los iconos */
.icon-config{
  background-size: 40px 40px;
  background-repeat: no-repeat;
  background-position: center center;  
}
.iconos-estilos{
  font-size: 22px;
  color: #7358FA;

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
  background-image: url('../assets/img_login/bars-solid.svg');
  background-size: 15px 15px;
  background-repeat: no-repeat;
  background-position: 8px center;
}

/* Estilo que permite mostrar la imagen redondeada de la persona logueada */
.img_redondeada{
  width: 36px;
  height: 36px;
  border-radius: 10px;
  border: 10px;
  background-size: 36px 36px;
  background-repeat: no-repeat;
  background-position: center;
  
}
</style>
