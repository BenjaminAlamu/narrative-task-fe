import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import Tacklebox from '@narrative.io/tackle-box'
import '@narrative.io/tackle-box/dist/tackle-box.css'
import "@/assets/css/main.css";
import Toast from "vue-toastification";
import "vue-toastification/dist/index.css";
import router from "./router";
import "./utils/filters";

Vue.use(Tacklebox)
const options = {
  timeout: 2000
};


Vue.use(Toast, options);

Vue.config.productionTip = false

new Vue({
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app')
