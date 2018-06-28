import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/views/Main'
import Test from 'pages/Test'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Test',
      component: Main,
      children: [
        { path: '/t', name: 'Test', component: Test}
      ]
    }
  ]
})
