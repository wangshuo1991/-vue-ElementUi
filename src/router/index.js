import Vue from 'vue'
import Router from 'vue-router'
import Vuex from '../store/store'
import UserList from '@/components/UserList'
import Detail from '@/components/Detail'
import Check from '@/components/Check'
import Relatives from '@/components/Relatives'
import About from '@/components/About'
import Service from '@/components/Service'
import Setting from '@/components/Setting'
import Login from '@/components/Login'

Vue.use(Router)
Vue.use(Vuex)


const router = new Router({
  routes: [
    {
      path: '/userlist',
      component: UserList,
      name: 'userlist'
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
      path: '/setting',
      component: Setting,
      name: 'setting'
    },
    {
      path: '/login',
      component: Login,
      name: 'login'
    },
    {
      path: '/',
      redirect: '/login'
    }
  ],
  mode: 'history'
});

/* // 全局导航守卫
router.beforeEach((to, from, next) => {

  console.log('开始守卫');
  let loginState = Vuex.state.isLogin;
  if (loginState) {
    console.log('success');
    
    next({path: '/userlist'})
  } else {
    console.log('failed');
    next();
  }
  
  

}) */

export default router;

