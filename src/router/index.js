import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    name: 'Login',
    meta: { layout: 'empty' },
    component: () => import('../views/Login.vue')
  }, {
    path: '/registr',
    name: 'Registr',
    meta: { layout: 'empty' },
    component: () => import('../views/Registr.vue')
  }, {
    path: '/',
    name: 'Home',
    meta: { layout: 'main' },
    component: () => import('../views/Home.vue')
  }, {
    path: '/tags',
    name: 'Tags',
    meta: { layout: 'main' },
    component: () => import('../views/Tags.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
