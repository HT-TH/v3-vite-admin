import { createApp } from 'vue'
import App from './App.vue'
import router from './router/'

// pinia
import { createPinia } from 'pinia'

// svg 
import 'virtual:svg-icons-register'
import SvgIcon from './components/SvgIcon/index.vue'

// normalize.css
import './assets/styles/normalize.scss'

createApp(App).use(createPinia()).use(router).component('SvgIcon', SvgIcon).mount('#app')
