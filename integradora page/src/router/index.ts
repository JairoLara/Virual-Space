import { createRouter, createWebHistory } from 'vue-router'
import VistaPrin from '@/views/VistaPrin.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'vistaprin',
      component: VistaPrin,
    },
  ],
})

export default router
