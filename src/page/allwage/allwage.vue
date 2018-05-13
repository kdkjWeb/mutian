<template>
  <div class="allwage">
      <div class="title">
        <i class="mint-toast-icon mintui mintui-back"></i>
        当月总工资
      </div>

      <ul class="wage_list">
          <li>
              <span class="iconfont icon-icon-test" style="color: #1396dc"></span>
              业绩奖金
              <span class="money">{{money.bonus}}元</span>
          </li>
          <li>
              <span class="iconfont icon-caigouyongjin" style="color: #fe9100"></span>
              当月佣金
              <span class="money">{{money.commission}}元</span>
          </li>
          <li>
              <span class="iconfont icon-geren" style="color: #0ad023"></span>
              个人销量
              <span class="money">{{money.volume}}元</span>
          </li>
          <li>
              <span class="iconfont icon-tuandui1" style="color: #e41300"></span>
              团队奖金
              <span class="money">{{money.team}}元</span>
          </li>
          <li>
              <span class="iconfont icon-xiaoliangzuigao" style="color: #ff6a30"></span>
              团队销量
              <span class="money">{{money.teamvolume}}元</span>
          </li>
      </ul> 
  </div>
</template>


<script>
export {default} from './allwageCtr'
</script>


<style scoped>
/* .allwage{
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


.wage_list{
    padding: 0;
    margin-top: .26rem;
}
.wage_list li{
    position: relative;
    list-style: none;
    width: 100%;
    height: 1.05rem;
    margin-bottom: .15rem;
    background: #fff;
    line-height: 1.05rem;
    font-size: .36rem;
}
.wage_list li span.iconfont{
    padding-left: .2rem;
    padding-right: .05rem;
    font-size: .5rem;
}
.wage_list li span.money{
    position: absolute;
    right: .25rem;
    color: #ce020d;
}
</style>

