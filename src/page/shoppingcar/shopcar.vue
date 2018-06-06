<template>
	<div class="shopcar">
		<!--头部-->
		<mt-header title="购物车" class="myheader">
		  <mt-button v-if="!isShow" slot="right" @click="showGoods">编辑</mt-button>
		  <mt-button v-if="isShow" slot="right" @click="showGoods">完成</mt-button>
		</mt-header>
		<!--===差多少包邮========-->
		<!--<div class="difference">
			<div class="subtraction">全场满<span>{{full}}</span>元包邮，还差<span>{{reduce}}</span>元</div>
			<div class="collect">立即凑单</div>
		</div>-->
		
		<!--====商品列表=============-->
		<div style="padding: 1rem 0;">
			<div v-for="(item,index) in goods" :key="item.goods_id" class="goods">
				
				<span class="iconfont box" :class="item.isActive?'icon-roundcheckfill':'icon-roundcheck'" @click="changebox(item,index)"></span>
							
				<img :src="myurl + item.picture" alt="" class="goodsImg"/>
				<div class="goodsDo">
					<span class="goodsName">{{item.name}}</span>
					<span class="goods_money">￥{{item.market_price}}</span>
					<div class="changenum">
						<span class="remNum"><i class="iconfont icon-jianhao" @click="changeMoney(item,-1)"></i></span>
						<input type="number"  v-on:change="changeNum(index)"  v-model="item.number" disabled="disabled"/>
						<span class="addNum"><i class="iconfont icon-jiahao1" @click="changeMoney(item,+1)"></i></span>
					</div>
				</div>
				<!--<span class="more">更多 <i class="iconfont icon-youjiantou2"></i></span>-->
				<!--<span style="font-size: .15rem;">{{item.goodsTotal}}</span>-->
				
			</div>
		</div>
		
		<!--=====foot部分==========-->
		<div id="goodFood">
			<span class="iconfont box" :class="allState?'icon-roundcheckfill':'icon-roundcheck'" @click="allDo()"></span>
			<span class="allDo">全选</span>
			<div class="pay" v-if="!isShow">
				<div class="copePay">
					应付：<span>￥</span><span>{{totalMoney}}</span>
				</div>
				<!--<div class="realPay">
					<p>总价：<span>{{totalMoney}}</span></p>
					<p>优惠：<span>0</span></p>
				</div>-->
			</div>
			
			<div id="payDo" v-if="!isShow">
				<span>去结算</span>(<span>{{checkboxModel.length}}</span>)
			</div>
			
			<div id="delGood" v-if="isShow" @click="delGoods">
				<span>删除</span>(<span>{{checkboxModel.length}}</span>)
			</div>
			
		</div>
		
	</div>
</template>

<script>
	export {default} from './shopcarCtr.js'
</script>

<style scoped>
	.myheader{
		position: fixed;
		top: 0;
		width: 100%;
		left: 0;
	}
	/*=头部==*/
	.mint-header{
		background-color: #FFFFFF;
		color: #000000;
		border-bottom:1px solid #cccccc ;
	}
	.mint-header-title{
		font-size: .34rem;
	}
	/*=差多少包邮=*/
	.difference{
		background-color: #ffd086;
		color: #FFFFFF;
		font-size: .15rem;
		overflow: hidden;
		padding: .17rem .15rem;
	}
	.subtraction{
		float: left;
	}
	.collect{
		float: right;
	}
	/*==商品========*/
	.goods{
		overflow: hidden;
		padding: .2rem;
		background-color: #FFFFFF;
		margin-bottom: .1rem;
	}
	.goods .box{
		display: block;
		float: left;
		font-size: .6rem;
		margin-top: .5rem;
		margin-right: .15rem;
	}
	.goodsImg{
		display: block;
		float: left;
		width: 1.65rem;
		height: 1.65rem;
		border-radius:.1rem ;
	}
	.goodsName{
		display: block;
		margin-bottom: .1rem;
		font-size: .34rem;
		font-weight: 600;
		overflow: hidden;
	    text-overflow:ellipsis;
	    white-space: nowrap;
	}
	.goods_money{
		display: block;
		margin-bottom: .1rem;
		font-size: .3rem;
		font-weight: 600;
		color: red;
		overflow: hidden;
	    text-overflow:ellipsis;
	    white-space: nowrap;
	}
	.goodsDo{
		display: block;
		float: left;
		width: 3.3rem;
		height: 1.65rem;
		margin-left: .2rem;
	}
	.icon-roundcheck{
		color: #D3D3D3;
	}
	.icon-roundcheckfill{
		color: #69ba31;
	}
	.more{
		color: #808080;
		font-size: .13rem;
		float: right;
	}
	.more i{
		font-size:.05rem;
	}
	.changenum{
		width: 100%;
		height: .5rem;
		line-height: .5rem;
	}
	.changenum span{
		display: block;
		float: left;
		font-size: .2rem;
		width: .53rem;
		height: .53rem;
		line-height: .53rem;
		border: 1px solid #b5b5b5;
		text-align: center;
	}
	.changenum span i{
		font-size: .3rem;
		font-weight: 600;
	}
	.remNum{
		border-radius: 5px 0 0 5px;
	}
	.addNum{
		border-radius: 0 5px 5px 0;
	}
	.changenum input{
		display: block;
		float: left;
		width: .8rem;
		border: 1px solid #b5b5b5;
		border-left: none;
		border-right: none;
		text-align: center;
		height: .53rem;
		outline: none;
	}
	
	/*=====foot=====*/
	#goodFood{
		width: 100%;
		height: 1.1rem;
		background-color: #FFFFFF;
		position: fixed;
		bottom: 1rem;
		font-size: .15rem;
	}
	#goodFood .box {
		display: block;
		float: left;
		font-size: .6rem;
		margin-top: .24rem;
		margin-left: .2rem;
	}
	.allDo{
		float: left;
		font-size: .2.5rem;
		line-height: 1.1rem;
		margin-left: .2rem;
	}
	.pay{
		float: left;
		width: 3.5rem;
		text-align: right;
		padding: .07rem 0;
	}
	.pay p{
		display: inline-block;
		margin-left: .2rem;
	}
	.copePay{
		font-size: .3rem;
		font-weight: 500;
		margin-bottom: .1rem;
		height: .7rem;
		line-height: 1rem;
	}
	.copePay span{
		color: red;
	}
	.realPay{
		color:#828282;
		font-size: .2rem;
	}
	#payDo,#delGood{
		float: right;
		text-align: center;
		width: 2rem;
		height: 100%;
		line-height: 1.1rem;
		color: #FFFFFF;
		background-color: #68b831;
		font-size: .34rem;
	}
	/*.box{
		width: 10px;
		height: 10px;
		background-color: red;
	}*/
</style>
