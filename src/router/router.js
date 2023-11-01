import Main from '@/pages/Main.vue'
import Catalog from '@/pages/Catalog.vue'
import ProductPage from '@/pages/ProductPage.vue'
import FavouritePage from '@/pages/FavouritePage.vue'
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'main',
    component: Main,
  },
  {
    path: '/catalog/',
    name: 'catalog',
    component: Catalog,
  },
  {
    path: '/product/:id',
    name: 'productPage',
    component: ProductPage,
  },
  {
    path: '/favourite/',
    name: 'favouritePage',
    component: FavouritePage,
  },
]

const router = createRouter({
  routes,
  history: createWebHistory(import.meta.env.BASE_URL),
})

export default router
