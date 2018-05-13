<template>
  <div class="accumulativebouns">
      <div class="title">
            <i class="mint-toast-icon mintui mintui-back"></i>
            累计个人奖金
      </div>
      <div class="monthbouns_banner">
          <div class="user_header">
              <img src="../../assets/png/1.png" width="100%" height="100%" alt="头像">
          </div>
      </div>
      <p class="notice_title notice_title1">¥{{money}}</p>
      <p class="notice_title">累计个人奖金（元）</p>
      <div class="hr"></div>
      <ul class="bonus_list">
          <li>
              <div class="year">
                  <span class="iconfont icon-gouxiao"></span>
                  <span>2018</span>
                  年
              </div>
              <div class="month">
                  <ul>
                      <li>
                          <span>月份</span>
                          <span>业绩奖金</span>
                          <span>推荐奖金</span>
                          <span>合计(元)</span>
                          <span>发放情况</span>
                      </li>
                      <li>
                          <span>02</span>
                          <span>16.82</span>
                          <span>37.40</span>
                          <span>54.22</span>
                          <span>未发放</span>
                      </li>
                      <li>
                          <span>02</span>
                          <span>16.82</span>
                          <span>37.40</span>
                          <span>54.22</span>
                          <span>未发放</span>
                      </li>
                  </ul>
              </div>
          </li>
          <li>
             <div class="year">
                  <span class="iconfont icon-jixiao"></span>
                  <span>2017</span>
                  年
              </div>
              <div class="month">
                   <ul>
                      <li>
                          <span>月份</span>
                          <span>业绩奖金</span>
                          <span>推荐奖金</span>
                          <span>合计(元)</span>
                          <span>发放情况</span>
                      </li>
                      <li>
                          <span>02</span>
                          <span>16.82</span>
                          <span>37.40</span>
                          <span>54.22</span>
                          <span>未发放</span>
                      </li>
                      <li>
                          <span>02</span>
                          <span>16.82</span>
                          <span>37.40</span>
                          <span>54.22</span>
                          <span>未发放</span>
                      </li>
                  </ul>
              </div>
          </li>
      </ul>
  </div>
</template>



<script>
export {default} from './accumulativebounsCtr'
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
    display: flex;
    display: -webkit-flex;
    justify-content: space-between;
    list-style: none;
    font-size: .34rem;
    width: 100%;
    height: 2.12rem;
    border-bottom: .01rem solid #d3d3d3;
    margin: 0 auto;
    box-sizing: border-box;
}
.year{
    width: 1.15rem;
    height: 100%;
    border-right: .01rem solid #d3d3d3;
    text-align: center;
}
.year span.iconfont{
    display: inline-block;
    font-size: .5rem;
    margin-top: .25rem;
}
.month{
    width: 6.34rem;
    height: 100%;
}
.month ul{
    width: 100%;
    height: 100%;
}
.month ul li{
    width: 100%;
    height: .7rem;
    font-size: .3rem;
    line-height: .7rem;
    display: flex;
    display: -webkit-flex;
    color: #606060;
}
.month ul li:first-child{
    color: #000;
}
.month ul li:last-child{
    border-bottom: none;
}
.month ul li span{
    flex: 3;
    display: inline-block;
    text-align: center;
    border-right: .01rem solid #d3d3d3;
}
.month ul li span:first-child{
    flex: 2;
}
.month ul li span:last-child{
    border-right: none;
}
</style>

