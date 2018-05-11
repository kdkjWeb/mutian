<template>
  <div class="signup">
         <div class="title">
            <i class="mint-toast-icon mintui mintui-back"></i>
            会员注册
         </div> 
         <ul class="info_list">
             <li>
                 <span class="icon">
                     <span class="iconfont icon-weibiaoti-_huabanfuben"></span>
                 </span>
                 <span class="title">昵称：</span>
                 <input type="text" placeholder="请输入昵称">
                 <span class="arrow">
                     <span class="iconfont icon-youjiantou1"></span>
                 </span>
             </li>
             <li>
                 <span class="icon">
                     <span class="iconfont icon-dianhua2"></span>
                 </span>
                 <span class="title">手机：</span>
                 <input type="number" placeholder="请输入手机号">
                 <span class="arrow">
                     <span class="iconfont icon-youjiantou1"></span>
                 </span>
             </li>
             <li>
                 <span class="icon">
                     <span class="iconfont icon-yanzhengma"></span>
                 </span>
                 <span class="title">验证码：</span>
                 <input type="number" placeholder="请输入验证码">
                 <span class="arrow">
                     <span class="iconfont icon-youjiantou1"></span>
                 </span>
             </li>
             <li>
                 <span class="icon">
                     <span class="iconfont icon-mima3"></span>
                 </span>
                 <span class="title">密码：</span>
                 <input type="password" placeholder="请输入密码">
                 <span class="arrow">
                     <span class="iconfont icon-youjiantou1"></span>
                 </span>
             </li>
             <li>
                 <span class="icon">
                     <span class="iconfont icon-mima3"></span>
                 </span>
                 <span class="title">确认密码：</span>
                 <input class="password" type="password" placeholder="请确认密码">
                 <span class="arrow">
                     <span class="iconfont icon-youjiantou1"></span>
                 </span>
             </li>
         </ul>   
          <div class="submit_btn">提及</div>
  </div>
</template>


<script>
export {default} from './signupCtr'
</script>


<style scoped>
.signup{
    width: 100%;
    height: 100%;
    background-color: #eaeaea;
}
.title{
    position: relative;
    height: .9rem;
    line-height: .9rem;
    text-align: center;
    width: 100%;
    font-size: .34rem;
    background-color: #fff;
    margin-bottom: .05rem;
}
.title .mintui{
    position: absolute;
    left: .35rem;
}
.info_list{
    padding: 0;
    margin-top: .26rem;
}
.info_list li{
    position: relative;
    list-style: none;
    width: 100%;
    height: 1.05rem;
    margin-bottom: .15rem;
    background: #fff;
    line-height: 1.05rem;
    font-size: .36rem;
}
.info_list li span.icon{
    position: absolute;
    top: .25rem;
    left: .25rem;
    display: inline-block;
    width: .55rem;
    height: .55rem;
    border-radius: 50%;
    background: #ff6da1;
    text-align: center;
    line-height: .55rem;
    color: #fff;
}
.info_list li span.title{
    margin-left: 1rem;
}
.info_list li span.arrow{
    position: absolute;
    right: .2rem;
}
.info_list li input{
    display: inline-block;
    outline: none;
    border: none;
    width: 4.9rem;
    height: 1rem;
    box-sizing: border-box;
    vertical-align: middle；
}
.info_list li input.password{
    width: 4rem;
}

.submit_btn{
    font-size: .36rem;
    text-align: center;
    line-height: .85rem;
    width: 7.2rem;
    height: .85rem;
    background: #bcbcbc;
    margin: .3rem auto 0;
    border-radius: .12rem;
    color: #fff;
}
</style>

