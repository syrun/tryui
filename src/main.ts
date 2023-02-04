import { createApp } from 'vue'

import TryUI from '../packages/try-ui/index'
import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(router).use(TryUI)

app.mount('#app')
