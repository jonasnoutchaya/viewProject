import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/home',
    name: 'home',
    component: () => import('../views/homeView.vue')
  },
  {
    path: '/infoMedicament/:id',
    name: 'infoMedicament',
    component: () => import('../views/infoMedicament.vue')
  },
  {
    path: '/oneUserCommands',
    name: 'oneUserCommands',
    component: () => import('../views/oneUserCommands.vue')
  },
  

  {
    path: '/messageriePage',
    name: 'messageriePage',
    component: () => import('../views/messageriePage.vue')
  },
  {
    path: '/messageriePage',
    name: 'messageriePage',
    component: () => import('../views/messageriePage.vue')
  },
  {
    path: '/charioPage',
    name: 'charioPage',
    component: () => import('../views/charioPage.vue')
  },
  {
    path: '/allUsersPage',
    name: 'allUsersPage',
    component: () => import('../views/allUsersPage.vue')
  },
  {
    path: '/InfoMedicament2/:id',
    name: 'InfoMedicament2',
    component: () => import('../views/InfoMedicament2.vue')
  },
  {
    path: '/statistiquePage/',
    name: 'statistiquePage',
    component: () => import('../views/statistiques.vue')
  },
  {
    path: '/userMessages/:id/:name',
    name: 'userMessages',
    component: () => import('../views/userMessages.vue'),
  },
  {
    path: '/userAchats/:id',
    name: 'userAchats',
    component: () => import('../views/userAchats.vue')
  },
  {
    path: '/connectPage',
    name: 'connectPage',
    component: () => import('../views/connectPage.vue'),
  },
  {
    path: '/dashBoardPage',
    name: 'dashBoardPage',
    component: () => import('../views/dashBoardPage.vue'),
  },
  {
    path: '/myDashBoardPage',
    name: 'myDashBoardPage',
    component: () => import('../views/myDashBoardPage.vue'),
  },
  {
    path: '/allbuys/:id',
    name: 'allbuys',
    component: () => import('../views/allbuys.vue'),
  },
  {
    path: '/historyPage.vue',
    name: 'historyPage',
    component: () => import('../views/historyPage.vue'),
  },
  {
    path: '/produitsPage',
    name: 'produitsPage',
    component: () => import('../views/produitsPage.vue'),
  },
  {
    path: '/mythingsPage.vue',
    name: 'mythingsPage',
    component: () => import('../views/mythingsPage.vue'),
  },
  {
    path: '/oneUserPurchasses',
    name: 'oneUserPurchasses',
    component: () => import('../views/oneUserPurchasses.vue'),
  },
  {
    path: '/detailsPage/:id',
    name: 'detailsPage',
    component: () => import('../views/detailsPage.vue'),
  },

  {
    path: '/categoriePage/:id',
    name: 'categoriePage',
    component: () => import('../views/categoriePage.vue'),
  },

  {
    path: '/adminPage',
    name: 'admin',
    component: () => import('../views/adminPage.vue'),
  },
  {
    path: '/commandePage',
    name: 'commandePage',
    component: () => import('../views/commandePage.vue'),
  }
  

]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
