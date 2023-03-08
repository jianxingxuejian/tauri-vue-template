const routes: Route.RecordRaw[] = [
  {
    path: '/',
    name: 'root',
    redirect: '/home',
    component: () => import('@/layout/index.vue'),
  },
]

export default routes
