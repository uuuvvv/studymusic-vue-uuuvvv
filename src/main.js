import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// 引入element-plus样式以及按需引入对应的组件
import 'element-plus/dist/index.css'
import { ElButton, ElRow } from 'element-plus'

const app = createApp(App)

app.config.globalProperties.$ELEMENT = {
  // options
}
// 全局注册组件
app.use(ElButton).use(ElRow)
// 全局引入store和路由
app.use(store).use(router)
app.mount('#app')
