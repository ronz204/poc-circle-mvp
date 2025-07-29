import "./style.css";
import { createApp } from "vue";
import Main from "@App/Main.vue";
import { Router } from "@Routes/router";

const app = createApp(Main);
app.use(Router);

app.mount("#app");
