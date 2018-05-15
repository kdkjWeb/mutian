export default{
    data(){
        return{
            
        }
    },
    methods: {
        //忘记密码
        forgetpas(){
            this.$router.push({
                name: 'forgetpas'
            })
        },
        //快速注册
        register(){
            this.$router.push({
                name: 'signup'
            })
        },
        //点击登录
        login(){
            this.$router.push({
                name: 'index'
            })
        }
    }
}