<template>
  <div class="monthbouns">
      <div class="title">
            <i class="mint-toast-icon mintui mintui-back"></i>
            本月个人奖金
      </div>
      <div class="monthbouns_banner">
          <div class="user_header">
              <img src="../../assets/png/1.png" width="100%" height="100%" alt="头像">
          </div>
      </div>
      <p class="notice_title notice_title1">¥{{money}}</p>
      <p class="notice_title">当月总奖金（元）</p>
      <div class="hr"></div>
      <ul class="bonus_list">
          <li>
              <dl>
                  <dt>
                      <img src="../../assets/png/1.png" alt="头像">
                  </dt>
                  <dd class="bonus_list_money">20.60元</dd>
                  <dd>当月业绩奖金</dd>
              </dl>
          </li>
          <li>
              <dl>
                  <dt>
                      <img src="../../assets/png/1.png" alt="头像">
                  </dt>
                  <dd class="bonus_list_money">30.60元</dd>
                  <dd>当月业绩奖金</dd>
              </dl>
          </li>
      </ul>
  </div>
</template>



<script>
export {default} from './monthbounsCtr'
</script>

<style scoped>

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

.monthbouns_banner{
    width: 100%;
    height: 1.75rem;
    background-color: #e79120;
    padding: .001rem;
    margin-bottom: 1.2rem;
}
.user_header{
    width: 1.95rem;
    height: 1.95rem;
    border: .15rem solid #f2b66d;
    border-radius: 50%;
    margin: .4rem auto 0;
    overflow: hidden;
}
.user_header img{
    border-radius: 50%;
}
.notice_title{
    margin: 0;
    font-size: .36rem;
    text-align: center;
    padding-bottom: .1rem;
}
.notice_title1{
    color: #cd000f !important;
}
.hr{
    width: 100%;
    height: .1rem;
    background-color: #d3d3d3;
}

.bonus_list li{
    list-style: none;
    font-size: .34rem;
    width: 4.91rem;
    height: 1.51rem;
    border: .01rem solid #d3d3d3;
    margin: 0 auto;
    box-sizing: border-box;
    border-bottom: none;
    padding: .25rem 0;
}
.bonus_list li dt{
    float: left;
    padding: 0 .5rem 0 .7rem;
    text-align: center;
}
.bonus_list li img{
    width: .9rem;
    height: .9rem;
    vertical-align: middle;
}
.bonus_list_money{
    color: #e50150;
}
</style>

