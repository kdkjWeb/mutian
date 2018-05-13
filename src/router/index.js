import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
Vue.use(Router)

//项目所有的路由文件
import  index from '@/page/index/index.vue'   //首页
import login from '@/page/login/login'   //登录
import register from '@/page/register/register'    //注册
import setpas from '@/page/setpas/setpas'   //设置密码
import forgetpas from '@/page/forgetpas/forgetpas'   //忘记密码
import changepas from '@/page/changepas/changepas'   //修改密码
import signup from '@/page/signup/signup'   //会员注册
import allwage from '@/page/allwage/allwage'   //当月总工资
import bondbankcard from '@/page/bondbankcard/bondbankcard'    //绑定银行卡
import personal from '@/page/personal/personal'   //个人信息
import personalcenter from '@/page/personalcenter/personalcenter'   //个人中心会员页面
import monthbouns from '@/page/monthbouns/monthbouns'   //本月个人奖金
import accumulativebouns from '@/page/accumulativebouns/accumulativebouns'   //累积个人奖金
import teamleaderboard from '@/page/teamleaderboard/teamleaderboard'    //团队排行榜

Vue.use(Router)


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
    },{
      path: '/register',
      name: 'register',
      component: register
    },{
      path: '/setpas',
      name: 'setpas',
      component: setpas
    },{
      path: '/forgetpas',
      name: 'forgetpas',
      component: forgetpas
    },{
      path: '/changepas',
      name: 'changepas',
      component: changepas
    },{
      path: '/signup',
      name: 'signup',
      component: signup
    },{
      path: '/allwage',
      name: 'allwage',
      component: allwage
    },{
      path: '/bondbankcard',
      name: 'bondbankcard',
      component: bondbankcard
    },{
      path: '/personal',
      name: 'personal',
      component: personal
    },{
      path: '/personalcenter',
      name: 'personalcenter',
      component: personalcenter
    },{
      path: '/monthbouns',
      name: 'monthbouns',
      component: monthbouns
    },{
      path: '/accumulativebouns',
      name: 'accumulativebouns',
      component: accumulativebouns
    },{
      path: '/teamleaderboard',
      name: 'teamleaderboard',
      component: teamleaderboard
    }
  ]
})
