import { createWebHistory, createRouter } from "vue-router";

import HomePage from "../pages/home-page.vue";

const routes = [
  {
    path: "/",
    component: HomePage,
  },
  {
    path: "/holla",
    component: HomePage
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
