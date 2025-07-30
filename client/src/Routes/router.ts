import { createRouter, createWebHistory } from "vue-router";
import { LandingRouting } from "@App/Landing/LadingRouting";

export const Router = createRouter({
  history: createWebHistory(), routes: [
    ...LandingRouting,
  ]
});
