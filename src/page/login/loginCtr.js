export default{
    data(){
        return{
            username: '',
            password: ''
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
            if(!this.username){
                this.$toast('请输入手机号')
                return;
            }
            if(!this.password){
                this.$toast('请输入密码')
                return;
            }
            this.$post('login',{
                username: this.username,
                password: this.password
            },'load').then(res=>{
                setTimeout(()=>{
                    this.$router.push({
                        name: 'index'
                    })
                },1500)
            })
        }
    }
}