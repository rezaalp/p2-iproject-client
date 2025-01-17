import { createApp } from "vue";
import { createPinia } from "pinia";
import { markRaw } from "vue";
import App from "./App.vue";
import router from "./router/index.js";
import "sweetalert2/dist/sweetalert2.min.css";

const pinia = createPinia();

const app = createApp(App);
pinia.use(({ store }) => {
  store.router = markRaw(router);
});
app.use(pinia);
app.use(router);

app.mount("#app");
