import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
Vue.use(Router)

//项目所有的路由文件
import index from '@/page/index/index.vue'   //首页
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
import vip from '@/page/vip/vip'  //推广大使（会员）
import shoppingcar from '@/page/shoppingcar/shopcar'  //购物车
import story from '@/page/brandstory/story'  //品牌故事
import productdetails from '@/page/productdetails/productdetails'    //商品详情
import memberbenefits from '@/page/memberbenefits/memberbenefits'   //申请成为会员
import productadvantages from '@/page/productadvantages/productadvantages'    //产品优势
import purchasenotes from '@/page/purchasenotes/purchasenotes'   //购买须知
import confirmorder from '@/page/confirmorder/confirmorder'    //确认订单
import rushtobuy from '@/page/rushtobuy/rushtobuy'  //限时抢购
import newwelfare from '@/page/newwelfare/newwelfare'  //新人专享
import myorder from '@/page/myorder/myorder'  //我的订单
import collection from '@/page/collection/collection'  //我的收藏
import myteam from '@/page/myteam/myteam'  //我的团队


import home from '@/page/home/home'


Vue.use(Router)


export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: home,
      redirect: 'index',
      children: [
        {
          path: '/',
          name: 'index',
          component: index,
        },{
          path: '/memberbenefits',
          name: 'memberbenefits',
          component: memberbenefits
        },{
          path:'/shoppingcar',
          name:'shoppingcar',
          component:shoppingcar
        },{
          path: '/personalcenter',
          name: 'personalcenter',
          component: personalcenter
        }
      ]
    },{
      path:'/story',
      name:'story',
      component:story
    },{
      path: '/productadvantages',
      name: 'productadvantages',
      component: productadvantages
    },{
      path: '/purchasenotes',
      name: 'purchasenotes',
      component: purchasenotes
    },{
      path: '/login',
      name: 'login',
      component: login
    },{
      path: '/forgetpas',
      name: 'forgetpas',
      component: forgetpas
    },{
      path: '/register',
      name: 'register',
      component: register
    },{
      path: '/signup',
      name: 'signup',
      component: signup
    },{
      path: '/personal',
      name: 'personal',
      component: personal
    },{
      path: '/changepas',
      name: 'changepas',
      component: changepas
    },{
      path: '/setpas',
      name: 'setpas',
      component: setpas
    },{
      path: '/allwage',
      name: 'allwage',
      component: allwage
    },{
      path: '/bondbankcard',
      name: 'bondbankcard',
      component: bondbankcard
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
    },{
    	path:'/vip',
    	name:'vip',
    	component:vip
    },{
      path: '/productdetails',
      name: 'productdetails',
      component: productdetails
    },{
      path: '/confirmorder',
      name: 'confirmorder',
      component: confirmorder
    },{
    	path: '/rushtobuy',
      name: 'rushtobuy',
      component: rushtobuy
    },{
    	path: '/newwelfare',
      name: 'newwelfare',
      component: newwelfare
    },{
    	path: '/myorder',
      name: 'myorder',
      component: myorder
    },{
    	path: '/collection',
      name: 'collection',
      component: collection
    },{
    	path: '/myteam',
      name: 'myteam',
      component: myteam
    }
  ]
})


