import { createRouter, createWebHistory } from 'vue-router'
import ResidentListView from '@/views/ResidentListView.vue'
import { usePathStore } from '@/stores/path'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'residents',
      meta: { path: ['Résidence du centre ville', 'Résidents'] },
      component: ResidentListView,
    },
    {
      path: '/residents/:id',
      name: 'resident',
      meta: { path: ['Résidence du centre ville', 'Résidents', 'Synthèse'] },
      component: () => import('@/views/ResidentFileView.vue'),
    },
  ],
})

router.beforeEach((to) => {
  console.log(to)
  usePathStore().updatePath(to.meta.path)
  return true
})

export default router
