import { createRouter, createWebHistory } from 'vue-router'
import VistaPrin from '@/views/VistaPrin.vue'
import PaqueteSpace from '@/views/PaqueteSpace.vue'
import ProyectosPag from '@/views/ProyectosPag.vue'

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
    {
      path: '/proyectos',
      name: 'proyectos',
      component: ProyectosPag,
    },
  ],
})

export default router
