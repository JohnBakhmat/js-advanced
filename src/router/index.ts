import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import HomeView from "../views/HomeView.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/lab1",
    name: "FirstLab",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/FirstLabView.vue"),
  },
  {
    path: "/lab2",
    name: "SecondLab",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/SecondLabView.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
