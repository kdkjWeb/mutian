<template>
  <div class="register">
         <div class="title">
            <i class="mint-toast-icon mintui mintui-back"></i>
            快速注册
        </div>
        <div class="phone">
            <span>手机号</span>
            <input type="number" placeholder="请输入手机号">
        </div>
        <div class="verification">
            <div class="verification_input">
                <span>验证码</span>
                <input type="number" placeholder="请输入验证码">
            </div>
            <div class="verification_btn">获取验证码</div>
        </div>

        <div class="next_btn">下一步</div>
  </div>
</template>


<script>
export {default} from './registerCtr'
</script>


<style scoped>
/* .register{
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
}
.title .mintui{
    position: absolute;
    left: .35rem;
}

.phone{
    position: relative;
    width: 100%;
    height: 1rem;
    background-color: #fff;
    margin: .3rem 0 .3rem;
    line-height: 1.05rem;
}
.phone span{
    position: absolute;
    left: .25rem;
    top: .1rem;
    font-size: .32rem;
}
.phone input{
    display: inline-block;
    height: 100%;
    vertical-align: middle;
    width: 100%;
    padding-left: 1.5rem;
    outline: none;
    border: none;
    box-sizing: border-box;
}
.verification{
    display: flex;
    display: -webkit-flex;
    width: 100%;
    height: 1rem;
    line-height: 1rem;
    justify-content: space-between;
}
.verification_input{
    position: relative;
    width: 4.85rem;
    height: 100%;
    background-color: #fff;
}
.verification_input input{
    display: block;
    height: 100%;
    vertical-align: middle;
    width: 100%;
    padding-left: 1.5rem;
    outline: none;
    border: none;
    box-sizing: border-box;
}
.verification_input span{
    position: absolute;
    left: .25rem;
    font-size: .32rem;
}
.verification_btn{
    color: #9d9d9d;
    font-size: .32rem;
    width: 2.52rem;
    text-align: center;
    background-color: #fff;
}

.next_btn{
    font-size: .36rem;
    text-align: center;
    line-height: .85rem;
    width: 7.2rem;
    height: .85rem;
    background: #bcbcbc;
    margin: .55rem auto 0;
    border-radius: .12rem;
    color: #fff;
}
</style>
