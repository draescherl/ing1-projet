import Vue from 'vue'
import VueRouter from 'vue-router'
import Administration from '../views/Administration.vue'
import Resultats from '../views/Resultats.vue'
import Saisie from '../views/Saisie.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Saisie
  },
  {
    path: '/administration',
    name: 'Administration',
    component: Administration
  },
  {
    path: '/resultats',
    name: 'Results',
    component: Resultats
  },
  {
    path: '/saisie',
    name: 'Input',
    component: Saisie
  }
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router