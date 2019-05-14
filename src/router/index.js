import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Login from '@/pages/Login'
import Signup from '@/pages/Signup'
import AuthGuard from './auth-guard'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '*',
      beforeEnter: AuthGuard
    },
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld,
      beforeEnter: AuthGuard
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/signup',
      name: 'Signup',
      component: Signup
    },
  ]
})
