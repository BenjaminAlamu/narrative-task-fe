import Vue from "vue";
import Router from "vue-router";
// import beforeEach from "../helpers/beforeEach.js";

Vue.use(Router);
const routes = [
  {
    path: "/",
    name: "HomePage",
    component: () => import("@/views/HomePage.vue"),
  },
];

const router = new Router({
  routes,
  mode: "history",
  scrollBehavior: function (to) {
    if (to.hash) {
      return {
        selector: to.hash,
      };
    } else {
      return { x: 0, y: 0 };
    }
  },
});

// router.beforeEach(beforeEach);
export default router;
