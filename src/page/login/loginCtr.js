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
                //登录成功之后保存用户信息存入vuex
                this.$store.commit('setUserInfo',res.data);
                
				sessionStorage.setItem("user_name",res.data.username);  //存储用户名
				sessionStorage.setItem("nick_name",res.data.nickname);  //存储昵称
				sessionStorage.setItem("token",res.data.token);  //存储token
				sessionStorage.setItem("type",res.data.type);  //存储用户等级
				
                //登录成功之后跳转到首页
                setTimeout(()=>{
                    this.$router.push({
                        name: 'index'
                    })
                },1500)
            })
        }
    }
}