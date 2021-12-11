import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"


import VueSweetalert2 from 'vue-sweetalert2';
// If you don't need the styles, do not connect
import 'sweetalert2/dist/sweetalert2.min.css';
Vue.use(VueSweetalert2);

new Vue({
  router,
  store,
  render: function (h) { return h(App) }
}).$mount('#app')
