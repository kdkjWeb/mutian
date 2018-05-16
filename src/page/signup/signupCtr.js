export default{
    data(){
        return{
            verification: '获取验证码',
            flag: true,
            nickname: '',   //昵称
            username: '',   //手机号
            pids: '',   //验证码
            password: '',   //密码
            comfirmPas: ''  //确认密码
        }
    },
    methods:{
        //获取验证码
        verificationBtn(){
            if(!this.username){
                this.$toast({
                    message: '请输入手机号',
                    duration: 1500
                })
                return;
            }
            if(this.flag){
                this.$get('user/getcode',{
                    phone: this.username
                },'load').then(res=>{
                    this.flag = false
                    if(res.code == 0){
                        this.verification = '60s';
                        setInterval(()=>{
                            let num = parseInt(this.verification )
                            num -- 
                            this.verification = num + 's'
                            if(num == 0){
                                this.verification = '获取验证码'
                            }
                        },1000)
                    }
                })
            }else{
                this.$toast({
                        message: '请'+this.verification + '再试',
                        duration: 1500
                    })
            }
        },
        //提交
        submitBtn(){
            if(!this.nickname || !this.username || !this.pids || !this.password || !this.comfirmPas){
                this.$toast({
                    message: '请确认内容是否填写完整',
                    duration: 2000
                })
                return;
            }
            if(this.password != this.comfirmPas){
                this.$toast({
                    message: '两次输入的密码不一致，请确认后再输入',
                    duration: 2000
                })
                return;
            }
            this.$post('user/addUser',{
                nickname: this.nickname,
                username: this.username,
                pids: this.pids,
                password: this.password
            }).then(res=>{
                console.log(res)
            })
        }
    }
}