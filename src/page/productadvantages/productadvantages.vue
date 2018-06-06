<template>
  <div class="productadvantages">
        <div class="title">
            <i class="mint-toast-icon mintui mintui-back" @click="back"></i>
            产品优势
        </div> 
        <div class="container">
            <ul>
                <li class="goByList" v-for="(item,index) in goByList" :key="index">
                  <img :src="item.src" alt="">
                  <p>
                      <span>{{item.type}}</span>
                      <span>{{item.type1}}</span>
                  </p>
                  <p>
                      <span>{{item.name}}</span>
                      <span>{{item.weight}}g</span>
                  </p>
                  <p>
                      <span class="price">¥{{item.price}}</span>
                      <span class="originalprice">¥{{item.originalprice}}</span>
                      <!-- <span class="shopcar">
                          <span class="iconfont icon-addCart"></span>
                      </span> -->
                  </p>
                </li>
            </ul>
            <P class="purchase"  @click="back">去选购吧<span class="iconfont icon-icon-right"></span></P>
        </div>
  </div>
</template>


<script>
export {default} from './productadvantagesCtr'
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
    height: 14.9rem;
    background-image: url(../../assets/png/bg.png);
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    padding-top: .001rem;
}

.container ul{
    display: flex;
    display: -webkit-flex;
    font-size: .32rem;
    margin-top: 8.5rem;
}
.goByList{
    list-style: none;
    width: 3.5rem;
    height: 3.6rem;
    background-image: url(../../assets/png/wk.png);
    background-repeat: no-repeat;
    background-size: cover;
    margin-left: .17rem;
    padding-left: .3rem;
    padding-top: .3rem;
    box-sizing: border-box;
    text-align: center;
}
.goByList img{
    width: 50%;
    text-align: center;
}
.goByList p{
    text-align: left;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    padding-right: .1rem;
}
.goByList p:nth-of-type(2){
    color: #565656;
}
.originalprice{
    text-decoration: line-through;
    color: #565656;
}
.price{
    color: #cf010d;
}


.shopcar{
    display: inline-block;
    width: 1.25rem;
    height: .4rem;
    background-color: #cf010d;
    border-radius: .3rem;
    margin-top: .2rem;
    text-align: center;
    padding: .05rem 0;
}

.purchase{
    color: #1baaec;
    font-size: .4rem;
    text-align: center;
    margin-top: .55rem;
}
.purchase span.iconfont{
    padding-left: .2rem;
    font-weight: bold;
}
</style>

