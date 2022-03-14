import { createRouter, createWebHashHistory } from 'vue-router'
import home from '../components/home.vue'
import log from '../components/Log.vue'
import about from '../components/about.vue'
import contact from '../components/contact.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: home
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../components/about.vue')
  },
  {
    path: '/log',
    name: 'Log',
    component: ()=>import('../components/Log.vue')
  },
  {
    path: '/contact',
    name: 'contact',
    component: ()=>import('../components/contact.vue')
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
