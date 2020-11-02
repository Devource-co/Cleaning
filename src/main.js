import { createApp } from "vue";

import AOS from 'aos'
import 'aos/dist/aos.css'
import { library } from "@fortawesome/fontawesome-svg-core";
import { faTwitter, faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";
import {
  FontAwesomeIcon,
  FontAwesomeLayers,
  FontAwesomeLayersText,
} from "@fortawesome/vue-fontawesome";

import App from "./App.vue";
import router from "./routes";
import "./assets/styles/index.css";

const MainApp = createApp(App);

MainApp.use(router);

library.add(faTwitter, faFacebook, faInstagram);

MainApp.component("font-awesome-icon", FontAwesomeIcon);
MainApp.component("font-awesome-layers", FontAwesomeLayers);
MainApp.component("font-awesome-layers-text", FontAwesomeLayersText);

AOS.init()

MainApp.mount("#app");
