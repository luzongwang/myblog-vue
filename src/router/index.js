import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/views/Login'
import Home from '@/components/Home'
import Siderbar from '@/components/Siderbar'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/login',
      hidden: true,
      component: Login
    },
    {
      path: '/',
      name: 'Home',
      component: Home,
      redirect: '/home',
      hidden: false,
      meta: { title: '首页', icon: '', noCache: true },
      children: [
        {
          path: 'home',
          name: 'Home',
          component: Home,
          meta: { title: '首页', icon: 'fa fa-dashboard fa-lg', noCache: true }
        },
        {
          path: 'home2', 
          name: '首页2', 
          component: Home,
          children: [
            {path: 'home21', name: '首页21', component: Home,},
            {path: 'home22', name: '首页22', component: Home, },
          ] }, 
      ]
    },
    {
      path: '/siderbar',
      name: 'Siderbar',
      component: Siderbar
    },
  ]
})
