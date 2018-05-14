<template>
  <div class="purchasenotes">
      <div class="title">
            <i class="mint-toast-icon mintui mintui-back"></i>
            购买须知
      </div> 
     <div class="container">
         <h6 class="title1">温馨提示：</h6>
         <ul class="notice1">
             <li>1. 本店微利，请勿讲价</li>
             <li>2. 冷吃系列，小锅现炒</li>
             <li>3. 发货时间：当天下单按照下单顺序发货，具体时间询问销售人员，不接急单</li>
             <li>4. 产品收到后请尽快使用，若发现产品又胀气、漏气、变为等现象请勿食用，立即联系销售人员</li>
             <li>5. 原产地自贡</li>
         </ul>
     </div>
  </div>
</template>


<script>
export {default} from './purchasenotesCtr'
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


.container{
    position: relative;
    height: 14.9rem;
    background-image: url(../../assets/png/bgq.png);
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
    padding-top: .001rem;
    font-size: .34rem;
}
.title1{
    position: absolute;
    top: 2.4rem;
    left: .45rem;
    color: #6ec0ef;
}
.notice1{
    margin-top: 3rem;
}
</style>

