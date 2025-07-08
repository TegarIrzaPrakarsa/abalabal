import { createRouter, createWebHistory } from "vue-router";

import Login from "@/views/Login.vue";
import Dashboard from "@/views/Dashboard/Index.vue";
import Mahasiswa from "@/views/Mahasiswa/Index.vue";
import User from "@/views/User/Index.vue";

const routes = [
  { path: "/", name: "Login", component: Login },
  { path: "/dashboard", name: "Dashboard", component: Dashboard },
  { path: "/mahasiswa", name: "Mahasiswa", component: Mahasiswa },
  { path: "/user", name: "User", component: User },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
