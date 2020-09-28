import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Home from '../views/Home.vue'
import Layout from '../views/layout/layout.vue';
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
      component: () => import('../views/hooks/Hooks.vue'),
      meta: {
        title: '常用hooks'
      }
    },
    {
      path: '/preview',
      name: 'Preview',
      component: () => import('../views/preview/Preview.vue'),
      meta: {
        title: '图片预览'
      }
    },
    {
      path: '/trend',
      name: 'Trend',
      component: () => import('../views/trend/Trend.vue'),
      meta: {
        title: '趋势'
      }
    },
    {
      path: '/foottoolbar',
      name: 'Foottoolbar',
      component: () => import('../views/foottoolbar/Foottoolbar.vue'),
      meta: {
        title: '首页'
      }
    },
    {
      path: '/noticeicon',
      name: 'Noticeicon',
      component: () => import('../views/noticeicon/Noticeicon.vue'),
      meta: {
        title: '首页'
      }
    },
    {
      path: '/iframe',
      name: 'Iframe',
      component: () => import('../views/iframe/Iframe.vue'),
      meta: {
        title: '首页'
      }
    },
    {
      path: '/countdown',
      name: 'Countdown',
      component: () => import('../views/countdown/Countdown.vue'),
      meta: {
        title: '首页'
      }
    },
    {
      path: '/progress',
      name: 'Progress',
      component: () => import('../views/progress/Progress.vue'),
      meta: {
        title: '首页'
      }
    },
    {
      path: '/qrcode',
      name: 'Qrcode',
      component: () => import('../views/qrcode/Qrcode.vue'),
      meta: {
        title: '首页'
      }
    },
    {
      path: '/copy',
      name: 'Copy',
      component: () => import('../views/copy/Copy.vue'),
      meta: {
        title: '首页'
      }
    },
    {
      path: '/watermark',
      name: 'Watermark',
      component: () => import('../views/watermark/Watermark.vue'),
      meta: {
        title: '首页'
      }
    },
    {
      path: '/edittext',
      name: 'Edittext',
      component: () => import('../views/edittext/Edittext.vue'),
      meta: {
        title: '首页'
      }
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
router.beforeEach((to, form, next) => {
  document.title = to.meta.title
  next()
})
export default router
