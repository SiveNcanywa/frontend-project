import { createRouter, createWebHashHistory } from 'vue-router'
import home from '../components/home.vue'
import log from '../components/Log.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/log',
    name: 'Log',
    component: ()=>import('../components/Log.vue')
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
