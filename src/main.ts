import { createApp } from 'vue'
import App from './App.vue'

const theme = localStorage.getItem("theme") ?? "light"
document.documentElement.dataset.theme = theme

createApp(App).mount('#app')