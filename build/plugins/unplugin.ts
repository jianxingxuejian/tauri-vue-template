import Icons from 'unplugin-icons/vite'
import { FileSystemIconLoader } from 'unplugin-icons/loaders'
import Components from 'unplugin-vue-components/vite'
import IconsResolver from 'unplugin-icons/resolver'
import AutoImport from 'unplugin-auto-import/vite'

export default [
  Icons({
    autoInstall: true,
    compiler: 'vue3',
    scale: 1,
    defaultClass: 'inline-block',
    customCollections: {
      // load custom icons
      custom: FileSystemIconLoader('assets/icons'),
    },
  }),
  Components({
    dirs: ['src/components'],
    deep: true,
    directives: true,
    dts: 'src/types/components.d.ts',
    types: [{ from: 'vue-router', names: ['RouterLink', 'RouterView'] }],
    include: [/\.vue$/, /\.vue\?vue/],
    exclude: [/[\\/]node_modules[\\/]/],
    resolvers: [
      IconsResolver({
        customCollections: ['custom'],
        prefix: 'icon',
      }),
    ],
  }),
  AutoImport({
    imports: ['vue', 'vue-router', 'pinia'],
    dts: 'src/types/auto-import.d.ts',
    include: [/\.vue$/, /\.vue\?vue/, /\.ts$/],
    eslintrc: {
      enabled: true,
      filepath: './.eslintrc-auto-import.json',
    },
  }),
]
