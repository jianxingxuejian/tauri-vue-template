const routes: Route.Config = {
  path: '/counter',
  name: 'counter',
  redirect: '/counter/index',
  component: () => import('@/layout/index.vue'),
  meta: {
    sort: 2,
    isRoot: true,
    icon: 'mingcute:counter-line',
  },
  children: [
    {
      path: 'index',
      name: 'counter_index',
      component: () => import('@/views/counter/index.vue'),
    },
  ],
}

export default routes
