import "virtual:windi.css";

import { createApp } from "vue";
import { createPinia } from "pinia";

import Root from "./Root.vue";

const pinia = createPinia();
const app = createApp(Root);

app.use(pinia);
app.mount("#app");
