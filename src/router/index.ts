import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('@/views/AboutView.vue'),
    },
    {
      path: '/residents',
      name: 'residents',
      component: () => import('@/views/ResidentListView.vue'),
    },
    {
      path: '/residents/:id',
      name: 'resident',
      component: () => import('@/views/ResidentFileView.vue'),
    },
  ],
})

export default router
