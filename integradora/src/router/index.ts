import { createRouter, createWebHistory } from 'vue-router'
import VistaPrin from '@/views/VistaPrin.vue'
import PaqueteSpace from '@/views/PaqueteSpace.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'vistaprin',
      component: VistaPrin,
    },
    {
      path: '/paquete',
      name: 'paquete',
      component: PaqueteSpace,
    },
  ],
})

export default router
