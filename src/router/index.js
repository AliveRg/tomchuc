import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import VusView from '../views/VusView.vue'
import DopRes from '@/views/DopRes.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/vus/:vus',
      name: 'vus',
      component: VusView
    },
    {
      path: '/dop/res',
      name: 'dop',
      component: DopRes
    },
    {
      path: '/about/:params',
      name: 'about',
      component: AboutView
    }
  ]
})

export default router
