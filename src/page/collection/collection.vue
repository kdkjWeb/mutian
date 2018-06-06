<template> <!--我的收藏-->
	<div class="collection">
		 <div class="title">
            <i class="mint-toast-icon mintui mintui-back" @click="back"></i>
	            	我的收藏
	        	<div class="titRight" @click="change">
	        		  <i class="iconfont icon-shanchu" v-if="!isShow"></i> <span v-if="isShow">完成</span>	
	        	</div>
	      </div>
		<div>   <!--我的收藏商品-->
			<div class="goods" v-for="(item,index) in goodsList" :key="item.id">
				<div class="goodsDo" v-if="isShow"><i class="iconfont" :class="item.isActive?'icon-roundcheckfill':'icon-roundcheck'" @click="changeActive(item,index)"></i></div>
				<img :src="myurl + item.picture" class="goodsImg"/>
				<div class="goods_Msg">
					<p class="goodsName"><span>{{item.name}}</span>&nbsp; <span>200g</span></p>
					<p class="goodsMoney">￥<span>{{item.market_price}}</span></p>
					<p class="isHave">
						<span>有货</span>
						<!--<span v-if="good.stock">有货</span>-->
						<!--<span v-else>无货</span>-->
					</p>
				</div>
				<div class="goodsCar" v-if="!isShow" @click="addShopcar(item.goods_id)"><i class="iconfont icon-jiarugouwuche"></i></div>
			</div>
		</div>
		
		<!--===购物车按钮=====-->
		<div class="addCar" v-if="!isShow" @click="goShopcar">
			<span>{{shopCarNum}}</span>
			<i class="iconfont icon-gouwuche"></i>
		</div>
		
		<div class="foot" v-if="isShow">
			<i class="iconfont" :class="allState?'icon-roundcheckfill':'icon-roundcheck'" @click="allDo()"></i>
			<span>全选</span>
			<input type="button" value="删除" @click="delGoods"/>
		</div>
		
		
	</div>

</template>

<script>
	export {default} from './collectionCtr'
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
.titRight{
	position: absolute;
	float: right;
	right: .5rem;
	top: 0;
}	
/*mint ui样式覆盖*/
	.mint-header {
		background-color: #FFFFFF;
		color: #000000;
	}
	.mint-header-title {
		font-size: .34rem;
	}
	/*=删除按钮==*/
	.icon-shanchu{
		font-size: .5rem;
	}
	
	/*==商品*/
	.icon-roundcheck{
		color: #D3D3D3;
	}
	.icon-roundcheckfill{
		color: #69ba31;
	}
	.goods {
		padding: .3rem .4rem;
		overflow: hidden;
		background-color: #FFFFFF;
		margin-top: .08rem;
	}
	.goods .goodsImg{
		display: block;
		float: left;
		width: 2.3rem;
		height: 2.1rem;
		border-radius: .15rem;
		margin-right: .4rem;
	}
	.goods_Msg{
		float: left;
		font-size: .2rem;
		width: 3rem;
	}
	.isHave{
		margin-top: .4rem;
		color: #8e8e8e;
	}
	.goodsName{
		font-size: .3rem;
		font-weight: 400;
	}
	.goodsMoney{
		margin-top: .3rem;
		color: red;
		font-size: .4rem;
	}
	.goodsCar {
		float: right;
		margin-top: .7rem;
	}
	.goodsCar i{
		color: #ca261a;
		font-size: .6rem;
	}
	.goodsDo{
		float: left;
		margin-right: .3rem;
		height: 2rem;
		line-height: 2rem;
	}
	.goodsDo i{
		font-size: .6rem;
	}
	/*==购物车按钮=========*/
	.addCar{
		position: fixed;
		right: .3rem;
		bottom: .8rem;
		width: .9rem;
		height: .9rem;
		line-height: .9rem;
		text-align: center;
		background-color: #FFFFFF;
		color: #000000;
		display: inline-block;
		border-radius: 100%;
	}
	.addCar span{
		width: .4rem;
		height: .4rem;
		text-align: center;
		line-height: .4rem;
		position: absolute;
		font-size: .12rem;
		background-color: red;
		color: #FFFFFF;
		border-radius: 100%;
	}
	.addCar i{
		display:block;
		font-size: .5rem;
		font-weight: 700;
	}
	
	/*==底部===*/
	.foot{
		position: fixed;
		bottom: 0;
		width: 100%;
		height: .8rem;
		line-height: .8rem;
		background-color: #FFFFFF;
		font-size: .15rem;
	}
	.foot input{
		float: right;
		width: 2rem;
		height: .6rem;
		background-color: #fd4d4d;
		color: #FFFFFF;
		border: none;
		outline: none;
		border-radius: 4px;
		margin-top: .1rem;
		margin-right: .33rem;
	}
	.foot span{
		
	}
	.foot i{
		vertical-align: middle;
	}
	.foot .iconfont{
		display: inline-block;
		font-size: .6rem;
		margin-left: .4rem;
	}
</style>