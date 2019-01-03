import Vue from 'vue'
import Router from 'vue-router'
import UserInfo from '@/components/UserInfo'
import Detail from '@/components/Detail'
import Check from '@/components/Check'
import Relatives from '@/components/Relatives'
import About from '@/components/About'
import Service from '@/components/Service'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/list',
      component: UserInfo,
      name: 'list'
    },
    {
      path: '/detail/:id',
      component: Detail,
      name: 'detail'
    },
    {
      path: '/checksetting',
      component: Check,
      name: 'check'
    },
    {
      path: '/relatives',
      component: Relatives,
      name: 'relatives'
    },
    {
      path: '/about',
      component: About,
      name: 'about'
    },
    {
      path: '/service',
      component: Service,
      name: 'service'
    },
    {
      path: '/',
      redirect: '/list',
    }
  ],
  mode: 'history'
})
