import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

// ElementPlus
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'

// @formkit/auto-animate
import { autoAnimatePlugin } from '@formkit/auto-animate/vue'

import BackToTop from 'vue-backtotop'

import App from './App.vue'
import router from './router'

const app = createApp(App)

for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
  }

app.use(createPinia())
app.use(router)
app.use(ElementPlus)
app.use(autoAnimatePlugin)
app.use(BackToTop)

app.mount('#app')
