<template>
  <div class="memberbenefits">
      <div class="member">
          <img src="static/images/member.png" alt="">
      </div>
      <div class="member_title1">如何成为会员？</div>
      <p class="member_notice">1.累计购买商品168元产品品尝后成为会员</p>
      <div class="go_buy">去购买<span class="iconfont icon-bofang"></span></div>
      <p class="member_notice">2.购买以下会员礼包</p>

      <!-- 购买列表 -->
      <ul class="goBuy">
          <li class="goByList" v-for="(item,index) in goByList" :key="index">
              <div class="product_img">
                  <img :src="item.src" alt="">
              </div>
              <div class="product_list">
                  <p>
                      <span>{{item.type}}</span>
                      <span>{{item.type1}}</span>
                  </p>
                  <p>
                      <span>{{item.name}}</span>
                      <span>{{item.weight}}g</span>
                  </p>
                  <p>
                      <span class="price">¥ {{item.price}}</span>
                      <span class="originalprice">¥ {{item.originalprice}}</span>
                  </p>
                  <div class="buycar">
                      <span class="iconfont icon-addCart"></span>
                  </div>
              </div>
          </li>
      </ul>
       <div class="member_title1 member_title2">吃货们，赶快加入吧！</div>
  </div>
</template>



<script>
export {default} from './memberbenefitsCtr'
</script>



<style scoped>
.memberbenefits{
    background-color: #a4a4a4;
}
.member img{
    width: 100%;
    display: block;
}

.member_title1{
    width: 4rem;
    height: .8rem;
    margin: .15rem auto .25rem;
    font-size: .32rem;
    text-align: center;
    line-height: 1.14rem;
    color: #fff;
    background-image: url(../../assets/png/member1.png);
    background-size: cover;
    background-repeat: no-repeat;
}
.member_title2{
    width: 5rem;
    line-height: 1.4rem;
    height: 1rem;
    background-image: url(../../assets/png/member2.png);
    margin-bottom: .25rem;
}


.member_notice{
    font-size: .34rem;
    padding-left: .4rem;
}
.go_buy{
    width: 1.5rem;
    height: .4rem;
    background-color: #cf010d;
    border-radius: .15rem;
    font-size: .3rem;
    text-align: center;
    line-height: .4rem;
    color: #fff;
    margin: .15rem auto;
}


.goBuy{
    margin-top: .45rem;
}
.goByList{
    list-style: none;
    display: flex;
    display: -webkit-flex;
    margin-bottom: .2rem;
    background-color: #fff;
    padding: .2rem 0;
}
.goByList div{
    flex: 1;
}

.product_img{
    text-align: right;
}
.product_img img{
    width: 85%;
    display: block;
    float: right;
}
.product_list{
    font-size: .34rem;
    padding-left: .2rem;
}
.product_list p{
    padding-top: .2rem;
}
.product_list p:nth-child(2){
    color: #565656;
}


.price{
    color: #cf010e;
    font-size: .4rem;
}
.originalprice{
    text-decoration: line-through;
    color: #565656;
}

.buycar{
    width: 1.25rem;
    height: .4rem;
    background-color: #cf010d;
    border-radius: .3rem;
    margin-top: .2rem;
    text-align: center;
    padding: .05rem 0;
}
.buycar span.iconfont{
    color: #fff;
    font-weight: 500;
}
</style>

