///<reference types="node" />
import devtools from '@vue/devtools'
import { createApp } from 'vue'
import { setupRouter } from './router'
import { setupStore } from './stores'
import App from './App.vue'

import 'uno.css'
// https://github.com/unocss/unocss/tree/main/packages/reset
import '@unocss/reset/tailwind-compat.css'

async function setupApp() {
  const app = createApp(App)
  await setupRouter(app)
  setupStore(app)
  app.mount('#app')
}

setupApp()

// run pnpm devtools
// if you don't run devtools, it will print error to console, please comment out it
if (process.env.NODE_ENV === 'development') {
  devtools.connect('http://localhost', 8098)
}
