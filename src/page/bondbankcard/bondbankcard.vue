<template>
  <div class="bondbankcard">
      <div class="title">
            <i class="mint-toast-icon mintui mintui-back"></i>
            绑定银行卡
      </div>
      <div class="notice_info">
          <h1>完善个人信息</h1>

             <ul class="info_list">
             <li>
                 <span class="icon">
                     <span class="iconfont icon-dianhua2"></span>
                 </span>
                 <span class="title">手机号：</span>
                 <input type="number" placeholder="请输入绑定银行卡手机号">
             </li>
             <li class="verification">
                 <span class="icon">
                     <span class="iconfont icon-yanzhengma3"></span>
                 </span>
                 <span class="title">验证码：</span>
                 <input type="number" placeholder="请输入验证码">
                 <span class="verification_btn">获取验证码</span>
             </li>
             <li>
                 <span class="icon">
                     <span class="iconfont icon-777"></span>
                 </span>
                 <span class="title">真实姓名：</span>
                 <input type="text" placeholder="请输入真实姓名">
             </li>
             <li>
                 <span class="icon">
                     <span class="iconfont icon-yinhangqia1"></span>
                 </span>
                 <span class="title">银行卡号：</span>
                 <input type="text" placeholder="请输入1～18位银行卡号">
             </li>
             <li>
                 <span class="icon">
                     <span class="iconfont icon-icon-copy"></span>
                 </span>
                 <span class="title">开户银行：</span>
                 <input class="text" type="password" placeholder="请确认开户银行地址">
             </li>
         </ul>  
         <div class="submit_btn">提交</div>
      </div>
  </div>
</template>


<script>
export {default} from './bondbankcardCtr'
</script>


<style scoped>
/* .bondbankcard{
    width: 100%;
    height: 100%;
    background-color: #eaeaea;
} */
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

.notice_info{
    width: 6.7rem;
    background: #fff;
    margin: 0 auto;
    padding-bottom: .01rem;
}
.notice_info h1{
    color: #e61200;
    text-align: center;
    font-size: .5rem;
    padding: .35rem 0;
    border-bottom: .05rem solid #eaeaea;
}



.info_list{
    padding: 0;
    /* margin-top: .26rem; */
    margin: 0;
}
.info_list li{
    position: relative;
    list-style: none;
    width: 100%;
    height: 1.05rem;
    background: #fff;
    line-height: 1.05rem;
    font-size: .36rem;
    border-bottom: .05rem solid #eaeaea;
}
.info_list li span.icon{
    position: absolute;
    top: .25rem;
    left: .25rem;
    display: inline-block;
    width: .55rem;
    height: .55rem;
    border-radius: 50%;
    background: #ff9710;
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
    width: 3.85rem;
    height: 1rem;
    box-sizing: border-box;
    vertical-align: middle；
}
.info_list li input.password{
    width: 3rem;
}

.verification{
    position: relative;
}
.verification input{
    width: 2.5rem !important;
}
.verification_btn{
    display: inline-block;
    width: 1.9rem;
    height: .55rem;
    position: absolute;
    right: .15rem;
    top: .25rem;
    z-index: 99;
    background: #e4e4e4;
    font-size: .32rem;
    text-align: center;
    line-height: .55rem;
}

.submit_btn{
    width: 1.95rem;
    height: .58rem;
    text-align: center;
    line-height: .58rem;
    margin: .5rem auto .6rem;
    background-color: #e51200;
    color: #fff;
    font-size: .32rem;
}
</style>

