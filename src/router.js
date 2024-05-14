//FIle router per il link pagine  

import { createRouter, createWebHistory } from "vue-router";

//importo pagine per il menù 
import HomePage from "./pages/HomePage.vue";
import AboutPage from "./pages/AboutPage.vue";
import ContactPage from "./pages/ContactPage.vue";
import ProcessPage from "./pages/ProcessPage.vue";
import PortfolioPage from "./pages/PortfolioPage.vue";
import PricingPage from "./pages/PricingPage.vue";
import BlogPage from "./pages/BlogPage.vue";

//Creo la struttura per il router 
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
    {
      path: "/contact",
      name: "contact",
      component: ContactPage,
    },
    {
      path : "/portfolio",
      name : "portfolio",
      component : PortfolioPage,
    },
    {
      path : "/process",
      name : "process",
      component : ProcessPage,
    },
    {
      path : "/pricing",
      name : "pricing",
      component : PricingPage,
    },
    {
      path : "/blog",
      name : "blog",
      component : BlogPage,
    }
  ],
});