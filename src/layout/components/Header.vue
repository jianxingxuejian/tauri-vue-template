<template>
  <div class="flex-start gap-x-2 px-4">
    <div
      v-for="menu in menus"
      :key="menu.key"
      class="flex-center cursor-pointer text-gray-700 hover:text-blue-500 transition-colors duration-300 select-none"
      :class="{ 'text-blue-500!': menu.key === activeKey }"
      @click="handleUpdateMenu(menu.key)"
    >
      <component :is="menu.icon" class="w-5 h-5" />
      <span class="ml-2">{{ menu.label }}</span>
    </div>
  </div>
</template>

<script setup lang="ts">
  import routes from '@/router/modules'

  const route = useRoute()
  const router = useRouter()
  const activeKey = computed(() => route.matched[1].name as string)

  const transformRouteToMenu = (routes: Route.RecordRaw[]): Route.Menu[] =>
    routes.map(({ name, meta, children }) => {
      const icon = meta?.icon ?? children?.[0]?.meta?.icon
      if (meta?.isRoot && children) {
        return { key: children[0].name, label: name, icon }
      } else {
        return {
          key: name,
          label: name,
          icon,
          children: children && transformRouteToMenu(children),
        }
      }
    })

  const menus = computed(() => transformRouteToMenu(routes))

  const handleUpdateMenu = (key: string) => router.push({ name: key })
</script>
