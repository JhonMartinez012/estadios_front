import axios from "axios";
import router from "./router";
import {store} from "./store"

export default axios.create({
  headers: {
    Accept: "application/json",
    'Content-Type': "application/json",
  },
});


axios.interceptors.request.use(
  config=>{
    const token = localStorage.getItem("access_token");
    if (token !== "") {
      config.headers.common["Authorization"]= `Bearer ${token}`
    }else{
      router.push({ name: 'Login' });
    }
    return config;
  },
  error=>{
    return Promise.reject(error);
  }
);

axios.interceptors.response.use(
  response=>{
    if (response.status===200 || response.status===201) {
      return Promise.resolve(response)      
    }else{
      return Promise.reject(response);
    }
  },
  error => {
    if (error.response.status) {
      switch (error.response.status) {
        case 401:
          localStorage.removeItem("access_token");
          store.commit("logoutUser");          
          router.push({ name: 'Login' });
          break;
          case  403:
            localStorage.removeItem("access_token");
            store.commit("logoutUser");          
            router.push({ name: 'Login' });
          break;
      }
    }
  }
)





