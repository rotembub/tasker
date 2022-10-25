import { createRouter, createWebHistory } from 'vue-router'
import UserPage from '../views/UserPage.vue'
import AboutPage from '../views/AboutPage.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'user-page',
      component: UserPage
    },
    {
      path: '/about',
      name: 'about-page',
      component: AboutPage
    },
  ]
})

export default router
