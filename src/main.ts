import { createApp } from 'vue'
import App from './App.vue'
import './styles/tailwind.css'
import router from './router'

const app = createApp(App)
console.log(import.meta.env)

app.use(router)

app.mount('#app')
