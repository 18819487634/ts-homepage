import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import 'lib-flexible/flexible.js'
import '@/assets/css/index.scss'

createApp(App)
  .use(router)
  .use(store)
  .mount('#app')
