<template>
  <div class="personalcenter">
         <div class="personalcenter_banner">
             <div class="user_header" @click="personalCenter">
                 <img src="../../assets/png/1.png" width="100%" height="100%" alt="头像">
             </div>
             <p>梦想</p>
             <p>15923634567</p>
             <p class="user_header_address">管理收货地址
                  <span class="iconfont icon-youjiantou1"></span>
             </p>
         </div>
         <!-- 我的订单 -->
         <p class="mine_order">
             <span>
                 <span class="iconfont icon-2-copy"></span>
                 我的订单
             </span>
             <span class="all_order" @click="goAllrder">
                 查看全部订单
                 <span class="iconfont icon-youjiantou1"></span>
             </span>
         </p>
         <!-- 我们的服务 -->
         <ul class="mine_server">
             <li v-for="(item,index) in mineOrder" :key="index">
                 <span class="iconfont" :class="item.icon"></span>
                 {{item.title}}
             </li>
         </ul>
         <p class="notice" @click="goRushtobuy">
             <span style="color: #fede00" class="iconfont icon-kuaisufan"></span>
             <span>限时秒杀</span>
             <span class="iconfont icon-youjiantou1"></span>
         </p>
         <p class="notice" @click="collectionCenter">
             <span style="color: #da1f0c" class="iconfont icon-wujiaoxing21"></span>
             <span class="collection">我的收藏<i class="num_icon">1</i></span>
             <span class="iconfont icon-youjiantou1"></span>
         </p>
         <p class="notice">
             <span style="color: #1bf82c" class="iconfont icon-shezhi"></span>
             <span>设置</span>
             <span class="iconfont icon-youjiantou1"></span>
         </p>

         <div class="login_out" @click="loginOut">退出登录</div>
  </div>
</template>


<script>
export {default} from './personalcenterCtr'
</script>



<style scoped>
.personalcenter{
    width: 100%;
    height: 100%;
    background-color: #eaeaea;
}
.personalcenter_banner{
    width: 100%;
    height: 5.3rem;
    padding-top: .001rem;
    background-image: url('../../assets/png/personalBg.png');
    background-size: cover;
    background-repeat: no-repeat;
}
.user_header{
    width: 1.9rem;
    height: 1.9rem;
    border: .15rem solid rgba(0, 0, 0, .5);
    border-radius: 50%;
    margin: .5rem auto 0;
    overflow: hidden;
}
.user_header img{
    border-radius: 50%;
}
.personalcenter_banner p{
    margin: 0;
    text-align: center;
    font-size: .34rem;
    color: #fff;
    padding-top: .2rem;
}
.user_header_address{
    font-size: .4rem !important;
}
.user_header_address span.iconfont{
    font-weight: bold;
    font-size: .5rem;
    padding-left: .1rem;
}
.mine_order{
    margin: 0;
    display: flex;
    display: -webkit-flex;
    justify-content: space-between;
    padding: .25rem .2rem;
    font-size: .36rem;
    background-color: #fff;
}
.mine_order span.icon-2-copy{
    font-size: .5rem;
    color: #e56e34;
}
.mine_order span.all_order{
    color: #8f8f8f;
}
.mine_order span.all_order span{
    font-weight: bold;
}

.mine_server{
    display: flex;
    display: -webkit-flex;
    padding: 0;
    margin: .15rem 0 0;
    background-color: #fff;
    padding: .25rem .15rem;
}
.mine_server li{
    list-style: none;
    font-size: .34rem;
    flex: 2;
    text-align: center;
    color: #8f8f8f;
}
.mine_server li:last-child{
    flex: 3;
}
.mine_server li span.iconfont{
    font-size: .6rem;
    display: block;
}
.mine_server li:nth-child(2) span.iconfont{
    font-size: .5rem;
    padding-bottom: .1rem;
}

.notice{
    position: relative;
    padding: 0;
    margin: .15rem 0 0;
    font-size: .36rem;
    padding: .25rem .2rem;
    background-color: #fff;
}
.notice span:first-child{
    font-size: .6rem;
    vertical-align: middle;
    padding-right: .1rem;
}
.notice span:last-child{
    position: absolute;
    right: .2rem;
    font-size: .36rem;
    font-weight: bold;
}

.login_out{
    width: 6.3rem;
    height: .9rem;
    margin: .3rem auto;
    background-color: #e56e36;
    color: #fff;
    text-align: center;
    line-height: .9rem;
    font-size: .36rem;
    border-radius: .15rem;
}


.collection{
    position: relative;
}
.num_icon{
    position: absolute;
    right: -.52rem;
    top: -.2rem;
    display: inline-block;
    color: #fff;
    background-color: #e82a1a;
    width: .35rem;
    height: .35rem;
    border-radius: 50%;
    text-align: center;
    line-height: .35rem;
    font-size: .3rem;
}
</style>

