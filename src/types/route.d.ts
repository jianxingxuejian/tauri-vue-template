import { Component, FunctionalComponent, VNodeChild } from 'vue'

declare global {
  namespace Route {
    interface Base {
      name: string
      path: string
      redirect?: string
      component: Component
    }

    interface Config extends Base {
      meta: Meta & {
        icon?: string | FunctionalComponent
      }
      children?: Optional<Config, 'meta'>[]
    }

    interface RecordRaw extends Base {
      meta?: Meta & {
        icon?: () => VNodeChild
      }
      children?: RecordRaw[]
    }

    interface Meta {
      sort?: number
      isRoot?: boolean
    }

    type Module = Record<string, { default: Config | undefined }>

    interface Menu {
      key: string
      label: string
      icon?: () => VNodeChild
      children?: Menu[]
    }
  }
}
