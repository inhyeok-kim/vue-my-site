import { createWebHistory, createRouter } from "vue-router";

const routes = [
  {
    path: "/",
    name: "summary",
    component: () => import(/* webpackChunkName "home" */ '@/views/summary.vue')
  },
  {
    path: "/portfolio",
    name: "portfolio",
    component: () => import(/* webpackChunkName "home" */ '@/views/portfolio.vue')
  },
  {
    path: "/blog",
    name: "blog",
    component: () => import(/* webpackChunkName "home" */ '@/views/blog.vue')
  },
  {
    path: "/about",
    name: "about",
    component: () => import(/* webpackChunkName "home" */ '@/views/about.vue')
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;