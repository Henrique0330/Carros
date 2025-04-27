import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import TelaInicialView from '../views/TelaInicialView.vue'
import ListaProdutosViewVue from '@/views/ListaProdutosView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/TelaInicial',
    name: 'telaInicial',
    component: TelaInicialView
  },
  {
    path: '/ListaProdutos',
    name: 'ListaProdutos',
    component: ListaProdutosViewVue
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router