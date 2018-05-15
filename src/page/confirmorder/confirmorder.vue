<template>
	<div class="order">	<!--确认订单--> 
		<!--头部-->
		<mt-header title="确认订单">
			<router-link to="/" slot="left">
				<mt-button icon="back"></mt-button>
			</router-link>
			<!--<mt-button icon="more" slot="right"></mt-button>-->
		</mt-header>

		<!--添加收货地址-->
		<div class="addAds">
			<i class="iconfont icon-dizhi"></i>
			<span>添加收货地址</span>
		</div>

		<!--支付方式-->
		<div>
			<div class="payFun">
				<div class="payLeft">
					<i class="iconfont icon-yinhangqia4"></i>
					<span>支付方式</span>
				</div>
				<div class="payRight">
					<i class="iconfont icon-weixin"></i>
					<span>微信支付</span>
					<i class="iconfont icon-arrowdown"></i>
				</div>
			</div>
		</div>
		
		<!--商品信息-->
		<div class="msgTit">
			<i class="iconfont icon-shangpin"></i>
			<span>商品信息</span>
		</div>
		
		<div>
			<div class="goods">
				<img src="../../../static/images/12.png" class="goodsImg"/>
				<div class="goods_Msg">
					<p class="goodsName"><span>自贡冷吃兔</span>&nbsp; <span>200g</span></p>
					<p class="goodsMoney">￥<span>25.00</span></p>
				</div>
				<div class="goods_Num">× <span>5</span></div>
			</div>
		</div>

		<!--留言-->
		<div class="stayMsg">
			<span>选填：</span>
			<input type="text" placeholder="给商家留言(45字内)" maxlength="45"/>
		</div>

		<!--总额 运费-->
		
		<div id="Settlement">
			<div>
				<span>商品总额</span>
				<span class="moneyRight">￥ <span>25.00</span></span>
			</div>
			<div>
				<span>运费</span>
				<span class="moneyRight">￥ <span>25.00</span></span>
			</div>
		</div>
		
		<!--====提交订单=====-->
		<div class="foot">
			
			<input type="button" name="" id="" value="提交订单" />
			<p class="Total">合计：<span class="textRed">￥ <span>2500</span></span></p>
			<p class="Total">共计<span>1</span>件</p>
		</div>
		
		
	</div>
</template>

<script>
	export {
		default
	}
	from './confirmorderCtr'
</script>

<style>
	/*mint ui样式覆盖*/
	
	.mint-header {
		background-color: #FFFFFF;
		color: #000000;
	}
	
	.mint-header-title {
		font-size: .34rem;
	}
	/*=添加地址=*/
	
	.addAds {
		width: 100%;
		height: .94rem;
		line-height: .94rem;
		background-color: #FFFFFF;
		font-size: .18rem;
		margin-top: .07rem;
	}
	
	.addAds i ,.payLeft i,.msgTit i{
		display: inline-block;
		width: .8rem;
		font-size: .5rem;
		color: #7e7e7e;
		text-align: center;
		vertical-align: middle;
	}
	/*=支付方式=*/
	.payFun,.msgTit{
		margin-top: .2rem;
		background-color: #FFFFFF;
		font-size: .15rem;
		width: 100%;
		height: .75rem;
		line-height: .75rem;
	}
	.payLeft{
		float: left;
	}
	.payLeft i{
		font-size: .6rem;
	}
	.payRight{
		float: right;
	}
	.payRight .icon-weixin{
		display: inline-block;
		color: #68b831;
		width: .5rem;
		font-size: .4rem;
		vertical-align: middle;
	}
	.payRight .icon-arrowdown{
		display: inline-block;
		color: #333333;
		width: .5rem;
		font-size: .4rem;
		vertical-align: middle;
	}
	/*==商品信息=*/
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
		width: 3.5rem;
	}
	.goods_Num{
		float: right;
		font-size: .2rem;
		height: 2rem;
		line-height: 3rem;
	}
	.goodsName{
		font-size: .3rem;
		font-weight: 400;
	}
	.goodsMoney{
		margin-top: .3rem;
		color: red;
		font-size: .18rem;
	}
	
	/*==留言=*/
	.stayMsg{
		height: .94rem;
		line-height: .94rem;
		background-color: #FFFFFF;
		font-size: .18rem;
		margin-top: .07rem;
		padding-left:.2rem;
		color: #333;
		overflow: hidden;
	}
	
	.stayMsg input{
		border: none;
		height: 100%;
		width: 70%;
		outline: none;
	}
	/*==总额 运费=*/
	#Settlement{
		margin-top: .08rem;
		font-size: .15rem;
		background-color: #FFFFFF;
	}
	#Settlement div{
		color: #333;
		padding-left:.2rem;
		height: .73rem;
		line-height: .73rem;
	}
	.moneyRight{
		float: right;
		margin-right: .2rem;
		color: #000000;
		font-weight: 400;
	}
	/*提交订单*/
	.foot{
		position: fixed;
		bottom: 0;
		width: 100%;
		height: 1rem;
		line-height: 1rem;
		background-color: #FFFFFF;
		font-size: .15rem;
	}
	.foot input{
		float: right;
		width: 1.8rem;
		height: .77rem;
		border: none;
		outline: none;
		border-radius: .1rem;
		margin-top: .1rem;
		margin-right: .23rem;
		color:#FFF;
		background-color: red;
	}
	.foot p{
		display: inline-block;
		float: right;
		margin-right: .3rem;
	}
	.textRed{
		color: red;
	}
</style>