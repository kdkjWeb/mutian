// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

//引用mint-ui
import Mint from 'mint-ui'
import 'mint-ui/lib/style.min.css'
Vue.use(Mint)

//引用阿里图标
import '@/assets/font/iconfont.css'

// Vue.prototype.$mint = Mint;
Vue.prototype.$mint = Mint;


//获取vuex
import store from './store/store.js'   //vuex

// 封装方法axios的get以及post
import  Server from './server/server.js'
Vue.prototype.$get = Server.get;  //get请求
Vue.prototype.$post = Server.post;  //post请求

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
