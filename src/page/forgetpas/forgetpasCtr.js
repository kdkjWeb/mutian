export default{
    data(){
        return{
            verification: '获取验证码',
            telphone: '',
            verificationCode: '',
            newpwd: '',
            flag: true
        }
    },
    methods: {
        //获取验证码
        verificationBtn(){
            //判断是否是合法的手机号
            let telphoneReg=/^1[3|4|5|8|7][0-9]\d{4,8}$/ ;  //手机号正则表达式
            if(!telphoneReg.test(this.telphone)){
                this.$toast({
                    message: '请输入正确的手机号',
                    duration: 1500
                })
                return;
            }
            //点击获取验证码之后倒计时1分钟
            let num = 60
            let timer = setInterval(()=>{
                num -- 
                this.verification ='请'+num + 's后再试'
                if(num == 0){
                    clearInterval(timer)
                    this.verification = '获取验证码'
                    return;
                }
            },1000)
            //请求后台借口获取验证码
            if(this.flag){
                this.$get('user/getcode',{
                    phone: this.telphone
                },'load').then(res=>{
                    this.flag = false
                })
            }
        },

        //点击提交按钮
        comfirmBtn(){
            //判断内容是否填写完整
            if(!this.telphone || !this.verificationCode){
                this.$toast({
                    message: '请确认内容填写是否完整',
                    duration: 1500
                })
                return
            }
            //获取验证码以及设置密码之后提交到后台
            this.$post('user/forgetPwd',{
                phone: this.telphone,
                code: this.verificationCode,
                newpwd: this.newpwd
            }).then(res=>{
                if(res.code == 0){
                    this.$toast({
                        message: '修改成功',
                        duration: 2000
                    })
                    setTimeout(()=>{
                        this.$router.push({
                            name: 'login'
                        })
                    },2000)
                }
            })
        }
    }
}