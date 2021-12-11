import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"

// import CatCarousel from 'vue-cat-carousel'
// Vue.use(CatCarousel)

new Vue({
  router,
  store,
  render: function (h) { return h(App) }
}).$mount('#app')
