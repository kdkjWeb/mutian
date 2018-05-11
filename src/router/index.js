import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
Vue.use(Router)

//项目所有的路由文件
import  index from '@/page/index/index.vue'
import login from '@/page/login/login'

<<<<<<< HEAD
=======

Vue.use(Router)
>>>>>>> c963665a89fea4b1e3b514dd278af268721a3706

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },{
      path: '/login',
      name: 'login',
      component: login
    }
  ]
})
