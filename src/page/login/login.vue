<template>
  <div class="login">
      <div class="title">
          <i class="mint-toast-icon mintui mintui-back"></i>
          登录
      </div>
      <!-- banner图 -->
      <div class="banner">
          
      </div>
      <div class="row">
          <div class="row_input">
              <span class="iconfont icon-wode"></span>
              <input type="text" placeholder="手机号">
          </div>
      </div>
      <div class="row">
          <div class="row_input row_input1">
            <span class="iconfont icon-mima"></span>
            <input type="password" placeholder="请输入密码">
          </div>
      </div>

      <div class="login_btn">登录</div>
      <p class="notice">
          <span>快速注册</span>
          <span>忘记密码</span>
      </p>
  </div>
</template>


<script>
export {default} from './loginCtr'
</script>


<style>
/* .login{
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

.banner{
    width: 100%;
    height: 2.95rem;
    background: red;
}

.row{
    width: 100%;
    height: 1rem;
    line-height: 1rem;
    background: #fff;
}
.row_input{
    position: relative;
    width: 7.2rem;
    margin: 0 auto;
}

.row input{
    width: 100%;
    height: 1rem;
    box-sizing: border-box;
    display: block;
    outline: none;
    padding-left: .75rem;
    border: none;
    border-bottom: 1px solid #ddd;
}
.row_input1 input{
    border: none;
}
.row span.iconfont{
    position: absolute;
    left: .2rem;
    top: 0;
    font-size: .4rem;
}
.row span.icon-mima{
    left: .15rem;
    font-size: .5rem;
}
.login_btn{
    font-size: .36rem;
    text-align: center;
    line-height: .85rem;
    width: 7.2rem;
    height: .85rem;
    background: #bcbcbc;
    margin: .4rem auto 0;
    border-radius: .12rem;
    color: #fff;
}

.notice{
    display: flex;
    display: -webkit-flex;
    justify-content: space-between;
    padding: 0 .15rem;
    font-size: .3rem;
}
</style>

