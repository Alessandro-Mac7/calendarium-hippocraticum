import { createRouter, createWebHashHistory } from 'vue-router'

import CalendarHome from "@/views/CalendarHome.vue";
import MonthView from "@/views/MonthView.vue";

const routes = [
  {
    path: '/',
    name: 'CalendarHome',
    component: CalendarHome
  },
  {
    path: '/selected-month/:month',
    name: 'MonthView',
    props: true,
    component: MonthView
  },
  {path: '/:notFound(.*)', component: CalendarHome}
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  scrollBehavior() {
    return { top: 0 }
  },
});

export default router
