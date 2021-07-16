import Vue from 'vue'
import VueRouter from 'vue-router'
import bomBox from '../views/bombBox/bomBox'
import mainZu from '../views/main/mainZu'
import mapper from "../views/map/mapper";

Vue.use(VueRouter);
const routes = [
     {
        path: '/main',
        name: 'mainZu',
        component: mainZu
     },
     {
        path: '/',
        name: 'bomBox',
        component: bomBox,
     },
   {
      path:'/map',
      name:'mapper',
      component:mapper,
   }
  ]
;

const router = new VueRouter({
   mode: 'history',
   base: process.env.BASE_URL,
   routes
});

export default router
