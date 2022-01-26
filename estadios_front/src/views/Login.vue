<template>
  <div class="container mt-5 col-md-8 col-lg-8 col-xl-8">
    <div class="row borde_redondo1 borde_redondo2 sombra align-items-stretch">
      <div
        class="col bg borde_redondo1 d-none d-md-block d-lg-block col-lg-6 col-xl-6"
      ></div>

      <div
        class="col borde_redondo2 bg-white p-5 align-items-center col-lg-6 col-sm-12"
      >
        <div class="text-center">
          <img
            class="img-responsive"
            width="100%"
            src="/assets/1. Estadios/Logo/logo-CX stadium 1.svg"
            alt=""
            srcset=""
          />
        </div>

        <!------------ LOGIN ----------------->
        <form action="" method="post">
          <h2 class="fw-bold text-center pt-5 mb-2 gilroy">Iniciar sesión</h2>
          <div class="input-container mb-3">
            <img src="/assets/1. Estadios/Iconos/icon - usuario.svg" alt="" />
            <input
              type="email"
              v-model="email"
              required
              placeholder="Usuario"
              
            />
            <img
              id="validar"
              v-bind:style="[
                validar == true
                  ? { visibility: 'visible' }
                  : { visibility: 'hidden' },
              ]"
              src="/assets/1. Estadios/Iconos/Icon - check-simple.svg"
              alt=""
            />
          </div>
          <div class="input-container mb-3">
            <img
              src="/assets/1. Estadios/Iconos/icon - pass.svg"
              alt=""
            />
            <input
              type="password"
              v-model="password"
              class=""
              placeholder="Contraseña"
              required
            />
            <img
              id="validar"
              v-bind:style="[
                validar == false
                  ? { visibility: 'hidden' }
                  : { visibility: 'hidden' },
              ]"
              src="/assets/1. Estadios/Iconos/Icon - check-simple.svg"
              alt=""
            />
          </div>
          <div class="d-grid justify-content-center">
            <input
              type="button"
              class="btn boton"
              value="Ingresar"
              @click="login"
            />

            <!-- <router-link :to="{name:'Estadios'}" class="btn boton">Ingresar</router-link> -->
          </div>
        </form>
        <div class="text-center pt-4">
          <img
            src="/assets/1. Estadios/Logo/logo-coex.svg"
            alt=""
            srcset=""
            id="logo_inferior"
          />
        </div>
        <div v-if="error">
          <p class="text text-danger text-center">Usuario o contraseña inválido</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
//import {mapGetters, mapMutations, mapActions} from 'vuex'
import { mapMutations } from "vuex";
import auth from "@/store/auth";

export default {
  /* MANERA# 1 DE HACER */
  name: "Login",

  created() {
    this.setLayout("login-layout");
  },

  data: () => ({
    email: "",
    password: "",
    error: false,
    validar: false,
  }),
  watch: {
    email(value) {
      this.email = value;
      this.validarEmail(value);
    },
  },

  methods: {
    ...mapMutations({
      setLayout: "SET_LAYOUT",
    }),

    validarEmail(value) {
      if (/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value)) {
        this.validar = true;
      } else {
        this.validar = false;
      }
    },

    async login() {
      try {
        this.error = false;
        let data = await auth.login(this.email, this.password);
        if (typeof Storage !== "undefined") {
          localStorage.setItem("access_token", data.data.access_token);
          this.$router.push({ name: "Loader" });
        } else {
          console.log("No compatible");
        }
      } catch (error) {
        this.error = true;
      }
    },
  },

  /* FIN DE LA MANERA 1*/

  /* manera 2 */
  /* data() {
      return {
        email: '',
        password: '',

      }
    },
    computed: {
      ...mapState([
        'loggingIn',
        'loginError',
        'access_token'
      ])
    },
    methods: {
      ...mapActions([
        'doLogin'
      ]),
      loginSubmit() {
        this.doLogin({
          email: this.email,
          password: this.password,

        });

      }
    }
 */
  /* fin manera 2 */

  /* data() {
    return {
      email: null,
      password: null,
      success: false,
      has_error: false,

    };
  }, */
  /* computed: {
    ...mapGetters({
      user: 'Auth/user'
    })
  }, */
  /* methods: {
    ...mapMutations({
      setLayout: 'SET_LAYOUT'
    }),
    ...mapActions({
      ingresar: 'Auth/Ingresar'
    }), */
  /* codigo de ejemplo para login */
  /* async login() {
      const email = this.email
      const password = this.password
      await this.ingresar({
        email,
        password
      });
      if(this.user){
        this.$router.push({name: 'Estadios'})
      }

    },
  }, */
};
</script>

<style scoped>
h2 {
  text-align: center;
  font: normal normal bold 30px "Gilroy";
  letter-spacing: 0px;
  color: #637381;
}

.bg {
  background-image: url("/assets/1. Estadios/Imágenes de estadios/Estadio login.jpg");
  background-position: center center;
}
.sombra {
  box-shadow: 2px 16px 20px gray;
}
.boton {
  width: 100%;
  height: 40px;
  background: transparent
    linear-gradient(90deg, var(--principal-estadio) 0%, #866ff7 100%) 0% 0%
    no-repeat padding-box;
  background: transparent linear-gradient(90deg, #7358fa 0%, #866ff7 100%) 0% 0%
    no-repeat padding-box;
  border-radius: 12px;

  color: #ffffff;
  text-align: center;
  font: normal normal medium 18px/21px "Gilroy";
  letter-spacing: 0px;
  color: #ffffff;

  opacity: 1;
}
.borde_redondo1 {
  border-radius: 12px 0 0 12px;
}
.borde_redondo2 {
  border-radius: 12px 12px 12px 12px;
}
.icon-placeholder:focus {
  outline: none;
}

#logo_inferior {
  top: 700px;
  width: 100px;
  height: 40px;
  opacity: 1;
}
.img-responsive {
  max-width: 200px;
}

.input-container {
  display: flex;
  width: 100%;
  justify-content: center;
  background-color: #fff;
  border: solid 1px #DFE4E8;
  border-radius: 10px;
  font-family: "Rubik";
}

.input-container:focus-within {
  border: solid 2px #DFE4E8;
}

.input-container > input {
  border: none;
  width: auto;
  margin: 5px;
  width: 25vw;
}

.input-container > input:focus {
  outline: none;
}

.input-container > img {
  filter: invert(95%) sepia(5%) saturate(182%) hue-rotate(164deg)
    brightness(97%) contrast(91%);
  margin: 10px;
}

.input-container > #validar {
  filter: invert(86%) sepia(73%) saturate(5086%) hue-rotate(71deg)
    brightness(94%) contrast(79%);
  /* margin: 10px; */
}

.input-container:focus-within > img {
  filter: invert(13%) sepia(20%) saturate(5951%) hue-rotate(196deg)
    brightness(93%) contrast(107%);
}
.input-container:focus-within > #validar {
  filter: invert(86%) sepia(73%) saturate(5086%) hue-rotate(71deg)
    brightness(94%) contrast(79%);
}
</style>
