<template>
  <div class="productdetails">
      <!-- 顶部轮播图 -->
      <mt-swipe :auto="2000" class="swipe">
        <mt-swipe-item>1</mt-swipe-item>
        <mt-swipe-item>2</mt-swipe-item>
        <mt-swipe-item>3</mt-swipe-item>
        <mt-swipe-item>4</mt-swipe-item>
      </mt-swipe>
      <!-- 基本详情展示模块 -->
      <div class="goods_details">
          <p class="commodityprice">
              <span class="price">¥{{goods.price}}</span>
              <span class="retailprice">零售价：¥{{goods.retailprice}}</span>
              <span class="commission">佣金<span>{{goods.commission}}元</span></span>
              <span class="salesvolume">月销量{{goods.salesvolume}}件</span>
          </p>
          <h3 class="title">{{goods.title}}</h3>
          <p class="content">{{goods.content}}</p>
      </div>
      <!-- 相关保障及产品推荐 -->
      <div class="protection">
          <p class="notice">
              <span class="shipping">{{goods.shipping}}</span>
              全场满{{goods.numprice}}包邮
          </p>
          <ul class="server">
              <li v-for="(item,index) in serverList" :key="index"><span class="iconfont icon-gou"></span>{{item.title}}</li>
          </ul>
          <h3 class="product_title">产品推荐</h3>
          <!-- 产品推荐列表 -->
          <ul class="recommended_list">
              <li v-for="(item,index) in recommendedList" :key="index">
                  <img :src="item.url" alt="">
                  <p>{{item.goodsName}}<span class="goodsWeight">{{item.goodsWeight}}g</span></p>
                  <p class="recommended_goods">
                      <span>¥{{item.goodsPrice}}</span>
                      <span class="iconfont icon-gouwuchekong"></span>
                  </p>
              </li>
          </ul>
      </div>

      <!-- 评论列表 -->
      <div class="discuss">
          <p class="discuss_title">
                <span class="iconfont icon-pinglun1"></span>
                大家都在说(2545)
                <span>查看更多》</span>
          </p>
          <ul class="discuss_list">
                <li v-for="(item,index) in discussList" :key="index">
                    <dl>
                        <dt>
                            <img :src="item.url" alt="头像">
                        </dt>
                        <dd class="bonus_list_money">{{item.userPhone}}</dd>
                        <dd class="discuss_content">{{item.content}}</dd>
                    </dl>
                </li>
          </ul>
      </div>

      <!-- 产品详情以及图片展示 -->
      <div class="productdetails1">
          <h2 class="productdetails_title">产品详情</h2>
          <ul>
              <li v-for="(item,index) in productdetailsList" :key="index">
                  <img :src="item.url" alt="">
              </li>
          </ul>
      </div>
  </div>
</template>


<script>
export {default} from './productdetailsCtr'
</script>



<style scoped>
.swipe{
    height: 7rem;
    background: red;
}
.goods_details{
    background-color: #fff;
    padding: .2rem .15rem;
}
.commodityprice{
    font-size: .3rem;
    color: #737373;
}
.commodityprice .price{
    color: #fe0000;
    font-size: .38rem;
    padding-right: .1rem;
}
.commission{
    padding-left: .1rem;
}
.commission span{
    color: #fe0000;
    padding-left: .1rem;
}
.salesvolume{
    float: right ;
}
.retailprice{
    text-decoration: line-through;
}

.goods_details .title{
    font-size: .4rem;
    padding-bottom: .1rem;
}
.goods_details .content{
    font-size: .34rem;
}


.protection{
    font-size: .34rem;
    background-color: #fff;
    margin-top: .2rem;
}
.notice{
    border-bottom: .01rem solid #b8b8b8;
    width: 7rem;
    margin: 0 auto;
    padding: .2rem 0 .1rem;
}
.notice .shipping{
    display: inline-block;
    border: .01rem solid #fe0000;
    padding: .05rem .25rem;
}
.server{
    display: flex;
    display: -webkit-flex;
    border-bottom: .01rem solid #b8b8b8;
}
.server li{
    flex: 1;
    list-style: none;
    font-size: .3rem;
    text-align: center;
    padding: .15rem 0 .2rem;
}
.server li span.iconfont{
    color: #ee5d31;
    vertical-align: middle;
    font-size: .4rem;
    padding-right: .05rem;
}
.product_title{
    padding: .2rem 0 .2rem .3rem;
}


.recommended_list{
    display: flex;
    display: -webkit-flex;
    justify-content: space-between;
}
.recommended_list li{
    list-style: none;
    flex: 1;
    padding-left: .25rem;
}
.recommended_list li img{
    width: 3.25rem;
    height: 2.45rem;
}
.goodsWeight{
    padding-left: .2rem;
}
.recommended_goods{
    display: flex;
    display: -webkit-flex;
    justify-content: space-between;
}
.recommended_goods span.iconfont{
    padding-right: .2rem;
    font-size: .4rem;
    color: #ca261c;
}


/* 评论列表 */
.discuss{
    font-size: .36rem;
    background-color: #fff;
    margin-top: .2rem;
}
.discuss_title{
    padding: .1rem .2rem;
    border-bottom: .05rem solid #eaeaea;
}
.discuss_title span.iconfont{
    vertical-align: middle;
}
.discuss_list li{
    padding: .2rem;
    font-size: .3rem;
    border-bottom: .01rem solid #ddd;
}
.discuss_list li dt{
    float: left;
    padding-right: .3rem;
}
.discuss_list li dt img{
    width: .9rem;
    height: .9rem;
    border-radius: 50%;
    vertical-align: middle;
}
.discuss_content{
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
}


/* 产品详情 */
.productdetails1{
    margin-top: .2rem;
    background-color: #fff;
}
.productdetails_title{
    font-size: .4rem;
    padding: .2rem 0 .2rem .3rem;
}
.productdetails1 li{
    list-style: none;
    margin-bottom: .05rem;
}
.productdetails1 li img{
    width: 100%;
    display: block;
}
</style>

