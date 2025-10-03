import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('@/views/HomeView.vue'),
    children: [
      {
        path: 'thankyou',
        name: 'thankyou',
        component: () => import('@/views/ThankyouView.vue'),
      },
      {
        path: 'product/:id',
        name: 'product',
        component: () => import('@/views/ProductView.vue'),
        props: true,
      },
    ],
  },
  {
    path: '/admin',
    name: 'admin',
    component: () => import('@/views/AdminView.vue'),
    // children: [
    //   {
    //     path: 'thankyou',
    //     name: 'thankyou',
    //     component: () => import('@/views/admin/ThankyouView.vue'),
    //   },
    //   {
    //     path: 'product/:id',
    //     name: 'product',
    //     component: () => import('@/views/admin/ProductView.vue'),
    //   },
    // ],
  },
  {
    path: '/:pathMatch(.*)*',
    component: () => import('@/views/ErrorView.vue'),
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior() {
    document.getElementById('app').scrollIntoView({ behavior: 'smooth' })
  },
})

export default router
