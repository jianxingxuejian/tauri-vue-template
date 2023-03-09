import type { App } from 'vue'
import { createPinia } from 'pinia'

/** setup state stores */
export function setupStore(app: App) {
  const store = createPinia()
  app.use(store)
}

export * from './counter'
