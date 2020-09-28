import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Home from '../views/Home.vue'
import Layout from '../views/layout/layout.vue'
const routes: Array<RouteRecordRaw> = [
  {
    path: '/home',
    name: '',
    component: Home
  },
  {
    path: '',
    component: Layout,
    children:[{
      path: '',
        name: 'Home',
        component: Home
    },
    {
      path: '/hooks',
      name: 'Hooks',
      component: () => import('../views/hooks/Hooks.vue')
    },
    {
      path: '/hooks',
      name: 'Hooks',
      component: () => import('../views/hooks/Hooks.vue')
    },
    {
      path: '/hooks',
      name: 'Hooks',
      component: () => import('../views/hooks/Hooks.vue')
    },
    {
      path: '/hooks',
      name: 'Hooks',
      component: () => import('../views/hooks/Hooks.vue')
    },
  ]
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
