import { createApp} from "vue";
import App from "./App.vue";
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
import router from "./router";
import {createPinia} from "pinia"
import piniaPersist from "pinia-plugin-persist"
const app = createApp(App)
const pinia = createPinia()
pinia.use(piniaPersist)


app.use(pinia)
app.use(ElementPlus)
app.use(router)

app.mount("#app")