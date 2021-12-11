import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Page from '../views/Page.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },

  {
    path: '/cards',
    name: 'Cards',
    component: Page
  },

  {
    path: '/payments',
    name: 'Payments',
    component: Page
  },

  {
    path: '/credit',
    name: 'Credit',
    component: Page
  },

  {
    path: '/profile',
    name: 'Profile',
    component: Page
  },


]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
