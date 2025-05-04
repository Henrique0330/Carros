import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import TelaInicialView from '../views/TelaInicialView.vue'
import Produto from '@/components/Produto.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/home',
      name: 'home',
      component: HomeView
    },
    {
    path: '/',
    name: 'telaInicial',
    component: TelaInicialView
  },
  {
    path: '/produto',
    name: 'Produto',
    component: Produto
  },
  ],
})

export default router