import { createRouter, createWebHashHistory } from 'vue-router'

const Test = () => import('@/views/test')

const routes = [
  {
    path: '/',
    component: Test
  }
]

const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  routes
})

export default router
