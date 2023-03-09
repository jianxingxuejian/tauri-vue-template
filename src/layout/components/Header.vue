<template>
  <div class="px-4 flex-start gap-x-2">
    <div
      v-for="menu in menus"
      :key="menu.key"
      class="cursor-pointer"
      @click="handleUpdateMenu(menu.key)"
    >
      <span v-if="menu.key === activeKey" class="text-blue-500">🔵{{ menu.label }}</span>
      <span v-else>{{ menu.label }}</span>
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
