import { createRouter, createWebHistory } from 'vue-router'
import DepartmentPage from '../views/DepartmentPage.vue'
import EmployeePage from '../views/EmployeePage.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'department-page',
      component: DepartmentPage
    },
    {
      path: '/employee',
      name: 'employee-page',
      component: EmployeePage
    },
  ]
})

export default router
