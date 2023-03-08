import { createApp } from 'vue'
import { setupRouter } from './router'
import App from './App.vue'

import 'uno.css'
// https://github.com/unocss/unocss/tree/main/packages/reset
import '@unocss/reset/tailwind-compat.css'

async function setupApp() {
  const app = createApp(App)
  await setupRouter(app)
  app.mount('#app')
}

setupApp()
