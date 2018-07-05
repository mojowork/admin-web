import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/views/Main'
import Login from '@/views/Login'
import NotFound from '@/views/404'

// pages
import Test from 'pages/Test'
import Dashboard from 'pages/Dashboard'
import Message from 'pages/Message'

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
        { path: '/', redirect: '/dashboard'},
        { path: '/dashboard', name: 'Dashboard', component: Dashboard},
        { path: '/message', name: 'Message', component: Message},
        { path: '/t', name: 'Test', component: Test},
      ]
    },
    {
      path: '*',
      name: '404',
      component: NotFound
    }
  ]
})
