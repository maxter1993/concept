import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import DataBinding from '../views/DataBinding.vue'
import Component from '../views/Component.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
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
    path: '/data-binding',
    name: 'Data Binding',
    component: DataBinding
  },
  {
    path: '/component',
    name: 'Component',
    component: Component
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
