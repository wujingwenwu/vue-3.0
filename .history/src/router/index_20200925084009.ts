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
        component: Home,
        meta: {
          title: '首页'
        }
    },
    {
      path: '/hooks',
      name: 'Hooks',
      component: () => import('../views/hooks/Hooks.vue')
    },
    {
      path: '/preview',
      name: 'Preview',
      component: () => import('../views/preview/Preview.vue')
    },
    {
      path: '/trend',
      name: 'Trend',
      component: () => import('../views/trend/Trend.vue')
    },
    {
      path: '/foottoolbar',
      name: 'Foottoolbar',
      component: () => import('../views/foottoolbar/Foottoolbar.vue')
    },
    {
      path: '/noticeicon',
      name: 'Noticeicon',
      component: () => import('../views/noticeicon/Noticeicon.vue')
    },
    {
      path: '/iframe',
      name: 'Iframe',
      component: () => import('../views/iframe/Iframe.vue')
    },
    {
      path: '/countdown',
      name: 'Countdown',
      component: () => import('../views/countdown/Countdown.vue')
    },
    {
      path: '/progress',
      name: 'Progress',
      component: () => import('../views/progress/Progress.vue')
    },
    {
      path: '/qrcode',
      name: 'Qrcode',
      component: () => import('../views/qrcode/Qrcode.vue')
    },
    {
      path: '/copy',
      name: 'Copy',
      component: () => import('../views/copy/Copy.vue')
    },
    {
      path: '/watermark',
      name: 'Watermark',
      component: () => import('../views/watermark/Watermark.vue')
    },
    {
      path: '/edittext',
      name: 'Edittext',
      component: () => import('../views/edittext/Edittext.vue')
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
