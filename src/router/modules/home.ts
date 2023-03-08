const routes: Route.Config = {
  path: '/home',
  name: 'home',
  redirect: '/home/index',
  component: () => import('@/layout/index.vue'),
  meta: {
    sort: 1,
    isRoot: true,
    icon: 'mdi:home-outline',
  },
  children: [
    {
      path: 'index',
      name: 'home_index',
      component: () => import('@/views/home/index.vue'),
    },
  ],
}

export default routes
