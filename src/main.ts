import "./assets/main.css";
import { createApp } from "vue";
import App from "./App.vue";
import { Amplify } from "aws-amplify";
import outputs from "./amplifyconfiguration.json";

Amplify.configure(outputs);

createApp(App).mount("#app");
