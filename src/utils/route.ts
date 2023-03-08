import type { VNode } from 'vue'
import { Icon } from '@iconify/vue'

export function transformModeleToRoute(module: Route.Module): Route.RecordRaw[] {
  const configs: Route.Config[] = []
  Object.values(module).forEach(item => {
    if (item.default) {
      configs.push(item.default)
    }
  })
  return transformConfigToRoute(configs)
}

function transformConfigToRoute(
  configs: Route.Config[] | Optional<Route.Config, 'meta'>[]
): Route.RecordRaw[] {
  const routes: Route.RecordRaw[] = []
  configs.sort((next, pre) => Number(next?.meta?.sort) - Number(pre?.meta?.sort))
  configs.forEach(item => {
    const { meta, children, ...base } = item
    const { icon, ...other } = meta || {}
    const route: Route.RecordRaw = {
      ...base,
      meta: {
        icon: transformIcon(icon),
        ...other,
      },
      children: children && transformConfigToRoute(children),
    }
    routes.push(route)
  })
  return routes
}

function transformIcon(
  icon?: Route.Config['meta']['icon'],
  size?: number | string,
  color?: string
): undefined | (() => VNode) {
  if (!icon) {
    return undefined
  }

  const style: { color?: string; size?: string } = {}
  if (size) {
    if (typeof size === 'string') {
      style.size = size
    }
    if (typeof size === 'number') {
      style.size = `${size}px`
    }
  }
  if (color) {
    style.color = color
  }

  if (typeof icon === 'string') {
    return () => h(Icon, { icon, style })
  }

  return () => h(Icon, { icon, style })
}
