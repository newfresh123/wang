import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      name: 'Layout',
      path: '/',
      component: () => import('@/layout/Index.vue'),
      children: [
        {
          name: "businessCooperation",
          path: "/businessCooperation",
          component: () => import('@/views/businessCooperation/businessCooperation.vue')
        },
        {
          name: "gameLive",
          path: "/gameLive",
          component: () => import('@/views/gameLive/gameLive.vue')
        },
        {
          name: "mockQuiz",
          path: "/mockQuiz",
          component: () => import('@/views/mockQuiz/mockQuiz.vue')
        },
        {
          name: "redList",
          path: "/redList",
          component: () => import('@/views/redList/redList.vue')
        }
      ]
    }
  ]
})

export default router
