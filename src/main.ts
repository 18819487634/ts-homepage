import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import 'lib-flexible/flexible.js'
import '@/assets/css/index.scss'


const app = createApp(App)

// 全局异常提示
app.config.errorHandler = function (err:unknown, instance:any, info:string):void {
  console.log(err)
  // console.log('异常定位')
  // for (let key in instance) {
  //   console.log(instance[key])
  // }
}

app.use(router)
  .use(store)
  .mount('#app')
