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
            //判断手机号输入是否为空
            /*if(!this.username){
                this.$toast({
                    message: '请输入手机号',
                    duration: 1500
                })
                return;
            }*/
            //判断是否是合法的手机号
            let telphoneReg=/^1[3|4|5|8|7][0-9]\d{4,8}$/ ;  //手机号正则表达式
            if(!telphoneReg.test(this.username)){
                this.$toast({
                    message: '请输入正确的手机号',
                    duration: 1500
                })
                return;
            }

            let num = 60
            let timer = setInterval(()=>{
                num -- 
                this.verification = num + 's'
                if(num == 0){
                    clearInterval(timer)
                    this.verification = '获取验证码'
                    return;
                }
            },1000)

            if(this.flag){
                this.$get('user/getcode',{
                    phone: this.username
                },'load').then(res=>{
                    this.flag = false
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
                password: this.password,
                pid: 0
            },'load').then(res=>{
                if(res.code == 0){
                    this.$toast({
                        message: '注册成功',
                        duration: 2000
                    })
                    setTimeout(()=>{
                        this.$router.push({
                            name: 'login'
                        })
                    },2000)
                }
            })
        },
//      ====返回==
        back(){
        	this.$router.go(-1);
        }
// ============
    
    
    }
}