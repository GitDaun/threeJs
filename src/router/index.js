import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Lecture1',
      component: () => import('../views/threeJs1.vue')
    },
    {
      path: '/threeJs2',
      name: 'Lecture2',
      component: () => import('../views/threeJs2.vue')
    },
    {
      path: '/threeJs2_1',
      name: 'threeJs2_1',
      component: () => import('../views/threeJs2SceneGrouping.vue')
    },
    {
      path: '/threeJs3',
      name: 'Lecture3',
      component: () => import('../views/threeJs3 Animations.vue')
    }
  ]
})

export default router
