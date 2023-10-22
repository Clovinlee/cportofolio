import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import FontAwesomeIcon from './helper/fontawesomeicon.js';

import './assets/main.css'

const app = createApp(App)
// Animation state for whole page. home|about|projects|contact
app.config.globalProperties.animState = [0,0,0,1]; 

app.component('font-awesome-icon', FontAwesomeIcon)
app.use(router)

app.mount('#app')
