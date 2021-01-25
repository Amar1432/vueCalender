import { createRouter, createWebHistory } from "vue-router"
import HomePage from "../pages/HomePage.vue"
import Calender from "../pages/Calender.vue"
import MarkDown from "../pages/MarkDown.vue"

const routes = [
  {
    path: '/',
    component: HomePage
  },
  {
    path: '/home',
    name: 'HomePage',
    component: HomePage
  },
  {
    path: '/calender',
    name: 'Calender',
    component: Calender
  },
  {
    path: '/markdown',
    name: 'MarkDown',
    component: MarkDown
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
