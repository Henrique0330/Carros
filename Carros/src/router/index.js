import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import TelaInicialView from '../views/TelaInicialView.vue'
import Produto from '@/components/Produto.vue'
import LoginComponentView from '@/views/LoginComponentView.vue'
import CadastroComponentView from '@/views/CadastroComponentView.vue'

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
    name: 'home',
    component: HomeView
  },
  {
    path: '/TelaInicial',
    name: 'telaInicial',
    component: TelaInicialView
  },
  {
    path: '/produto',
    name: 'Produto',
    component: Produto
  },
  ],
    path: '/Login',
    name: 'loginComponent',
    component: LoginComponentView
  },
  {
    path: '/Cadastro',
    name: 'cadastroComponent',
    component: CadastroComponentView
  },
  ]
})

export default router