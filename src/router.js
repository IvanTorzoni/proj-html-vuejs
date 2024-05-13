//FIle router per il link pagine  

import { createRouter, createWebHistory } from "vue-router";

//importo pagine per il menù 
import HomePage from "./pages/HomePage.vue";
import AboutPage from "./pages/AboutPage.vue";

//Creo la struttura per il router (WIP)
export const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomePage,
    },
    {
      path: "/about",
      name: "about",
      component: AboutPage,
    },
  ],
});