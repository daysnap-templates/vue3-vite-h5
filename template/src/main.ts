import { createApp } from 'vue'
import App from './App.vue'

const app = createApp(App)

;((s) => s.keys().forEach((k) => s(k).default && app.use(s(k).default)))(
  require.context('./plugins', true, /\.(t)s$/),
)

app.mount('#app')
