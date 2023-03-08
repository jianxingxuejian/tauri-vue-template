import type { PluginOption } from 'vite'
import unocss from './unocss'
import unplugin from './unplugin'
import vue from './vue'

/**
 * setup vite plugins
 */
export function setupVitePlugins(): PluginOption[] {
  return [unocss, ...unplugin, vue]
}
