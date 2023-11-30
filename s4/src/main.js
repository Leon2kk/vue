import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
//import store from './store'

import './assets/style/style.css'

//createApp(App).mount('#app')

createApp(App).use(router).mount('#app')