import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import TelaInicialView from '../views/TelaInicialView.vue'
import ListaProdutosView from '@/views/ListaProdutosView.vue'
import GaragemView from '@/views/GaragemView.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/home',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/',
      name: 'telaInicial',
      component: TelaInicialView,
    },
    {
      path: '/ListaProdutos',
      name: 'ListaProdutos',
      component: ListaProdutosView,
    },
    {
      path: '/garagem',
      name: 'garagem',
      component: GaragemView
    }
  ]
})

export default router