import type { RouteRecordRaw } from "vue-router";
import LandingPage from "./LandingPage.vue";

export const LandingRouting: RouteRecordRaw[] = [
  {
    path: "",
    component: LandingPage,
  },
];
