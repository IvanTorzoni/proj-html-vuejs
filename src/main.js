import { createApp } from "vue";
import "./style/general.scss";
import App from "./App.vue";

//import router per utilizzo in tutto il progetto
import { router } from "./router"; 

//aggiungo .use(router) alla creazione dell'app
createApp(App).use(router).mount("#app");
