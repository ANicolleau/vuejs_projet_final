import { createApp } from "vue"
import App from "./App.vue"
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"
import filterStore from "@/store/filters";


const app = createApp(App)
app.use(filterStore)
app.mount("#app")


