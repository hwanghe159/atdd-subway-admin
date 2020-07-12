import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import AdminStation from "../views/AdminStation";
import AdminLine from "../views/AdminLine";
import AdminEdge from "../views/AdminEdge";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/admin-station",
    name: "AdminStation",
    component: AdminStation,
  },
  {
    path: "/admin-line",
    name: "AdminLine",
    component: AdminLine,
  },
  {
    path: "/admin-edge",
    name: "AdminEdge",
    component: AdminEdge,
  },
];

const router = new VueRouter({
  mode: "history",
  // eslint-disable-next-line no-undef
  base: process.env.BASE_URL,
  routes,
});

export default router;
