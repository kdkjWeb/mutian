<template>
  <div class="personal">
      <div class="title">
            <i class="mint-toast-icon mintui mintui-back"></i>
            个人信息
      </div>
      <ul class="user_info">
          <li id="user_header">头像
              <span class="user_header">
                  <img src="../../assets/png/1.png" width="100%" height="100%" alt="头像">
              </span>
              <span class="iconfont icon-youjiantou1"></span>
          </li>
          <li>昵称
              <span class="user_nickname">时光</span>
              <span class="iconfont icon-youjiantou1"></span>
          </li>
          <li>性别
              <span class="user_sex">男</span>
              <span class="iconfont icon-youjiantou1"></span>
          </li>
          <li>手机号码
              <span class="user_phone">13845678912</span>
              <span class="iconfont icon-youjiantou1"></span>
          </li>
          <li>生日
              <span class="user_nickname">1993-01-01</span>
              <span class="iconfont icon-youjiantou1"></span>
          </li>
          <li class="changepas">修改密码
              <span class="iconfont icon-youjiantou1"></span>
          </li>
          <li>管理收货地址
              <span class="iconfont icon-youjiantou1"></span>
          </li>
      </ul>
  </div>
</template>


<script>
export {default} from './personalCtr'
</script>


<style scoped>
/* .personal{
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

.user_info{
    padding: 0;
    margin: 0;
}
#user_header{
    height: 1.4rem;
    line-height: 1.4rem;
    margin-bottom: .2rem;
}
.user_info li{
    position: relative;
    list-style: none;
    font-size: .36rem;
    background-color: #fff;
    padding: .3rem .15rem .28rem;
    margin-bottom: .05rem;
}
.user_info li.changepas{
    margin-top: .4rem;
}
.user_info li span:first-child{
    position: absolute;
    right: .8rem;
}
.user_info li span.iconfont{
     position: absolute;
     right: .2rem;
     font-size: .5rem;
}
.user_info li .user_header{
    position: absolute;
    top: .45rem;
    right: 0;
    display: inline-block;
    width: 1rem;
    height: 1rem;
    border-radius: 50%;
    background: red;
    vertical-align: middle;
    overflow: hidden;
}
.user_info li .user_header img{
    border-radius: 50%;
}
/* .user_info li .iconfont{
    float: right;
} */
</style>

