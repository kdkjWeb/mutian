import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)


//自定义的一些全局变量写在里面
const state = {
    userInfo: {}
}

export default new Vuex.Store({
    state,
    //给自定义属性设置值
    mutations: {
        setUserInfo(state,data){
            state.userInfo = data
        }
    },
    //获取自定义属性的值
    getters: {
        getUserInfo: state => state.userInfo
    }
})
