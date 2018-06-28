import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/views/Main'
import Login from '@/views/Login'
import NotFound from '@/views/404'
import Test from 'pages/Test'
import Dashboard from 'pages/Dashboard'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/',
      name: 'Test',
      component: Main,
      children: [
        { path: '/t', name: 'Test', component: Test},
        { path: '/dashboard', name: 'Dashboard', component: Dashboard},
      ]
    },
    {
      path: '*',
      name: '404',
      component: NotFound
    }
  ]
})
