import { createRouter, createWebHistory } from "vue-router"
import HomePage from "../pages/HomePage.vue"
import Calender from "../pages/Calender.vue"
import MarkDown from "../pages/MarkDown.vue"
import Slider from "../pages/Slider.vue"
import Calculator from "../pages/Calculator.vue"
// import Example from "../pages/Example.vue"

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
  },
  {
    path: '/slider',
    name: 'Slider',
    component: Slider
  },
  {
    path: '/calculator',
    name: 'Calculator',
    component: Calculator
  },
  // {
  //   path: '/example',
  //   name: 'Example',
  //   component: Example
  // }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
