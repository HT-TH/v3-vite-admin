import { createRouter, RouteRecordRaw, createWebHistory } from 'vue-router'
import BasisTemplate from '../layout/BasisTemplate.vue'
import ErrorTemplate from '../layout/ErrorTemplate.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: () => BasisTemplate,
    children: [
      {
        path: '',
        component: () => import('../view/home.vue')
      },
      {
        path: 'home',
        name: 'home',
        redirect: '/'
      },
      {
        path: 'about',
        name: 'about',
        component: () => import('../view/about.vue')
      }
    ]
  },
  {
    path: '/:pathMatch(.*)',
    name: 'error',
    component: ErrorTemplate
  }
] 

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router

