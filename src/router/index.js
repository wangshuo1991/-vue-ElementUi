import Vue from 'vue'
import Router from 'vue-router'
import UserInfo from '@/components/UserInfo'
import Detail from '@/components/Detail'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/list',
      component: UserInfo
    },
    {
      path: '/detail/:id',
      component: Detail,
      name: 'detail'
    },
    {
      path: '/',
      redirect: '/list'
    }
  ],
  mode: 'history'
})
