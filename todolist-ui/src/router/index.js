import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path:'/detail',
    name:'Detail',
    component:()=>import ('../views/Detail.vue')
  },
  {
    path:'/dialog',
    name:'Dialog',
    component:()=>import ('../views/Dialog.vue')
  },
  {
    path:'/dialogpage',
    name:'DialogPage',
    component:()=>import ('../components/dialogPage/dialogPage.vue')
  },
  {
    path:'/basic',
    name:'basic',
    component:()=>import ('../views/basic.vue')
  },
  {
    path:'/index',
    name:'Index',
    component:()=>import ('../views/index.vue')
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router
