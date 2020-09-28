import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
const app=createApp(App)
const icons: any = Icons
for(const i in icons){
    app.component(i,icons[i])
}
createApp(App)
app.use(store)
app.use(router)
app.mount('#app')
