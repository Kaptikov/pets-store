import { createApp } from 'vue'
import App from './App.vue'
import './assets/styles/main.scss'
import router from './router/router'
import { createPinia } from 'pinia'

const app = createApp(App)

const pinia = createPinia()

app.use(router).use(pinia).mount('#app')
